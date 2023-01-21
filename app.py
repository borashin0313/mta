#import streamlit as st
import glob
from google.cloud import bigquery
from google.oauth2 import service_account

def mta_conncection():
    key_path = glob.glob("/Users/bora/key/mta-service-8da139702a3e.json")[0]
    credentials = service_account.Credentials.from_service_account_file(key_path)

    client = bigquery.Client(credentials = credentials, 
                            project = credentials.project_id)
    return client

def load_user(user_name):
    client = mta_conncection()
    sql = f"""
        SELECT * FROM mta-service.raw_db.users
        WHERE user_name = '{user_name}'
        """
    query_job = client.query(sql)
    df = query_job.to_dataframe()
    return df

def insert_user(user_name, gender, birthday, address):
    client = mta_conncection()
    table_id = "mta-service.raw_db.users"
    
    sql = f"""
        SELECT max(user_id) FROM mta-service.raw_db.users
        
        """
    query_job = client.query(sql)
    df = query_job.to_dataframe()
    next_id = df.values[0][0]
    
    rows_to_insert = [
    {"user_id" : next_id, "user_name" : user_name, "gender": gender, "birthday" : birthday, "address" : address},
    ]

    errors = client.insert_rows_json(table_id, rows_to_insert)  # Make an API request.
    if errors == []:
        print(f"New user {next_id} have been added.")
    else:
        print("Encountered errors while inserting rows: {}".format(errors))
    
    



def main():
    client = mta_conncection()
    df = load_user('신보라')
    print(df)
    
    insert_user('안형진','남','1987-12-08','서울시')
    
if __name__ == '__main__':
    main()
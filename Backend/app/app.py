from flask import Flask, request, jsonify
from io import StringIO
import nltk
import requests
import json
import pandas as pd
import os

app = Flask(__name__)

def get_object_storage_file_with_credentials_03328afe82cd401c96df5d0a2607868f(container, filename):
    """This functions returns a StringIO object containing
    the file content from Bluemix Object Storage."""

    url1 = ''.join(['https://identity.open.softlayer.com', '/v3/auth/tokens'])
    data = {'auth': {'identity': {'methods': ['password'],
            'password': {'user': {'name': 'member_eb4693cab428dabc6a3afed98bfb665fce3c5b6f','domain': {'id': '472358e8c3014c3fa955a6c4aa43afb1'},
            'password': 'o/=k2SCe1-=T05bN'}}}}}
    headers1 = {'Content-Type': 'application/json'}
    resp1 = requests.post(url=url1, data=json.dumps(data), headers=headers1)
    resp1_body = resp1.json()
    for e1 in resp1_body['token']['catalog']:
        if(e1['type']=='object-store'):
            for e2 in e1['endpoints']:
                        if(e2['interface']=='public'and e2['region']=='dallas'):
                            url2 = ''.join([e2['url'],'/', container, '/', filename])
    s_subject_token = resp1.headers['x-subject-token']
    headers2 = {'X-Auth-Token': s_subject_token, 'accept': 'application/json'}
    resp2 = requests.get(url=url2, headers=headers2)
    return StringIO(resp2.text)

df_data_1 = pd.read_csv(get_object_storage_file_with_credentials_03328afe82cd401c96df5d0a2607868f('JokesAnalysis', 'Jokes.csv'), error_bad_lines=False)
df_data_1.head()

nltk.download('stopwords')

commonwords = [e.upper() for e in set(nltk.corpus.stopwords.words('english'))] 
commonwords.extend(['M', 'VE'])
tokenizer = nltk.tokenize.RegexpTokenizer(r'\w+')  
string_to_list = lambda x: [el.upper() for el in tokenizer.tokenize(x) if el.upper() not in commonwords]
df_data_1['Joke'] = df_data_1['Raw_joke'].apply(string_to_list)
df_data_1.head()


df_data_1['Year'] = df_data_1['Year'].apply(int)

def get_all_words(dataframe):
    all_words = []
    for jk in dataframe['Joke']:
        all_words.extend(jk)
    return all_words

all_words = get_all_words(df_data_1[df_data_1['Year'] <= 2014])
all_words[:10]

def extract_features(joke, all_words):
    words = set(joke)
    features = {}
    for word in words:
        features['contains(%s)' % word] = (word in all_words)
    return features

df_data_1['Features'] = df_data_1['Joke'].apply(lambda x:extract_features(x, get_all_words(df_data_1[df_data_1['Year'] <= 2013])))
df_data_1.head()

funny_threshold = 5
df_data_1['Rank'] = df_data_1['Rank'].apply(int)
df_data_1['Funny'] = df_data_1['Rank'] <= funny_threshold
df_data_1.head(10)

df_data_1['Labeled_Feature'] = zip(df_data_1['Features'],df_data_1['Funny'])
df_data_1.head()  

classifier = nltk.NaiveBayesClassifier.train(df_data_1[df_data_1['Year'] <= 2014]['Labeled_Feature'])
classifier.show_most_informative_features(10)

@app.route('/classify/<string:value>', methods=['GET'])
def classify(value):
    responseValue = classifier.classify(extract_features(string_to_list(value), get_all_words(df_data_1[df_data_1['Year'] <= 2013])))
    return jsonify({'value':responseValue})


port = os.getenv('PORT','8080')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(port), debug=True)





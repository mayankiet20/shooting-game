import requests
import json
url = "https://data.mongodb-api.com/app/data-uxskh/endpoint/data/v1/action/find"

payload = json.dumps({
    "collection": "details",
    "database": "billing",
    "dataSource": "billingchartdb",
    "projection": {
    }
})
headers = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
  'api-key': 'jSlPFEFojxV0dt9UMveyCTuBeEBmsmYCTeutf9nHNojK5WxemvD7Xedqn4BZ81Ek', 
}

response = requests.request("POST", url, headers=headers, data=payload)
json_object = json.loads(response.text)

json_formatted_str = json.dumps(json_object, indent=2)

print(json_formatted_str)
json_object = json.loads(response.text)
json_formatted_str = json.dumps(json_object, indent=2)
#print(response.text)

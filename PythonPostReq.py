import requests

with open('TestImages/zidane.jpg', 'rb') as f:
    data = f.read()
print(data)
exit()
response = requests.post("https://281ku6845d.execute-api.eu-west-2.amazonaws.com/v1/test2", data=data, headers={'Content-Type': 'image/jpg'})




#Do for Node Js Or React OR Requests

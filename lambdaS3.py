import requests
import base64
import boto3

s3 = boto3.resource('s3')
bucket_name = 'sohaib-bucket-test'
#where the file will be uploaded, if you want to upload the file to folder use 'Folder Name/FileName.jpeg'
file_name_with_extention = 'image_decoded.jpeg'
url_to_download = 'URL'

#make sure there is no data:image/jpeg;base64 in the string that returns
def get_as_base64(url):
    return base64.b64encode(requests.get(url).content)

def lambda_handler(event, context):
    image_base64 = get_as_base64(url_to_download)

    obj = s3.Object(Bucket=bucket_name,Key=file_name_with_extention)
    obj.put(Body=base64.b64decode(image_base64))
    #get bucket location
    location = boto3.client('s3').get_bucket_location(Bucket=bucket_name)['LocationConstraint']
    #get object url
    object_url = "https://%s.s3-%s.amazonaws.com/%s" % (bucket_name,location, file_name_with_extention)
    print(object_url)

def lambda_handler2(event, context):
    s3 = boto3.client("s3")

    get_file_binary_content = event["content"]
    decode_content = base64.b64decode(get_file_binary_content)

    s3_upload = s3.put_Object(Bucket=bucket_name,Key=file_name_with_extention, Body=decode_content)

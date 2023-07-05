# app-engine-sample

## config  project

```
gcloud config list project
gcloud config set project <PROJECT_ID>
```

```
touch main.py
touch requirements.txt
touch app.yaml
gcloud app deploy
```

Your web app is now ready to respond to HTTP requests on https://PROJECT_ID.REGION_ID.r.appspot.com.

## Test the web app

```
APPENGINE_HOSTNAME=$(gcloud app describe --format "value(defaultHostname)")
curl https://$APPENGINE_HOSTNAME
```

You should get the following answer:
Hello World!

## Update the web app
```
gcloud app deploy --quiet
```


Test the new version of your web app, exactly as you did previously:

```
curl https://$APPENGINE_HOSTNAME
```
You should get the same answer:
Hello World!


```
curl https://$APPENGINE_HOSTNAME?who=Universe

```

You should get the following answer:
Hello Universe!
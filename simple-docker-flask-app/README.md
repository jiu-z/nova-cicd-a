# simple-docker-flask-app
Simple Docker Flask App
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: ['build', '-t', 'gcr.io/<YOUR_PROJECT_ID>/sample_docker_app', '.']
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/<YOUR_PROJECT_ID>/sample_docker_app']

  
sed -i "s/<YOUR_PROJECT_ID>/$(gcloud config get-value project)/g" config.yaml

# Create logging bucket
# Replace ##### with random digits
gsutil mb gs://ca-lab-build-logs-#####
# Get the bucket created
log_dir=$(gsutil ls)
# Start the CloudBuild pipeline
gcloud builds submit --config config.yaml . --gcs-log-dir=${log_dir}logs


gcloud builds submit --config config.yaml . --gcs-log-dir=gs://ca-lab-build-logs-1234/logs
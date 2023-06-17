FROM python:3.7-slim
# Copy local code to the container image.
WORKDIR /app
COPY . ./
# Install production dependencies.
RUN pip install Flask gunicorn
# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 2 threads.
CMD exec gunicorn --bind :8080 --workers 1 --threads 2 app:app
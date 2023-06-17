#Import of the Flask module (it represents the framework used in this app)
from flask import Flask

#Definition of the application
app = Flask(__name__)

#Definition of the route the app needs to listen to
@app.route('/')
#Definition of the method called when the / path is triggered
def hello_world():
    target = 'World'
    return 'Hello {}!\n'.format(target)

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8080)
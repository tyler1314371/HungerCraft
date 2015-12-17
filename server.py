from flask import Flask, Blueprint
from flask.ext.cors import *
from flask import request
from database import *
import json

#using python flask framework to host our backend
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/login/<user_id>")
@cross_origin()
def login(user_id):
	return json.dumps('login')


@app.route("/get_notification/<user_id>")
@cross_origin()
def get_notification(user_id):
	print 'polling for ' + user_id
	return json.dumps(user_id)



@app.route("/action/<user_id>/<actions>")
@cross_origin()
def action():



app.run()



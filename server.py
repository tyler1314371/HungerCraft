from flask import Flask, Blueprint
from flask.ext.cors import *
from flask import request
from database import *
import json

#using python flask framework to host our backend
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/login/<user_id>/<pwd>")
@cross_origin()
def login(user_id,pwd):
	return json.dumps(login_user(user_id,pwd))


@app.route("/register/<user_id>/<pwd>/<email>")
@cross_origin()
def register(user_id,pwd,email):
	if(register_user(user_id,pwd,email)):
		return json.dumps('ok')
	else:
		return json.dumps('failed_dup_user')

@app.route("/save/<user_id>", methods=['GET', 'POST'])
@cross_origin()
def save(user_id):

	data = json.loads(request.form.get('data'))
	print(data)
	#save_user(user_id,dataDict);
	return json.dumps("save")




app.run("0.0.0.0",5000)



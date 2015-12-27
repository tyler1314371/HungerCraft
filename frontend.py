import json
#import urllib2
#from ntlm import HTTPNtlmAuthHandler
from flask.ext.cors import *
from flask import *
import time



'''
#using python flask framework to host our backend
app = Flask(__name__, template_folder='C:\\Users\\Redirection\\NIUC3\\Desktop\\Archives\\Tyler\\angular' , static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
    #return app.root_path


@app.route('/app/js/<path:path>')
def send_js(path):
	return send_from_directory('C:\\Users\\Redirection\\NIUC3\\Desktop\\Archives\\Tyler\\angular\\app\\js', path)

@app.route('/assets/<path:path>')
def send_assets(path):
	return send_from_directory('C:\\Users\\Redirection\\NIUC3\\Desktop\\Archives\\Tyler\\angular\\assets', path)

@app.route('/app/tpls/<path:path>')
def send_tpls(path):
	return send_from_directory('C:\\Users\\Redirection\\NIUC3\\Desktop\\Archives\\Tyler\\angular\\app\\tpls', path)
'''








#using python flask framework to host our backend
app = Flask(__name__, template_folder='E:\\Hungercraft\\HungerCraft\\angular' , static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
    #return app.root_path


@app.route('/app/js/<path:path>')
def send_js(path):
	return send_from_directory('E:\\Hungercraft\\HungerCraft\\angular\\app\\js', path)

@app.route('/assets/<path:path>')
def send_assets(path):
	return send_from_directory('E:\\Hungercraft\\HungerCraft\\angular\\assets', path)

@app.route('/app/tpls/<path:path>')
def send_tpls(path):
	return send_from_directory('E:\\Hungercraft\\HungerCraft\\angular\\app\\tpls', path)









app.run(host='0.0.0.0', port=9000)

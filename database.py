import sqlite3
import base64

#initialize database connection & setting up cursor
conn = sqlite3.connect('WG.db')
c = conn.cursor()

#Create table
c. execute('''CREATE TABLE IF NOT EXISTS users(username text, password text, email text, info_set integer)''')
c. execute('''CREATE TABLE IF NOT EXISTS artifacts_1(username text, info text)''')
c. execute('''CREATE TABLE IF NOT EXISTS resources_1(username text, info text)''')
c. execute('''CREATE TABLE IF NOT EXISTS ships_1(username text, info text)''')
c. execute('''CREATE TABLE IF NOT EXISTS artifacts_2(username text, info text)''')
c. execute('''CREATE TABLE IF NOT EXISTS resources_2(username text, info text)''')
c. execute('''CREATE TABLE IF NOT EXISTS ships_3(username text, info text)''')

########################### NOTIFICATIONS #############################
def login_user(username,pwd):
	#conn.row_factory = sqlite3.Row
	#c = conn.cursor()
	c.execute("SELECT password FROM users WHERE username = ?", [username])

	result = c.fetchall()
	if(not result):
		return "error_no_user"

	password_comp = result[0][0]
	if(password_comp!=pwd):
		return "error_wrong_password"
	
	
	
	return "ok"

def register_user(username, pwd, email):
	c.execute("SELECT * FROM users WHERE username = ?", [username])
	if(c.fetchall()):
		return 0
	c.execute("INSERT INTO users VALUES (?,?,?,?)", [username, pwd, email, "1"])
	conn.commit()
	return 1

def update_tutorial(user):
	c.execute("UPDATE user_notification SET unread = '0' WHERE user = ? AND message = ?", [user, message])
	conn.commit()

def save_user(user, data):
	print(user)
	print(data)
	conn.commit()
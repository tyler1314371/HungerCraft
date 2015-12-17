import sqlite3
import base64

#initialize database connection & setting up cursor
conn = sqlite3.connect('user_tag.db')
c = conn.cursor()

#Create table
c. execute('''CREATE TABLE IF NOT EXISTS user_tags(tag text, user text, count integer)''')
c. execute('''CREATE TABLE IF NOT EXISTS user_notification(user text, message text, unread integer)''')
c. execute('''CREATE TABLE IF NOT EXISTS user_sp_settings(user text, spuser text, sppwd text, url text, tag text, list text)''')

########################### SP SETTINGS ###############################
def addSPList(user, spuser, sppwd, url, tag, listname):
	c.execute("SELECT * FROM user_sp_settings WHERE user = ? AND url = ? AND list = ?",[user, url,listname])
	a = c.fetchone()
	print "test -> "
	print a
	if a==None:
		c.execute("INSERT INTO user_sp_settings VALUES (?,?,?,?,?,?)", [user, spuser, base64.b64encode(sppwd), url, tag, listname])
		conn.commit()
		print "new SP Setting added for user "+user

def getSPLists(user):
	conn.row_factory = sqlite3.Row
	c = conn.cursor()
	c.execute("SELECT * FROM user_sp_settings WHERE user = ?", [user])
	return c.fetchall()

def getUsersOfSPList(url, listname):
	conn.row_factory = sqlite3.Row
	c = conn.cursor()
	c.execute("SELECT user FROM user_sp_settings WHERE url = ? AND list = ?", [url, listname])
	return c.fetchall()

########################### NOTIFICATIONS #############################
def getNotifications(user):
	conn.row_factory = sqlite3.Row
	c = conn.cursor()
	c.execute("SELECT * FROM user_notification WHERE user = ?", [user])
	return c.fetchall()

def addNotification(user, message):
	c.execute("INSERT INTO user_notification VALUES (?,?,1)", [user, message])
	conn.commit()

def clearRead(user, message):
	c.execute("UPDATE user_notification SET unread = '0' WHERE user = ? AND message = ?", [user, message])
	conn.commit()

############################ TAGS #####################################
#for testing purpost: show all entry in table
def selectAllUserTags():
	c.execute("SELECT * FROM user_tags")
	a = c.fetchall()
	print "our date base has: {}".format(a) 

#insert data/update count into database when a user has a new tag
def insertTagUser(tag,user):
	#check if the tag exist in user's pool
	c.execute("SELECT * FROM user_tags WHERE tag = ? AND user = ?",[tag,user])
	a = c.fetchone()
	print "our date base has: {}".format(a) 
	if a == [] or a == None:
		c.execute("INSERT INTO user_tags VALUES (?,?,1)", [tag,user])
		conn.commit()
		print 'NOT EXIST INSERT'
	else:
		print 'EXIST: '
		new_count = a[2] + 1
		print "new count {}".format(new_count)
		c.execute("UPDATE user_tags SET count = ? WHERE tag = ? AND user = ?",[new_count,tag,user])		
		conn.commit()
	
#show all tags of a user
def selectTagsOfUser(user):
	c.execute("SELECT tag FROM user_tags WHERE user = ? ORDER BY count DESC",[user])
	a = c.fetchall()
	b = [i[0] for i in a]
	#print "This user {} has: #{} tags".format(user,b)
	return b

#show all users with that tag
def selectUsersOfTag(tag):
	c.execute("SELECT user FROM user_tags WHERE tag = ? ORDER BY count DESC",[tag])
	a = c.fetchall()
	b = [i[0] for i in a]
	#print "The tag #{} has: {} users".format(tag,b)
	return b

#show all tags: for the purpose of most popular tag
def selectAllTags():
	c.execute("SELECT DISTINCT tag FROM user_tags GROUP BY tag ORDER BY count DESC")
	a = c.fetchall()
	b = [i[0] for i in a]
	return b

#update notification queue
#new user gets notification of top 2 users in #tag
def notification(tag,user):
	a = selectUsersOfTag(tag)
	users = [i for i in a if not (i == user)]	
	notificationQueue = {x: "{} has joined #{}".format(user,tag) for x in users}
	topUserList = [i for i in a if not i == user]
	#print "top User List: {}".format(topUserList)
	if len(topUserList) >= 2:
		notificationQueue[user] = "{}, {} and others are also in #{}".format(topUserList[0],topUserList[1],tag)
	elif len(topUserList) ==1:
		notificationQueue[user] = "{}, {} and others are also in #{}".format(topUserList[0],tag)
	return notificationQueue

#print("inserting")
#insert('hello','test1')
#notificationQueue = notification('hello','test')
#print "notification Queue: {}".format(notificationQueue)

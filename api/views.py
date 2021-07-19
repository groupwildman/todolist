import json
from flask import render_template, request, redirect, url_for, session, g, jsonify, make_response as Response
from datetime import datetime
from time import strftime
from sqlalchemy.sql.operators import isfalse
from sqlalchemy.util.langhelpers import NoneType
from controls import fetchList as FetchList, signup as Signup, login as Login, fetchUsersLists as FetchUsersLists, createList as CreateList, selectUsersGroup as SelectUsersGroup 
from models import *
from app import __salt__
from bcrypt import hashpw, gensalt

def login():
	if request.method.lower() == "POST".lower() or request.method.lower() == "OPTIONS".lower():
		if request.get_data() :
			user = User()

			user.name = json.loads(request.get_data())['username']
			password = json.loads(request.get_data())['password']
			
			user.password = hashpw(password.encode('ascii'), __salt__().encode('ascii') ).decode('utf-8')
			user = Login(user)
			
			if user :
				usersGroup = SelectUsersGroup(user.codego)
				usersGroup = [userGroup[0].as_dict() for userGroup in usersGroup]
				
			response = Response(jsonify(user = user.as_dict(), usersGroup = usersGroup))
			response.headers.add("Access-Control-Allow-Origin", "*")
			response.headers.add("Access-Control-Allow-Credentials", "true")
			
			return response
	return ""
def logout():
	if "username" in session:
		session.pop('username', None)
		g.user = None

def signup():
	loads = Load(scripts=["header", "index", "sign-up"], css=[])
	#if post create user
	if(request.method.lower() == "POST".lower()):
		user = User()
		user.firstname = request.form['firstname']
		user.surname = request.form['surname']
		user.email = request.form['email']
		user.name = request.form['username']
		user.password = hashpw(request.form['password'], __salt__() )
		
		try:
			Signup(user)
			return redirect(url_for('login'))
		except:
			return render_template('template.html', files=loads)
	#if get show sign up form
	return render_template('template.html', files=loads)
	

def termsOfUse():
	loads = Load(["header", "index"])

def privacy():
	loads = Load(["header", "index"])

def dashboard():
	loads = Load(["header", "index", "dashboard"])
	
	if ("username" in session) and not (session['username'] == None):
		
		user = User()
		user.name = session['username']
		return render_template('template.html', files=loads, dashboard=True, token=session['username'] )
	return redirect(url_for('login'))

#revisao
def dashboard_addList():
	
	if request.method.lower() =="POST".lower() :
		data = json_request(request)
		
		_list = List()
		_list.name = data["list"]['listname']
		_list.user = session["username"]
		_list.created_at = datetime.now()
		
		CreateList(_list)
		_list = FetchList(data['list']['listname'])
		
		return jsonify(listname=_list[0].name, listcreatedat=_list[0].created_at)
	return ""

def dashboard_removeList():
	loads = Load(["header", "index"])

def dashboard_alterList():
	loads = Load(["header", "index"])

#revisao
def dashboard_fetchlist():
	if request.method.lower() == "POST".lower():
		result = FetchUsersLists(session['username'])
		_lists = []
		for row in result:
			_list = {"codego":row[0].codego, "name":row[0].name, "user":row[0].user, "created_at":row[0].created_at}
			_lists.append(_list)

	return jsonify(lists=_lists)

def dashboard_addTask():
	loads = Load(["header", "index"])

def dashboard_removeTask():
	loads = Load(["header", "index"])

def dashboard_alterTask():
	loads = Load(["header", "index"])

def Load(scripts = [], css = []):
	scripts.extend(default_scripts)
	css.extend(default_css)
	
	return {'scripts':scripts, 'css':css}

def json_request(request):
	return json.loads(
		json.dumps(
			request.get_json()
		)
	)

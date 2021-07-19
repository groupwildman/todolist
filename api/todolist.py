from app import app
from views import *

app.add_url_rule("/signup", view_func=signup, methods=["POST", "GET"])
app.add_url_rule("/login", view_func=login, methods=["POST", "GET", "OPTIONS"])
app.add_url_rule("/dashboard/create-list", view_func=dashboard_addList, methods=["POST", "GET"])
app.add_url_rule("/dashboard/api/load-list", view_func=dashboard_fetchlist, methods=["POST"])
app.add_url_rule("/dashboard/api/create-list", view_func=dashboard_addList, methods=["POST"])

if __name__ == "__main__":
	app.run(debug=True)
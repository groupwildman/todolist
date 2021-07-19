from database import _engine, _base
from controls import createDefaultUsersGroup
from flask import Flask, json
from os import path
from bcrypt import gensalt

__config__ = "config.json"
app = Flask(__name__)

_base.metadata.create_all(bind=_engine)
createDefaultUsersGroup()

def __salt__():
    
    if(path.isfile(__config__)):
        with open(__config__) as json_file:
            try:
                data = json.load(json_file)
                return data['salt']
            except:
                return __gensalt()
def __gensalt():          
    with open(__config__, 'w') as file:
        json.dump({"salt": gensalt()}, file)
    return __salt__()

app.secret_key = __salt__()




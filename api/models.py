from sqlalchemy.types import DateTime, LargeBinary
from database import _base
from sqlalchemy import Column, String, Integer, ForeignKey, UniqueConstraint
from json import JSONEncoder

class User(_base):
    __tablename__ = "users"
    codego = Column("user_codego", Integer, primary_key=True)
    email = Column("user_email", String(50), unique=True)
    name = Column("user_name", String(20), unique=True)
    password = Column("user_password", String(255))
    surname = Column("user_surname", String(50))
    firstname = Column("user_firstname", String(50))
    created_at = Column("user_created_at", DateTime)

    def __init__(self, codego = None, email = None, name = None, password = None, surname = None, firstname = None, created_at = None):
        self.codego = codego
        self.email = email
        self.name = name
        self.password = password
        self.surname = surname
        self.firstname = firstname
        self.created_at = created_at
    def as_dict(self):
       return {c.name: str(getattr(self, c.name.split('user_')[1])) for c in self.__table__.columns}
    
class List(_base):
    __tablename__ = "lists"
    codego = Column("list_codego", Integer, primary_key=True)
    name = Column("list_name", String(20), unique=True)
    user = Column("user_name", String(20), ForeignKey("users.user_codego"))
    created_at = Column("list_created_at", DateTime)
    updated_at = Column("list_updated_at", DateTime)
	
    def __str__(self) :
        return "{{codego: {codego}, name: {name}, user: {user}, created_at: {created_at}, updated_at: {updated_at} }}".format(
            codego = self.codego, name = self.name, user = self.user, created_at = self.created_at, updated_at = self.updated_at 
        )
class Task(_base):
    __tablename__ = "tasks"
    codego = Column("task_codego", Integer, primary_key=True)
    description = Column("task_description", String(50))
    notes = Column("task_notes", LargeBinary)
    due_date = Column("task_duedate", DateTime)
    _list = Column("codego_list", String(5), ForeignKey("lists.list_codego"))

class UsersGroup(_base):
    __tablename__ = "users_group"
    codego = Column("user_group_codego", Integer, primary_key=True)
    name = Column("user_group_name", String(50), unique=True)
    description = Column("user_group_description", String(150))

    def as_dict(self):
       return {c.name: str(getattr(self, c.name.split('user_group_')[1])) for c in self.__table__.columns}
    #def __str__(self) :
    #    return "{{codego: {codego}, name: {name}, description: {description} }}".format(codego=self.codego, name=self.name, description=self.description)
class UsersGroupMap(_base):
    __tablename__ = "users_group_map"
    codego = Column("user_group_map_codego", Integer, primary_key=True)
    user = Column("user_codego", Integer, ForeignKey("users.user_codego"))
    userGroup = Column("user_group_codego", Integer, ForeignKey("users_group.user_group_codego"))

    __table_args__ = (
        UniqueConstraint('user_codego', 'user_group_codego', name='_user_group_map_uc'),
                     )

class JSONEncoder2(JSONEncoder):
    def default(self, o):
        return o._asdict()
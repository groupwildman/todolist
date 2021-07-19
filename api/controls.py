from sqlalchemy import select, desc, asc
from database import _session_local
from models import User as Users, List as Lists, UsersGroup, UsersGroupMap

def createList(List):
    session = _session_local()
    session.add(List)
    session.commit()
    session.close()
def signup(User):
    session = _session_local()
    session.add(User)
    session.commit()
    session.close()
def login(User):
    session = _session_local()
    return session.execute(
        select(Users).where(
            (Users.name == User.name) &
            (Users.password == User.password)
        )
    ).fetchone()[0]
def selectUsersGroup(id):
    session = _session_local()
    return session.execute(
        select(UsersGroup)
        .join(UsersGroupMap, UsersGroupMap.userGroup == UsersGroup.codego)
        .where(
            (UsersGroupMap.user == id)
        )
    ).fetchall()
def selectUsersGroupByName(name):
    session = _session_local()
    return session.execute(
        select(UsersGroup).where(
            (UsersGroup.name == name)
        )
    ).fetchone()[0]
def fetchUsersLists(User):
    session = _session_local()
    return session.execute(
        select(Lists).where(
            (Lists.user == User)
        )
    ).fetchall()
def fetchList(list_name):
    session = _session_local()
    return session.execute(
        select(Lists).where(
            (Lists.name == list_name)
        ).order_by(asc(Lists.created_at))
    ).fetchone()
def createDefaultUsersGroup():
    session = _session_local()
    for usersGroup in initUsersGroup():
        exists = selectUsersGroupByName(usersGroup.name)
        if not exists:
            session.add(usersGroup)
    session.commit()
    session.close()
def initUsersGroup():
    userGroups = []
    
    userGroup = UsersGroup()
    userGroup.name = "admin"
    userGroup.description = "Administrator"
    
    userGroups.append(userGroup)

    userGroup = UsersGroup()
    userGroup.name = "reg"
    userGroup.description = "Registered"

    userGroups.append(userGroup)

    userGroup = UsersGroup()
    userGroup.name = "guest"
    userGroup.description = "Guest"

    userGroups.append(userGroup)

    return userGroups
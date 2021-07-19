from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URI = 'sqlite:///todolist.sqlite'

_engine = create_engine(
    SQLALCHEMY_DATABASE_URI, connect_args={"check_same_thread": False}
)
_session_local = sessionmaker(autocommit=False, autoflush=False, bind=_engine)
_base = declarative_base() 



    
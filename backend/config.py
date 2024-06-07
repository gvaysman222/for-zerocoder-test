import os

class Config:
    basedir = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, '../database/site.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = '2b1aeed9a3448b4a89e08456d06c7e12cfcaadb44d5e0d5f5b18a4ef53149eb8'
    JWT_SECRET_KEY = 'fd098ab4f8bb4089a90f9dc2d0d98b1b5f7fdb4b3d9e2c4e88edc39b3f8bdc22'


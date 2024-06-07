from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import User, db
import traceback

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']

        if User.query.filter_by(username=username).first():
            return jsonify({'message': 'User already exists'}), 400

        new_user = User(username=username)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        print("Error in /register route")
        print(str(e))
        print(traceback.format_exc())
        return jsonify({'message': 'Internal Server Error'}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']

        user = User.query.filter_by(username=username).first()

        if user is None or not user.check_password(password):
            return jsonify({'message': 'Invalid username or password'}), 400

        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    except Exception as e:
        print("Error in /login route")
        print(str(e))
        print(traceback.format_exc())
        return jsonify({'message': 'Internal Server Error'}), 500

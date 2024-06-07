from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from config import Config
from routes import register_routes
from models import db

app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app, resources={r"/*": {"origins": "*"}})
app.config.from_object(Config)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
jwt = JWTManager(app)

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

register_routes(app)


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Обработчик для favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.static_folder, 'favicon.ico')


@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

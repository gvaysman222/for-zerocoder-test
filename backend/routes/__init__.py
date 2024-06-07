from .distribute import distribute_bp
from .forecast import forecast_bp
from .objects import objects_bp
from .auth import auth_bp

def register_routes(app):
    app.register_blueprint(distribute_bp, url_prefix='/api')
    app.register_blueprint(forecast_bp, url_prefix='/api')
    app.register_blueprint(objects_bp, url_prefix='/api')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

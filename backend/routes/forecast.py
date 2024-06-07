from flask import Blueprint, jsonify
from services.forecast_service import forecast_expenses

forecast_bp = Blueprint('forecast', __name__)

@forecast_bp.route('/forecast', methods=['GET'])
def forecast():
    forecast_data = forecast_expenses()
    return jsonify(forecast_data)

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from services.distribute_service import distribute_expenses

distribute_bp = Blueprint('distribute', __name__)

@distribute_bp.route('/distribute', methods=['POST'])
@jwt_required()
def distribute():
    data = request.get_json()
    result = distribute_expenses(data)
    return jsonify(result)
from flask import Blueprint, jsonify
from services.object_service import get_objects

objects_bp = Blueprint('objects', __name__)

@objects_bp.route('/objects', methods=['GET'])
def objects():
    objects_data = get_objects()
    return jsonify(objects_data)

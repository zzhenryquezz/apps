from flask import jsonify

def index():
    return jsonify([
        {
            "title": "Blog flask app",
            "description": "A blog rest api with flask",
        },
    ])
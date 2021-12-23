from flask import request, jsonify
import uuid

posts = []

def index():
    return jsonify(posts)

def show(id):
    for post in posts:
        if post['id'] == id:
            return jsonify(post)

    return jsonify({'error': 'Post not found'}), 404

def store():
    data = request.get_json()

    if ('title' not in data or 'content' not in data):
        return jsonify({'error': 'Missing title or content'}), 400

    postId = str(uuid.uuid4())
    
    posts.append({
        'id': postId,
        'title': data['title'],
        'content': data['content']
    })

    return {
        "message": "Post created",
        "id": postId
    }

def update(id):
    data = request.get_json()

    for post in posts:
        if post['id'] == id:
            post['title'] = data['title']
            post['content'] = data['content']

            return {
                "message": "Post updated"
            }

    return jsonify({'error': 'Post not found'}), 404

def delete(id):
    for post in posts:
        if post['id'] == id:
            posts.remove(post)

            return {
                "message": "Post deleted"
            }

    return jsonify({'error': 'Post not found'}), 404
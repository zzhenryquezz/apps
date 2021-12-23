from flask import Blueprint
import controllers.PostsController as PostsController
import controllers.HomePageController as HomePageController

router = Blueprint('router', __name__)

router.route('/', endpoint='/')(HomePageController.index)

router.route('/posts', methods=['GET'])(PostsController.index)
router.route('/posts', methods=['POST'])(PostsController.store)

router.route('/posts/<id>', methods=['GET'])(PostsController.show)
router.route('/posts/<id>', methods=['PUT', 'PATCH'])(PostsController.update)
router.route('/posts/<id>', methods=['DELETE'])(PostsController.delete)
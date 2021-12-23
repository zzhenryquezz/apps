## Flask blog
A simple python blog api builded with [flask](https://flask.palletsprojects.com/en/2.0.x/) framework

## Usage

- Install the dependencies with `pip install -r requirements.txt`

- Run the app with `python main.py` 

- The server must be running in [http://localhost:5000](http://localhost:5000)

## Routes

| Path          | Method    | Description                                                       | 
| ----          | ------    | -----------                                                       |
| /             | GET       | Home page                                                         |
| /posts        | GET       | Return the list of posts                                          |
| /posts        | POST      | Create a new post, `title` and `content` fields are required       |
| /posts/:id    | GET       | Return a post by id, throws a error if post was not found         |
| /posts/:id    | PUT/PATCH | Update a post by id, `title` and `content` fields are required    |
| /posts/:id    | DELETE    | Delete a post by id, throws a error if post was not found         |
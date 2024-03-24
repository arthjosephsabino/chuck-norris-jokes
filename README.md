
# Chuck Norris Joke

An application which pull Chuck Norris' jokes from https://api.chucknorris.io

## API Reference

#### Get random joke
```http
  GET /api/categories
```

```http
  GET /api/jokes/random
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category`| `string` | Joke category              |

```http
  GET /api/jokes/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. Search string |
| `page` | `string` | **Required**. Page number |
| `limit` | `string` | Default `10` |


## Deployment

To deploy this project run

1.) Clone `repository`

2.) `cd backend`

3.) Install `backend` dependencies
```node
  npm install
```

4.) After installing dependencies, run:
```node
  npm start
```

5.) Go to `frontend`

```node
  cd ../frontend
```
6.) Install `frontend` dependencies
```node
  npm install
```

7.)  After installing dependencies, run:
```node
  npm start
```

8.) Go to browser, type in `http:localhost:3000`


Or run

```node
  ./setup.sh
```
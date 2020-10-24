# Josh Bot 2.0 - A Python and JavaScript Twitter Bot

## For development purposes:
### To start front-end:
###### Navigate into ui directory:
```bash
$ cd bot/ui
```
###### Run NPM install command:
```bash
$ npm install
```
###### Run NPM Start command:
```bash
$ npm start
```
*Front-end server will be running at http://localhost:3000*

### To start back-end/api:
###### Navigate into api directory:

```bash
$ cd bot/api
```

###### Create/Start VirtualEnv:
```bash
$ python3.8 -m venv env
```
```bash
$ . env/bin/activate
```

###### Update pip and install requirements:
```bash
(env)$ pip install --upgrade pip
```
```bash
(env)$ pip install -r requirements.txt
```

###### Run the Flask Dev Server:
*Dont forget to create a .env file in the api directory. ENV variables to set up can be found in config.py*
```bash
(env)$ flask run
```
*Back-end/API Server will be running at http://localhost:5000*

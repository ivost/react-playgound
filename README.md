# react-playgound

https://create-react-app.dev

to upgrade node

# make cache folder (if missing) and take ownership
sudo mkdir -p /usr/local/n
sudo chown -R $(whoami) /usr/local/n
# take ownership of Node.js install destination folders
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share


npm cache clean -f

npm install -g n

Install the latest stable version: n stable
Install the latest release: n latest
Install a specific version: n [version.number]

node -v
v15.13.0


https://subscription.packtpub.com/book/web_development/9781789954937/1/ch01lvl1sec04/creating-a-movie-list-application

 npm install --save-dev webpack webpack-cli

   "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production",


npm start

npm run build

node dist/main.js

npm install react react-dom

npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

create webpack.config.js

create .babelrc

npm install --save-dev webpack-dev-server




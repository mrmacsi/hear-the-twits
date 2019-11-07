# twits-app
Twitter history application on nodejs, twitter oauth2,passportjs, mlab mongo db, expressjs, mongoose, reactjs & reduxjs

For docker
sudo docker run -p 3000:3000 -d salvadorx1/nodejs-app

sudo docker build -t salvadorx1/nodejs-app .

Without docker
npm install
npm run dev

To test online please visit
https://hear-the-twits.herokuapp.com/


tasks

1-oAuth authentication strategy for authenticating user using twitter +1

2-Implement Twitter’s REST API twitter to fetch latest tweets +1

3-Display response from above API in a simple interface. We are expecting some interactions with UI such as filtering or sorting by dates. +1

4-Store/ log all authentications and API requests in RDMS database (preferably mysql / mongo) +1

5-These features must be extendable / reusable so that in future we can reuse these code to support other social media applications +1

6-If possible, you can Dockerize this project +1

7-If possible, you can use a frontend technology such as Angular or React for your UI. +1

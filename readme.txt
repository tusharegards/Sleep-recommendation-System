to start the app>
(in dev mode):
set DEBUG=app:server,app:db
set NODE_ENV=development
set replica_password=qwerty
supervisor app.js
replica_jwtPrivateKey=myPrivateKey

(in prod mode):
set NODE_ENV=production
supervisor app.js
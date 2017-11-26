var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var colors = require('colors');
var db = require('./models');

// Controllers
var statement_controller = require('./controllers/StatementController');
var activity_controller = require('./controllers/ActivityController');
var user_controller = require('./controllers/UserController');

// Middleware
var test_middleware = require('./middleware/TestMiddleware');
var auth_middleware = require('./middleware/AuthMiddleware');

// For POST body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'.toLowerCase());

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.use('/api', router);

router.route('/')
    .get(test_middleware.default, function(req, res) {
        res.send("Everything is fine !")
    });

router.route('/statements')
    .get(auth_middleware.default, statement_controller.all)
    .post(auth_middleware.default, statement_controller.post);

router.route('/statements/:id')
    .get(auth_middleware.default, statement_controller.get)
    .put(auth_middleware.default, statement_controller.edit)
    .delete(auth_middleware.default, statement_controller.delete);

router.route('/activities')
    .get(auth_middleware.default, activity_controller.all)
    .post(auth_middleware.default, activity_controller.post);

router.route('/activities/:id')
    .get(auth_middleware.default, activity_controller.get)
    .put(auth_middleware.default, activity_controller.edit)
    .delete(auth_middleware.default, activity_controller.delete);

router.route('/login')
    .post(user_controller.login);

router.route('/users/:id')
    .put(auth_middleware.correctUser, user_controller.update);

console.log("\u001b[2J\u001b[0;0H");
console.log('Running Server on port 8000 ! '.yellow);
app.listen(8000, function() {
    db.sequelize.sync();
});
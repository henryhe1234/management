const PORT = 8080;
const Express = require('express');
const BodyParser = require('body-parser');
const app = Express();
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const bcrypt = require('bcrypt');


// Express Configuration
app.use(morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(Express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['I am the very model of a scientist salarian', "I've studied species Turian, Asari, and Batarian", "I've mastered genetics(as a subset of biology)", "because I am a expert (which I know is a tautology)"]
}));

// Sample GET route
const login = require("./routes/login")

app.use('/login',login);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

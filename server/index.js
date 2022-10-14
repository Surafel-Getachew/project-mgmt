const express = require('express');
const colors = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const schema = require("./schema/index")
const connectDB = require('./config/db');

require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();

// connect to DB
connectDB();


app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log('Server is up and running', port));

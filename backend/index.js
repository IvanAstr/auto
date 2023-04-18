const express = require('express');
const app = express();
const dotenv = require('dotenv')
const router = require('./src/routes/web.js');
dotenv.config();

app.use(express.json({ extended: true }));

const {sequelize} = require('./src/DB/db_connect.js');
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');

  sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");

 } catch (error) {
  console.error('Unable to connect to the database:', error);
 }
app.use('/api',router);

app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`));
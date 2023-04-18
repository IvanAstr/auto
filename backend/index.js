const express = require('express');
const app = express();
const dotenv = require('dotenv')
const router = require('./src/routes/web.js');
dotenv.config();

// app.use(express.json({ extended: true }));

const {sequelize} = require('./src/models/categories.js');
// try {
//   

//  } catch (error) {
//   console.error('Unable to connect to the database:', error);
//  }
// app.use('/api',router);

// app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`));

// dotenv.config()
app.use(express.json({ extended: true }))


app.use('/', router)
app.use('/api', router)
const PORT = process.env.PORT

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
        sequelize.authenticate();
//   console.log('Connection has been established successfully.');

    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()
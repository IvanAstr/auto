const {Sequelize} = require("sequelize");
const {sequelize} = require('../DB/db_connect.js');

const Car = sequelize.define('car', {
  brand: Sequelize.STRING,
  model: Sequelize.STRING,
  year: Sequelize.INTEGER,
  garage_id: Sequelize.INTEGER, // Внешний ключ к таблице "Обслуживающий персонал"
  is_active: Sequelize.BOOLEAN, // флаг активности машины
  is_sell: Sequelize.BOOLEAN // флаг продажи машины
})

// Маршруты
const Route = sequelize.define('route', {
  name: Sequelize.STRING
})

// Маршрутки
const CarRoute = sequelize.define('car_route', {
  car_id: Sequelize.INTEGER, // Внешний ключ к таблице "Машины"
  route_id: Sequelize.INTEGER, // Внешний ключ к таблице "Маршруты"
  is_active: Sequelize.BOOLEAN // флаг активности маршрутки
})

// Водители
const Driver = sequelize.define('driver', {
  name: Sequelize.STRING,
  phone: Sequelize.STRING
})

// Привязка машин и водителей
const CarDriver = sequelize.define('car_driver', {
  car_id: Sequelize.INTEGER, // Внешний ключ к таблице "Машины"
  driver_id: Sequelize.INTEGER // Внешний ключ к таблице "Водители"
})

// Обслуживающий персонал
const Staff = sequelize.define('staff', {
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  garage_id: Sequelize.INTEGER // Внешний ключ к таблице "Машины"
})

// Связи
Car.belongsToMany(Driver, {through: CarDriver})
Driver.belongsToMany(Car, {through: CarDriver})

Car.hasMany(CarRoute)
CarRoute.belongsTo(Car)

Route.hasMany(CarRoute)
CarRoute.belongsTo(Route)

Garage.hasMany(Staff)
Staff.belongsTo(Garage)

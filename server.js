var express = require("express");
var bodyParser = require("body-parser");
const models = require("./models");



// Inicializar variables
const app = express();


// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Importar rutas
const routeApp = require("./routes/app");

const routeEmpleados = require("./routes/empleados");
const routeProfesiones = require("./routes/cat_profesiones");
const routePuestos = require("./routes/cat_puestos");
const routeEstados = require("./routes/cat_estados");
const routeArea = require("./routes/cat_area");

const contextPath = '/atlantida/api';


// Publicar rutas
app.use("/", routeApp);
app.use("/", routeApp);

//app.use(contextPath, router);
app.use("/empleados", routeEmpleados);
app.use("/profesiones", routeProfesiones);
app.use("/puestos", routePuestos);
app.use("/estados", routeEstados);
app.use("/area", routeArea);


models.sequelize
  .authenticate()
  .then(function () {
    console.log("Connection successful");
  })
  .catch(function (error) {
    console.log("Error creating connection:", error);
  });


// set port
app.listen(3000, () => {
  console.log("Node app is running on port 3000");
});
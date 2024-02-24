require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-route");
const serviceRoute = require("./router/service-route");
const errorMiddleware = require("./middlewares/error-middleware");
const connectDB = require("./utils/db");
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "POST,GET,PUT,DELETE,HEAD,PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use("/auth", authRoute);
app.use("/form", contactRoute);
app.use("/api", serviceRoute);
app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

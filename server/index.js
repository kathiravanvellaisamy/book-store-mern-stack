const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoute = require("./routes/bookRoute");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// middleware for cors policy
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(cors());

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Application is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", bookRoute);

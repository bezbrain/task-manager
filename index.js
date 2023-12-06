const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config(); // This is used to invoke the dotenv package
const taskRouter = require("./routes/tasks.route");
const notFound = require("./middleware/not-found");

// Middleware
app.use(express.json()); // If we don't use this middleware, we won't have the data in req.body

// routes
app.use("/api/v1/tasks", taskRouter);

// Custom 404 for route not found
app.use(notFound);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // So, the server will start only if db is connected to successfully
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startDB();

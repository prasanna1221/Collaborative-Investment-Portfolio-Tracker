const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const {server} = require("socket.io");
const http = require("http");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Database connection
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("MongoDB connected"))
    .catch((error)=> console.log(error));


// Import Routes
const userRoutes = require("./routes/userRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");

app.use("/api/users", userRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Set up WebSocket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("update-portfolio", (data) => {
    io.emit("portfolio-updated", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
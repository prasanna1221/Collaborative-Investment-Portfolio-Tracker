const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const {server} = require("socket.io");
const http = require("http");

dotenv.config();
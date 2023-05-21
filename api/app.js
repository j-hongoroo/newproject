const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const  connectionDB =require('./data/index');
const userRoute = require('./routes/user')
const TaskRoute = require("./routes/tasks");
const TodoRoute = require('./routes/todos');

dotenv.config()
const app = express();


connectionDB();
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
      if (origin === undefined || whitelist.indexOf(origin) !== -1 ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
   allowedHeader:"Set-cookie, Content-Type",
   methods:"GET, POST, PUT, DELETE",
   credentials:true
  }
app.use(cookieParser())

app.use(cors(corsOptions))
app.use(express.json());

app.use('/user',userRoute);
app.use("/tasks",TaskRoute);
app.use('/todo',TodoRoute);


app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}`)
})
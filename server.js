if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
// require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

// Middleware's
app.use(express.json({limit: "10MB"}));
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());



// Routes
// const testRoute = require('./routes/testRoutes');
const authRoutes = require('./routes/auth.js');
// const playerRoutes = require('./routes/player');

// Routes Middleware
// app.use('/',testRoute);
app.use('/api/v1/auth',authRoutes );
// app.use('/api/player/', playerRoutes);


// Error Handler
app.use((err, req, res, next) =>{
  console.log(err)
  return res.status(500).json({
    message: 'Internal server error',
    // error: isProduction ? null : err,
  })
  
}
);


// Server Init
app.listen(PORT, ()=>{
    console.log(`Listening to Port: ${PORT}`);
});
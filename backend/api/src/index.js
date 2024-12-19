// src/index.js

const express = require('express');
const cors = require('cors');


const app = express();


//Configuration of CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Domain of digiqal
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specifying allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specifying allowed headers
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
const authenticationRoutes = require('./routes/authenticationRoutes');
const financesController = require('./routes/financesRoutes');

app.use('/api/authentication', authenticationRoutes);
app.use('/api/finances', financesController);

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

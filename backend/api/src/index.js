// src/index.js

const express = require('express');

const app = express();


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

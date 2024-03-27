const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/PocketID_gfg`).on('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log("MonoDB Connection Error: ", err);
});

module.exports = connection;
const mongoose = require('mongoose');



const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(`Error al iniciar la base de datos ${error}`);
    }

};


module.exports = {
    dbConnection
}
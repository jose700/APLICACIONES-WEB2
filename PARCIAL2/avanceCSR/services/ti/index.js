const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Facci running on port ${process.env.PORT}`);
});
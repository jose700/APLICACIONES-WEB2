const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Users running on port ${process.env.PORT}`);
});
const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Cars running on port ${process.env.PORT}`);
});
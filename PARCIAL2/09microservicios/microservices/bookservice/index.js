const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Books running on port ${process.env.PORT}`);
});
const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
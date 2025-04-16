
import { Server } from 'http';
import config from './config';
import app from './app';



async function main() {
    const server: Server = app.listen(config.port, () => {
        console.log("Bike Service Sever is running on port ", config.port);
    });

    const exitHandler = () => {
        if (server) {
            server.close(() => {
                console.info("Server closed!")
            })
        }
        process.exit(1);
    };
    process.on('uncaughtException', (error) => {
        console.log(error);
        exitHandler();
    });

    process.on('unhandledRejection', (error) => {
        console.log(error);
        exitHandler();
    })
};

main();
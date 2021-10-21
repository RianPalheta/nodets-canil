import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({
    extended: true
}));

server.use(mainRoutes); // Rotas

server.use((req: Request, res: Response) => {
    res.render('pages/notfound');
}); // Quando o sevidor não encontra a página desejada

server.listen(process.env.PORT); // Iniciando o servidor


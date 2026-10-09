import http from "http"
import route from "./src/routes/index.js";

const PORT = process.env.PORT || 3030
console.log(PORT);

const server = http.createServer(route)

server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})


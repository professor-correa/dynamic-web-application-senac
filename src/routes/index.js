export default function route(req, res) {
    res.writeHead(404, { "Content-type": "text/plan"})
    res.end("Not Found")
}
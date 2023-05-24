const express = require("express");
const path = require("path");

const app = express();
//Configuraciones
app.use(express.static("public"));


app.get("/", (req, res) => {
    const ruta = path.join(__dirname + "/views/home.html");
res.sendFile(ruta);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
app.get("/",(req,res)=>{

    res.sendFile(paht.join(__dirname + "./views/home.html"));
}); 
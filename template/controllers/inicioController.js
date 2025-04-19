//Aca la idea es manejar routas de la raiz ejemplo http://localhost:3000/   o http://localhost:3000/inicio
//Rutas etatica que no hagan uso de post,put,delet , es decir solo get

exports.inicio = (req, res) => {
    res.render('inicio');
}
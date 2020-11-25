// necesitamos incluir un paquete que nos permita 
//realizar peticiones http 
const http = require('http');

//Para crear rutas podemos ulilizar el paquete url
const url = require('url');

//Luego es necesario crear un servidor http que permita 
//ejecutar las peticiones se nuestro server
const server = http.createServer((req, res) => {

    //obtenemos la url en una variable.
    const urlString = req.url;

    //utilizamos el paquete url para parsear la urlstring.
    //url.parse recibe un booleano que permite convertir los stream 
    //en objetos.
    const urlParce = url.parse(urlString, true);

    //obtenemos la ruta en una variable
    const ruta = urlParce.pathname;

    //limpiamos la url al quitar el slash '/' con el siguiente metodo
    const routeClean = ruta.replace(/^\/+|\/+$/g,'');
    console.log(ruta);
    console.log('esta es la ruta limpia ' + routeClean);

    //obteniendo el metodo de http
    console.log('El Metodo es: ', req.method.toLowerCase());

    //obtener la ruta de la url
    //el metodo end devuelve el resultado o respuesta de nuestro
    //servidor segun la peticion que este haya recibido.

    //condicionamos las rutas que recibimos en nuestro servidor http
    switch(routeClean){
        case '':
            res.end('estas en la pagina principa;');
            break;
        case 'home':
            res.end('estas en home');
            break;
        case 'contact':
            res.end('estas en contacto');
            break;
        default:
            res.end('404');
            break;
    }
    // if (routeClean === 'home') {
    //     res.end('estas en el home');
    // }
    // if (routeClean === 'contact') {
    //     res.end('estas en contacto');
    // }
    // else {
    //     res.end('404 ruta no encontrada');
    // }

});
// server.on('clientError', (err, socket) => {
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });

//El metodo listen recibe un callback o llamada a funcion
//Con el cual podemos enviar un mensaje para indicar que 
//El servidor funciona correctamente.
server.listen(8000, () => {
    console.log('servidor http escuchando en el puerto 8000')
});
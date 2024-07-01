import { putCarrito } from "../../adapters/secondary/dynamodb.mjs";
import { printCarrito } from "../../utils/print_carrito.mjs"

export const put_carrito = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("PUT Carrito");
    console.log("idUsuario::", idUsuario);

    let Productos = event["body"];
    console.log("Productos::", Productos);

    let body = {};
    body.Tipo = "CARRITO";
    body.ID = "USUARIO#" + idUsuario;
    body.Productos = Productos;

    printCarrito(body);

    responseEvent = await putCarrito(stage, body);

    return responseEvent;
}
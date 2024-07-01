import { postCarrito } from "../../adapters/secondary/dynamodb.mjs";
import { printCarrito } from "../../utils/print_carrito.mjs"

export const post_carrito = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("POST Carrito");
    console.log("idUsuario::", idUsuario);

    let Productos = event["body"];
    console.log("Productos::", Productos);

    let body = {};
    body.Tipo = "CARRITO";
    body.ID = "USUARIO#" + idUsuario;
    body.Productos = Productos;

    printCarrito(body);

    responseEvent = await postCarrito(stage, body);

    return responseEvent;
}
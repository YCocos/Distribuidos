import { deleteCarrito } from "../../adapters/secondary/dynamodb.mjs";
import { printCarrito } from "../../utils/print_carrito.mjs"

export const delete_carrito = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("DELETE Carrito");
    console.log("idUsuario::", idUsuario);

    let body = {};
    body.Tipo = "CARRITO";
    body.ID = "USUARIO#" + idUsuario;
    body.Productos = {};

    printCarrito(body);

    responseEvent = await deleteCarrito(stage, body);

    return responseEvent;
}
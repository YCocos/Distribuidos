import { getCarrito } from "../../adapters/secondary/dynamodb.mjs";

export const get_carrito = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("GET Carrito");
    console.log("idUsuario::", idUsuario);

    responseEvent = await getCarrito(stage, idUsuario);

    return responseEvent;
}
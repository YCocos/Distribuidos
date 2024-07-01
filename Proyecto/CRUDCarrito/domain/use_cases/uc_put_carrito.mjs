import { put_carrito } from "../repositories/put_carrito.mjs"

export const uc_put_carrito = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await put_carrito(stage, event, idUsuario);

    return responseEvent;
}
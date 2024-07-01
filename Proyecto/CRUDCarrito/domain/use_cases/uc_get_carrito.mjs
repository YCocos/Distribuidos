import { get_carrito } from "../repositories/get_carrito.mjs"

export const uc_get_carrito = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await get_carrito(stage, idUsuario);

    return responseEvent;
}
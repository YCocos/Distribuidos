import { delete_carrito } from "../repositories/delete_carrito.mjs";

export const uc_delete_carrito = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await delete_carrito(stage, idUsuario);

    return responseEvent;
}
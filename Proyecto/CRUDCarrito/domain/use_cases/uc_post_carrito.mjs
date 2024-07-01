import { post_carrito } from "../repositories/post_carrito.mjs"

export const uc_post_carrito = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await post_carrito(stage, event, idUsuario);

    return responseEvent;
}
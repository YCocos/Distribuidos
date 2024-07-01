import { post_usuario } from "../repositories/post_usuario.mjs"

export const uc_post_usuario = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await post_usuario(stage, event, idUsuario);

    return responseEvent;
}
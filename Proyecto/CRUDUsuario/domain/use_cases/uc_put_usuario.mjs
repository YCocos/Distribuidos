import { put_usuario } from "../repositories/put_usuario.mjs"

export const uc_put_usuario = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await put_usuario(stage, event, idUsuario);

    return responseEvent;
}
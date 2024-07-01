import { delete_usuario } from "../repositories/delete_usuario.mjs"

export const uc_delete_usuario = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await delete_usuario(stage, idUsuario);

    return responseEvent;
}
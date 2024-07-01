import { get_usuario } from "../repositories/get_usuario.mjs"

export const uc_get_usuario = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    responseEvent = await get_usuario(stage, idUsuario);

    return responseEvent;
}
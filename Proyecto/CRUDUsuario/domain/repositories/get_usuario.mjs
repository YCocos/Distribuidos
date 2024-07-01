import { printUsuario } from "../../utils/print_usuario.mjs";
import { getUsuario } from "../../adapters/secondary/dynamodb.mjs";

export const get_usuario = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("GET Usuario");
    console.log("idUsuario::", idUsuario);

    let body = {};
    body.Tipo = "USUARIO";
    body.ID = idUsuario;
    body.Nombre = "";
    body.Direccion = "";

    printUsuario(body);

    responseEvent = await getUsuario(stage, idUsuario);

    return responseEvent;
};
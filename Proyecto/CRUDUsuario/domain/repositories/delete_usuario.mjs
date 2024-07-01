import { printUsuario } from "../../utils/print_usuario.mjs";
import { deleteUsuario } from "../../adapters/secondary/dynamodb.mjs";

export const delete_usuario = async (stage, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("DELETE Usuario");
    console.log("idUsuario::", idUsuario);

    let body = {};
    body.Tipo = "USUARIO";
    body.ID = idUsuario;
    body.Nombre = "";
    body.Direccion = "";

    printUsuario(body);

    responseEvent = await deleteUsuario(stage, body);

    return responseEvent;
};
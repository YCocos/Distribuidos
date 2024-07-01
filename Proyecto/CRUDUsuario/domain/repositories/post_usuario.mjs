import { printUsuario } from "../../utils/print_usuario.mjs";
import { postUsuario } from "../../adapters/secondary/dynamodb.mjs";

export const post_usuario = async (stage, event, idUsuario) => {
    let responseEvent = "No encontrado";

    console.log("POST Usuario");
    console.log("idUsuario::", idUsuario);

    let tempBody = JSON.parse(event.body);
    console.log("tempBody::", tempBody);

    let body = {};
    body.Tipo = "USUARIO";
    body.ID = idUsuario;
    body.Nombre = tempBody.Nombre;
    body.Direccion = tempBody.Direccion;

    printUsuario(body);

    responseEvent = await postUsuario(stage, body);

    return responseEvent;
};
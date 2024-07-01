import { uc_get_carrito } from "../../domain/use_cases/uc_get_carrito.mjs"
import { uc_put_carrito } from "../../domain/use_cases/uc_put_carrito.mjs"
import { uc_post_carrito } from "../../domain/use_cases/uc_post_carrito.mjs"
import { uc_delete_carrito } from "../../domain/use_cases/uc_delete_carrito.mjs"

export const apigtwAdapter = async (event, stage) => {
    let responseEvent = "Error";
    let idUsuario = null;

    //OLD: Agregar Cognito aqui
    let resource = event["resource"];

    if (resource == "/carrito/{id_usuario}") {
        let pathParameters = event["pathParameters"];
        idUsuario = pathParameters["id_usuario"];

        if (idUsuario.length > 0) {
            switch (event["httpMethod"]) {
                case "GET":
                    console.log("HTTP GET");
                    responseEvent = await uc_get_carrito(stage, idUsuario);
                    break;
                case "POST":
                    console.log("HTTP POST");
                    responseEvent = await uc_post_carrito(stage, event, idUsuario);
                    break;
                case "PUT":
                    console.log("HTTP PUT");
                    responseEvent = await uc_put_carrito(stage, event, idUsuario);
                    break;
                case "DELETE":
                    console.log("HTTP DELETE");
                    responseEvent = await uc_delete_carrito(stage, idUsuario);
                    break;
                default:
                    responseEvent = "ERROR";
            }
        } else {
            responseEvent = "ERROR, ID no valido";
        }
    } else if (resource == "/carrito"){
        responseEvent = "Sin metodo";
    } else {
        responseEvent = "ERROR, evento no identificado";
    }

    return responseEvent;
};
import { uc_list_carrito } from "../../domain/use_cases/uc_put_carrito.mjs"
import { uc_get_carrito } from "../../domain/use_cases/uc_get_carrito.mjs"
import { uc_post_carrito } from "../../domain/use_cases/uc_post_carrito.mjs"

export const apigtwAdapter = async (event, stage) => {
    let responseEvent = "Error";
    let idUsuario = null;

    //OLD: Agregar Cognito aqui
    let resource = event["resource"];

    if (resource == "/pago/{id_usuario}/all") {
        let pathParameters = event["pathParameters"];
        idUsuario = pathParameters["id_usuario"];

        if (idUsuario.length > 0) {
            switch (event["httpMethod"]) {
                case "GET":
                    console.log("HTTP GET");
                    responseEvent = await uc_list_pago(stage, idUsuario);
                    break;
                case "POST":
                    responseEvent = "Sin metodo";
                    break;
                case "PUT":
                    responseEvent = "Sin metodo";
                    break;
                case "DELETE":
                    responseEvent = "Sin metodo";
                    break;
                default:
                    responseEvent = "ERROR";
            }
        }
    } else if(resource == "/pago/{id_usuario}") {
        let pathParameters = event["pathParameters"];
        idUsuario = pathParameters["id_usuario"];

        if (idUsuario.length > 0) {
            switch (event["httpMethod"]) {
                case "GET":
                    console.log("HTTP GET");
                    responseEvent = await uc_get_pago(stage, idUsuario);
                    break;
                case "POST":
                    console.log("HTTP POST");
                    responseEvent = await uc_post_pago(stage, event, idUsuario);
                    break;
                case "PUT":
                    responseEvent = "Sin metodo";
                    break;
                case "DELETE":
                    responseEvent = "Sin metodo";
                    break;
                default:
                    responseEvent = "ERROR";
            }
        } else {
            responseEvent = "ERROR, ID no valido";
        }
    } else if (resource == "/pago"){
        responseEvent = "Sin metodo";
    } else {
        responseEvent = "ERROR, evento no identificado";
    }

    return responseEvent;
};
import { uc_list_products } from "../../domain/use_cases/uc_list_products.mjs"
import { uc_get_product } from "../../domain/use_cases/uc_get_product.mjs"
import { uc_put_product } from "../../domain/use_cases/uc_put_product.mjs"
import { uc_post_product } from "../../domain/use_cases/uc_post_product.mjs"
import { uc_delete_product } from "../../domain/use_cases/uc_delete_product.mjs"

export const apigtwAdapter = async (event, stage) => {
    let responseEvent = "Error";
    let idProducto = null;

    //OLD: Agregar Cognito aqui
    let resource = event["resource"];

    if (resource == "/producto/{id_producto}") {
        let pathParameters = event["pathParameters"];
        idProducto = pathParameters["id_producto"];

        if (idProducto.length > 0 && noNumerico(idProducto) == false) {
            switch (event["httpMethod"]) {
                case "GET":
                    console.log("HTTP GET");
                    responseEvent = await uc_get_product(stage, idProducto);
                    break;
                case "POST":
                    responseEvent = "Sin metodo";
                    break;
                case "PUT":
                    console.log("HTTP PUT");
                    responseEvent = await uc_put_product(stage, event, idProducto);
                    break;
                case "DELETE":
                    console.log("HTTP DELETE");
                    responseEvent = await uc_delete_product(stage, event, idProducto);
                    break;
                default:
                    responseEvent = "ERROR";
            }
        } else {
            responseEvent = "ERROR, ID no valido";
        }
    } else if (resource == "/producto"){
        switch (event["httpMethod"]) {
            case "GET":
                console.log("HTTP GET");
                responseEvent = await uc_list_products(stage);
                break;
            case "POST":
                console.log("HTTP POST");
                responseEvent = await uc_post_product(stage, event);
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
        responseEvent = "ERROR, evento no identificado";
    }

    return responseEvent;
}

function noNumerico(ID) {
    const Patron = /\D/;
    return Patron.test(ID);
}
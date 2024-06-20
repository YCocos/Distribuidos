import { uc_list_products } from "../../domain/use_cases/uc_list_products.mjs"
import { uc_get_product } from "../../domain/use_cases/uc_get_product.mjs"
import { uc_post_product } from "../../domain/use_cases/uc_post_product.mjs"

export const apigtwAdapter = async (event, stage) => {
    let responseEvent = "Error";
    let idProducto = null;

    //Agregar Cognito aqui, removerlo de los adaptadores

    const pathParameters = event["pathParameters"];
    if (pathParameters != null) {
        idProducto = pathParameters["id_producto"];
    } else {
        idProducto = null;
    }

    //Switch con la respuesta HTTP
    switch (event["httpMethod"]) {
        case "GET":
            if (idProducto != null) {
                console.log("HTTP GET idProducto: " + idProducto);
                //responseEvent = "HTTP GET idProducto: " + idProducto;
                responseEvent = await uc_get_product(stage, idProducto);
            } else {
                console.log("HTTP GET");
                //responseEvent = "HTTP GET";
                responseEvent = await uc_list_products(stage);
            }
            break;
        case "POST":
            //responseEvent = "HTTP POST";
            responseEvent = await uc_post_product(stage, event);
            break;
        default:
            responseEvent = "ERROR";
    }

    return responseEvent;
}
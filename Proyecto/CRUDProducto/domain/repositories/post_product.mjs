import { postProduct, maxID } from "../../adapters/secondary/dynamodb.mjs";
import { printProduct } from "../../utils/print_producto.mjs";

export const post_product = async (stage, event) => {
    let responseEvent = "No encontrado";

    let body = JSON.parse(event.body);
    console.log("Body::", body);

    let tempID = await maxID(stage);
    console.log("MaxID::", tempID);
    tempID = +tempID + +1;

    let tipo = "PRODUCTO";
    body.Tipo = tipo;
    body.ID = "PROD#" + tempID;
    printProduct(body);

    responseEvent = await postProduct(stage, body);

    return responseEvent;
};
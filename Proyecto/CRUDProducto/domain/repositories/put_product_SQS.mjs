import { dequeueMessage } from "../../adapters/secondary/sqs.mjs";
import { putProduct } from "../../adapters/secondary/dynamodb.mjs"
import { printProduct } from "../../utils/print_producto.mjs";

export const put_product_SQS = async (stage) => {
    let responseEvent = "No encontrado";

    responseEvent = await dequeueMessage(stage);
    let bodyTemp = JSON.stringify(responseEvent["body"]);
    let body = JSON.parse(bodyTemp);
    console.log("SQS::", body);

    let tipo = "PRODUCTO";
    body.Tipo = tipo;
    printProduct(body);

    responseEvent = await putProduct(stage, body);

    return responseEvent;
}
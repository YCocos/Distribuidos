import { queueMessage } from "../../adapters/secondary/sqs.mjs";
import { publishMessage } from "../../adapters/secondary/sns.mjs";

export const put_product = async (stage, event, idProducto) => {
    let responseEvent = "No encontrado";

    let body = JSON.parse(event["body"]);
    console.log("Body::", body);
    body.ID = "PROD#" + idProducto;

    responseEvent = await queueMessage(stage, body);
    let message = "Mensaje en SQS";
    responseEvent = await publishMessage(stage, message);

    return responseEvent;
}

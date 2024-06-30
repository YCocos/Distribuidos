import { queueMessage } from "../../adapters/secondary/sqs.mjs";
import { publishMessage } from "../../adapters/secondary/sns.mjs";

export const post_product = async (stage, event) => {
    let responseEvent = "No encontrado";

    let bodyArray = event["body"];
    console.log("Body::", bodyArray);

    //console.log("Pk:" + bodyArray[0] + ", SK:" + bodyArray[1] + ", amount:" + bodyArray[2] + ", price:" + bodyArray[3] + ", productName:" + bodyArray[4]);
    responseEvent = await queueMessage(stage, bodyArray);
    let message = "Mensaje en SQS";
    responseEvent = await publishMessage(stage, message);

    return responseEvent;
}



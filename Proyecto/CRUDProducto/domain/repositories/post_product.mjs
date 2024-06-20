import { product } from "../entities/product.mjs";
import { queueMessage } from "../../adapters/secondary/sqs.mjs";
import { publishMessage } from "../../adapters/secondary/sns.mjs";
import { invokeCRUDMultimedia } from "../../adapters/secondary/lambda.mjs"

export const post_product = async (stage, event) => {
    let responseEvent = "No encontrado";

    //console.log("Repositorio POST");
    
    /*
    console.log("Body::", event["body"]);
    let bodyArray = await product(event["body"]);
    console.log("Pk:" + bodyArray[0] + ", SK:" + bodyArray[1] + ", amount:" + bodyArray[2] + ", price:" + bodyArray[3] + ", productName:" + bodyArray[4]);
    responseEvent = await queueMessage(stage, bodyArray);
    let message = "Mensaje en SQS";
    responseEvent = await publishMessage(stage, message); */

    let tempVar = event["body"];
    console.log("tempVar::", tempVar);

    responseEvent = await invokeCRUDMultimedia(tempVar, stage);

    return responseEvent;
}



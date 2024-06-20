import { dequeueMessage } from "../../adapters/secondary/sqs.mjs";
import { productSQS } from "../entities/product_SQS.mjs";

export const uc_post_Product_SQS = async (stage) => {
    let responseEvent = "No encontrado";

    responseEvent = await dequeueMessage(stage);
    console.log(responseEvent);
    let body = responseEvent.body.split(",")[4] + responseEvent.body.split(",")[5] + responseEvent.body.split(",")[6] + responseEvent.body.split(",")[7] + responseEvent.body.split(",")[8];
    console.log(body);
    let newbody = body.split(":")[2];
    console.log(newbody);
    let contenidoRespuesta = await productSQS(body);
    console.log(contenidoRespuesta);

    return responseEvent;
}
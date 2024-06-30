import { put_product_SQS } from "../repositories/put_product_SQS.mjs";

export const uc_put_product_SQS = async (stage) => {
    let responseEvent = "No encontrado";

    responseEvent = await put_product_SQS(stage);

    return responseEvent;
}
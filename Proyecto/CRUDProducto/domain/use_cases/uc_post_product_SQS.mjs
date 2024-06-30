import { post_product_SQS } from "../../domain/repositories/post_product_SQS.mjs";

export const uc_post_product_SQS = async (stage) => {
    let responseEvent = "No encontrado";

    responseEvent = await post_product_SQS(stage);

    return responseEvent;
}
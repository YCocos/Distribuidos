import { post_product } from "../repositories/post_product.mjs";

export const uc_post_product = async (stage, event) => {
    let responseEvent = "No encontrado";

    responseEvent = await post_product(stage, event);

    return responseEvent;
}
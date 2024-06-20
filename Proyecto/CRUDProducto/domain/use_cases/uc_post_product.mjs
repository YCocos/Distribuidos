import { post_product } from "../../domain/repositories/post_product.mjs";

export const uc_post_product = async (stage, event) => {
    let responseEvent = "No encontrado";

    //console.log("Caso de uso POST");
    responseEvent = await post_product(stage, event);

    return responseEvent;
}



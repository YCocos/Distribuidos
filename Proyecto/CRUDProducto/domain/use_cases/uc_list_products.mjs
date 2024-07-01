import { list_product } from "../../domain/repositories/list_products.mjs";

export const uc_list_products = async (stage) => {
    let responseEvent = "No encontrado";

    responseEvent = await list_product(stage);

    return responseEvent;
}
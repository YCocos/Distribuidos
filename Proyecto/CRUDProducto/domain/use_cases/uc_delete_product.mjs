import { delete_product } from "../../domain/repositories/delete_product.mjs";

export const uc_delete_product = async (stage, event, idProducto) => {
    let responseEvent = "No encontrado";

    responseEvent = await delete_product(stage, event, idProducto);

    return responseEvent;
}
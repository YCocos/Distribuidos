import { get_product } from "../../domain/repositories/get_product.mjs";

export const uc_get_product = async (stage, idProducto) => {
    let responseEvent = "No encontrado";

    responseEvent = await get_product(stage, idProducto);

    return responseEvent;
}



import { getProduct } from "../../adapters/secondary/dynamodb.mjs";

export const get_product = async (stage, idProducto) => {
    let responseEvent = "No encontrado";

    responseEvent = await getProduct(stage, idProducto);

    return responseEvent;
}

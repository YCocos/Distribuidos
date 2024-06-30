import { put_product } from "../repositories/put_product.mjs";

export const uc_put_product = async (stage, event, idProducto) => {
    let responseEvent = "No encontrado";

    //console.log("Caso de uso PUT");
    responseEvent = await put_product(stage, event, idProducto);

    return responseEvent;
}



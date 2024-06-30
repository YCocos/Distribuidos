import { deleteProduct } from "../../adapters/secondary/dynamodb.mjs";
import { printProduct } from "../../utils/print_producto.mjs";

export const delete_product = async (stage, event, idProducto) => {
    let responseEvent = "No encontrado";

    let body = {};
    body.Tipo = "PRODUCTO";
    body.ID = "PROD#" + idProducto;

    printProduct(body);

    responseEvent = await deleteProduct(stage, body);

    return responseEvent;
}

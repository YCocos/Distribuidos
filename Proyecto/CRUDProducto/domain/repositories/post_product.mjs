import { postProduct } from "../../adapters/secondary/dynamodb.mjs";
import { printProduct } from "../../utils/print_producto.mjs";

export const post_product = async (stage, event) => {
    console.log("Evento Post Producto")
    let responseEvent = "No encontrado";

    let body = JSON.parse(event.body);
    console.log("Body::", body);

    let tipo = "PRODUCTO";
    body.Tipo = tipo;
    body.ID = "PROD#" + body.ID;
    printProduct(body);

    responseEvent = await postProduct(stage, body);

    return responseEvent;
}

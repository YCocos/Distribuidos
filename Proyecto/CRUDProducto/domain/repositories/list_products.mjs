import { queryProducts } from "../../adapters/secondary/dynamodb.mjs";

export const list_product = async (stage) => {
    let responseEvent = "No encontrado";
    
    responseEvent = queryProducts(stage);

    return responseEvent;
}
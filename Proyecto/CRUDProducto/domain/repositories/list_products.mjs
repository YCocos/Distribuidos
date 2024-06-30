import { queryProducts } from "../../adapters/secondary/dynamodb.mjs";

export const list_product = async (stage) => {
    let responseEvent = "No encontrado";
    
    responseEvent = await queryProducts(stage);

    return responseEvent;
}
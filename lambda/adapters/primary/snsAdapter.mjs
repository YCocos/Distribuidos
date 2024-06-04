import { uc_post_Product_SQS } from "../../domain/use_cases/uc_post_product_SQS.mjs";

export const snsAdapter = async(stage, records) => {
    let response = {};

    console.log("snsAdapter::records", records);

    for ( let record in records ) {
        console.log("snsAdapter::record", record);
        console.log("snsAdapter::sns", record["Sns"]);
    }
    
    response = await uc_post_Product_SQS(stage);

    return response;
}
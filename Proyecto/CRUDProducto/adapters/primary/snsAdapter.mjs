import { uc_put_product_SQS } from "../../domain/use_cases/uc_put_product_SQS.mjs";

export const snsAdapter = async(stage, records) => {
    let response = {};

    console.log("snsAdapter::records", records);

    for ( let record in records ) {
        console.log("snsAdapter::record", record);
        console.log("snsAdapter::sns", record["Sns"]);
    }

    stage = "dev";
    
    response = await uc_put_product_SQS(stage);

    return response;
}
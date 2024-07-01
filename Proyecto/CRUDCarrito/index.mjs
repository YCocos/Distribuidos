import { apigtwAdapter } from './adapters/primary/apigtwAdapter.mjs'
import { buildResponse } from './utils/response_front.mjs'

export const handler = async (event, context) => {
    let responseEvent = {};

    let stage = getStage(context);
    console.log("stage::", stage);
    console.log("event::", event);

    if (event["httpMethod"]) {
        console.log("Evento HTTP");
        responseEvent = await apigtwAdapter(event, stage);
    } else {
        responseEvent = "Evento no reconocido";
    }
    
    let response = buildResponse(200, responseEvent);

    return response;
};

function getStage(context) {
    console.log("context::", context);
    return context.invokedFunctionArn.split(':')[7];
};
import { apigtwAdapter } from './adapters/primary/apigtwAdapter.mjs'
import { snsAdapter } from './adapters/primary/snsAdapter.mjs'

export const handler = async (event, context) => {
    let responseEvent = {};

    console.log("context::", context);
    let stage = getStage(context);
    console.log("stage::", stage);

    //Imprimir el evento
    console.log("handler::", event);

    if (event["httpMethod"]) {
        console.log("Evento HTTP");
        //responseEvent = "Evento HTTP";
        responseEvent = await apigtwAdapter(event, stage);
    } else if (event["isManualEvent"]) {
        //console.log("Evento Manual");
        responseEvent = "Evento Manual";
    } else if (event["Records"]) {
        //responseEvent = "Evento Records";
        const records = event["Records"];
        console.log("Evento Records: " + records);
        if (records[0]["EventSource"] == "aws:sns") {
            console.log("Evento SNS");
            responseEvent = await snsAdapter(stage, records);
        } else {
            responseEvent = "Evento no reconocido";
        }
    } else {
        responseEvent = "Evento no reconocido";
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(responseEvent),
    };

    return response;
};

function getStage(context) {
    //Imprimir el contexto
    console.log("handler::", context);

    return context.invokedFunctionArn.split(':')[7];
}
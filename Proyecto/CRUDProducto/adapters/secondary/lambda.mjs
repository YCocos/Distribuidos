import { InvokeCommand, LambdaClient, LogType } from "@aws-sdk/client-lambda";

const client = new LambdaClient({});

export const invokeCRUDMultimedia = async(payload, stage) => {
    const command = new InvokeCommand({
        FunctionName: "CRUDMultimedia:" + stage,
        Payload: JSON.stringify(payload),
        LogType: LogType.None
    });

    //const response = await client.send(command);
    const {Payload} = await client.send(command);
    const response = JSON.parse(Buffer.from(Payload).toString());

    console.log("invokeCRUDMultimedia:response", response);

    return response;
}
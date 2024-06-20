import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const snsClient = new SNSClient({});
const snsTopicsARNs = {
    "dev": "arn:aws:sns:us-east-1:637423276827:dev-my-topic-sns",
    "prod": ""
}

export const publishMessage = async(stage, message) => {
    const publishCommand = new PublishCommand({
        Message: message,
        TopicArn: snsTopicsARNs[stage]
    });

    try {
        const response = await snsClient.send(publishCommand);

        console.log("snsAdapter::publish", response);
        if (response.$metadata.httpStatusCode == 200){
            return {
                code: 200,
                message: "OK"
            }
        } else {
            return {
                code: response.$metadata.httpStatusCode,
                message: "Error"
            }
        }
    } catch (e) {
        console.error("Error en SNS", e);
        return {
            code: 500,
            message: "Error",
            error: error.message
        };
    }
    
}
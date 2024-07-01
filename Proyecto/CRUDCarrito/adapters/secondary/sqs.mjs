import { SQSClient, SendMessageCommand, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";

//Definir objeto sqs
//Hacer un objeto/arreglo con las dos URLs
const sqsClient = new SQSClient({});
const sqsUrls = {
    "dev": "https://sqs.us-east-1.amazonaws.com/992382572215/MakeupM-SQS-POSTProducto",
    "prod": ""
}

//Command para hacer una peticion (Similar a DynamoDB)
//Enviar peticion a SQS usando el Objeto
export const queueMessage = async (stage, message) => {
    console.log("stage::", stage);
    console.log("message::", message);

    const QueueCommand = new SendMessageCommand({
        QueueUrl: sqsUrls[stage],
        MessageBody: JSON.stringify(message)
    });

    try{
        let response = await sqsClient.send(QueueCommand);
        console.log("sqsAdapter::queue", response);

        if (response.$metadata.httpStatusCode == 200){
            return {
                code: 200,
                message: "OK"
            }
        } else {
            return {
                code: response.$metadata.httpStatusCode,
                message: "ERROR"
            }
        }
    } catch (e) {
        console.error("Error en SQS", e);
        return {
            code: 500,
            message: "Error",
            error: e.message
        };
    }
}

//Crear un caso de uso para extraer mensaje de la cola
//Crear index.msj
export const dequeueMessage = async (stage) => {
    console.log("stage::", stage);
    
    const DequeCommand = new ReceiveMessageCommand({
        QueueUrl:sqsUrls[stage],
        MaxNumberOfMessages:1,
        WaitTimeSeconds:10
    });

    try {
        let response = await sqsClient.send(DequeCommand);
        let mensaje = "";
    
        if (response.Messages && response.Messages.length > 0) {
            for (const message of response.Messages) {
                const DeleteCommand = new DeleteMessageCommand({
                    QueueUrl: sqsUrls[stage],
                    ReceiptHandle: message.ReceiptHandle
                });

                mensaje = message.Body;

                await sqsClient.send(DeleteCommand);
            }
            
            return {
                'statusCode': 200,
                'body': JSON.parse(mensaje)
            }
        } else {
            console.log("Ningun mensaje recibido");
        }
    } catch (e) {
        console.error("Error en SQS", e);
        return {
            code: 500,
            message: "Error",
            error: e.message
        };
    }
}
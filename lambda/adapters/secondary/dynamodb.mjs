import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient
const docClient = DynamoDBDocumentClient.from(client);

export const queryProducts = async (stage) => {
    //console.log("stage::" + stage);
    const command = new QueryCommand({
        TableName: stage + "-my-first-table",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: { ":pk": "PRODUCT", },
        ConsistentRead: false,
    });

    const response = await docClient.send(command);
    console.log("queryProducts", response);

    return response;
}

export const getProduct = async (stage, idProducto) => {
    //console.log("stage::" + stage + ", idProducto::" + idProducto);
    const command = new QueryCommand({
        TableName: stage + "-my-first-table",
        KeyConditionExpression: "pk = :pk AND sk = :sk",
        ExpressionAttributeValues: { ":pk": "PRODUCT", ":sk": idProducto, },
        ConsistentRead: false,
    })

    const response = await docClient.send(command);
    console.log("queryProducts", response);

    return response;
}

export const uploadProduct = async (message) => {
    
}
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient
const docClient = DynamoDBDocumentClient.from(client);

export const queryProducts = async (stage) => {
    let newResponse = "";

    //console.log("stage::" + stage);
    const command = new QueryCommand({
        TableName: stage + "-my-first-table",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: { ":pk": "PRODUCT", },
        ConsistentRead: false,
    });

    const response = await docClient.send(command);
    console.log("queryProducts", response);
    newResponse = response["Items"];

    if (newResponse == "[]" || newResponse == null || newResponse == "") {
        newResponse = "No hay items encontrados";
    }

    return newResponse;
}

export const getProduct = async (stage, idProducto) => {
    let newResponse = "";

    //console.log("stage::" + stage + ", idProducto::" + idProducto);
    const command = new QueryCommand({
        TableName: stage + "-my-first-table",
        KeyConditionExpression: "pk = :pk AND sk = :sk",
        ExpressionAttributeValues: { ":pk": "PRODUCT", ":sk": idProducto, },
        ConsistentRead: false,
    })

    const response = await docClient.send(command);
    console.log("queryProducts", response);
    newResponse = response["Items"];

    if (newResponse == "[]" || newResponse == null || newResponse == "") {
        newResponse = "Item no encontrado";
    }

    return newResponse;
}

export const uploadProduct = async (message) => {
    
}
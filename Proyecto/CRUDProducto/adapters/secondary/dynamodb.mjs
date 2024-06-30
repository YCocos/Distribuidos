import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient
const docClient = DynamoDBDocumentClient.from(client);
const DynamoTables = {
    "dev": "MakeupM-DyDB",
    "prod": "MakeupM-DyDB"
}

export const queryProducts = async (stage) => {
    let newResponse = "";

    //console.log("stage::" + stage);
    const command = new QueryCommand({
        TableName: DynamoTables[stage],
        KeyConditionExpression: "Tipo = :Tipo",
        ExpressionAttributeValues: { ":Tipo": "PRODUCTO", },
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
        TableName: DynamoTables[stage],
        KeyConditionExpression: "Tipo = :Tipo AND ID = :ID",
        ExpressionAttributeValues: { ":Tipo": "PRODUCTO", ":ID": "PROD#" + idProducto, },
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

export const postProduct = async (message) => {
    let newResponse = "";

    return newResponse;
}

export const putProduct = async (message) => {
    let newResponse = "";

    return newResponse;
}

export const deleteProduct = async (message) => {
    let newResponse = "";

    return newResponse;
}
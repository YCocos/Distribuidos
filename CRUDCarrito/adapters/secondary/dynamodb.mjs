import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient
const docClient = DynamoDBDocumentClient.from(client);
const DynamoTables = {
    "dev": "MakeupM-DyDB",
    "prod": "MakeupM-DyDB"
}

export const getCarrito = async (stage, idUsuario) => {
    let newResponse = "";

    const command = new QueryCommand({
        TableName: DynamoTables[stage],
        KeyConditionExpression: "Tipo = :Tipo AND ID = :ID",
        ExpressionAttributeValues: { ":Tipo": "CARRITO", ":ID": "USUARIO#" + idUsuario, },
        ConsistentRead: false,
    });

    const response = await docClient.send(command);
    console.log("queryProducts", response);
    newResponse = response["Items"];

    if (newResponse == "[]" || newResponse == null || newResponse == "") {
        newResponse = "Carrito no encontrado";
    }

    return newResponse;
}

export const postCarrito = async (stage, body) => {
    let newResponse = "";

    const item = {
        Tipo: body.Tipo,
        ID: body.ID,
        Productos: body.Productos
    };

    const command = new PutCommand({
        TableName: DynamoTables[stage],
        Item: item
    });

    try {
        newResponse = await docClient.send(command);
    } catch (e) {
        newResponse = e;
        console.error("Fallo al insetar Item:", e);
        throw new Error("Fallo al insetar Item");
    };

    return newResponse;
}

export const putCarrito = async (stage, body) => {
    let newResponse = "";

    const key = {
        Tipo: body.Tipo,
        ID: body.ID
    };
    
    const updateExpression = 'set Productos = :Productos';
    const expressionAttributeValues = {
        ':Productos': body.Productos
    };

    const command = new UpdateCommand({
        TableName: DynamoTables[stage],
        Key: key,
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: 'UPDATED_NEW'
    });

    try {
        newResponse = await docClient.send(command);
    } catch (e) {
        newResponse = e
        console.error("Fallo al actualizar el Item:", e);
        throw new Error("Fallo al actualizar el Item");
    };

    return newResponse;
}

export const deleteCarrito = async (stage, body) => {
    let newResponse = "";

    const key = {
        Tipo: body.Tipo,
        ID: body.ID
    };

    const command = new DeleteCommand({
        TableName: DynamoTables[stage],
        Key: key,
        ReturnValues: 'ALL_OLD'
    });

    try {
        newResponse = await docClient.send(command);
    } catch (e) {
        newResponse =  e;
        console.error("Fallo al eliminar el Item:", e);
        throw new Error("Fallo al eliminar el Item");
    };

    return newResponse;
}
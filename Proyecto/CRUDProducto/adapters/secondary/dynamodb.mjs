import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

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
    });

    const response = await docClient.send(command);
    console.log("queryProducts", response);
    newResponse = response["Items"];

    if (newResponse == "[]" || newResponse == null || newResponse == "") {
        newResponse = "Item no encontrado";
    }

    return newResponse;
}

export const postProduct = async (stage, body) => {
    let newResponse = "";

    const item = {
        Tipo: body.Tipo,
        ID: body.ID,
        Nombre: body.Nombre,
        Categoria: body.Categoria,
        Descripcion: body.Descripcion,
        Precio: body.Precio,
        Stock: body.Stock
    };

    const command = new PutCommand({
        TableName: DynamoTables[stage],
        Item: item
    });

    try {
        newResponse = await docClient.send(command);
        return newResponse;
    } catch (e) {
        console.error("Fallo al insetar Item:", e);
        throw new Error("Fallo al insetar Item");
    };
}

export const putProduct = async (stage, body) => {
    let newResponse = "";

    const key = {
        Tipo: body.Tipo,
        ID: body.ID
    };
    
    const updateExpression = 'set Nombre = :Nombre, Categoria = :Cat, Descripcion = :Desc, Precio = :Precio, Stock = :Stock';
    const expressionAttributeValues = {
        ':Nombre': body.Nombre,
        ':Cat': body.Categoria,
        ':Desc': body.Descripcion,
        ':Precio': body.Precio,
        ':Stock': body.Stock
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
        return newResponse;
    } catch (e) {
        console.error("Fallo al actualizar el Item:", e);
        throw new Error("Fallo al actualizar el Item");
    };
}

export const deleteProduct = async (stage, body) => {
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
        return newResponse;
    } catch (e) {
        console.error("Fallo al eliminar el Item:", e);
        throw new Error("Fallo al eliminar el Item");
    };
}
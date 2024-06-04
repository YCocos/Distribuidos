export const product = async (body) => {
    let responseEvent = "Error"

    try {
        responseEvent = [
            body.split('\n')[3],
            body.split('\n')[7],
            body.split('\n')[11],
            body.split('\n')[15],
            body.split('\n')[19]
        ];
    } catch (e) {
        responseEvent = "No";
    }

    return responseEvent;
}
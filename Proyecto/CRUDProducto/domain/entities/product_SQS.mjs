export const productSQS = async (body) => {
    let responseEvent = "Error"

    try {
        responseEvent = [
            body.split('\\\"')[1].slice(0,-3),
            body.split('\\\"')[3].slice(0,-3),
            body.split('\\\"')[5].slice(0,-3),
            body.split('\\\"')[7].slice(0,-3),
            body.split('\\\"')[9].slice(0,-3)
        ];
    } catch (e) {
        responseEvent = "No";
    }

    return responseEvent;
}
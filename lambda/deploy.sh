echo "Function: CRUDProducto"
cd ./
zip -r lambda adapters domain utils index.mjs node_modules package.json package-lock.json
echo "Upload"
aws lambda update-function-code --function-name CRUDProducto --zip-file fileb://lambda.zip --profile default --region us-east-1

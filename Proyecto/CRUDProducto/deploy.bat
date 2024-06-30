echo off
echo "Function: MakeupM-CRUDProducto"
cd ./
tar.exe -a -c -f lambda.zip adapters domain node_modules utils index.mjs package.json package-lock.json
echo "Upload"
aws lambda update-function-code --function-name MakeupM-CRUDProducto --zip-file fileb://lambda.zip --profile default --region us-east-1

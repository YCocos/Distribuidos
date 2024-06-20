echo off
echo "Function: crud_producto"
cd ./
tar.exe -a -c -f lambda.zip adapters domain utils index.mjs node_modules package.json package-lock.json
echo "Upload"
echo aws lambda update-function-code --function-name crud_producto --zip-file fileb://lambda.zip --profile default --region us-east-1

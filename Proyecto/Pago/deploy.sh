echo "Function: MakeupM-Pago"
cd ./
zip -r lambda adapters domain node_modules index.mjs package.json package-lock.json
echo "Upload"
aws lambda update-function-code --function-name MakeupM-Pago --zip-file fileb://lambda.zip --profile default --region us-east-1

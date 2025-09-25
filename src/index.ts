import { APIGatewayProxyHandler } from 'aws-lambda';

export const lambdaHandler: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from SAM + Node 20 + TS + esbuild!' }),
  };
};

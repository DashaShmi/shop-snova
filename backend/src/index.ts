import { createEmailBody, sendEmail } from "./utils";

interface CreateOrderData {
  telegram: string;
  productIds: string[];
}

module.exports.handler = async function (body: any, context: any) {
  const httpMethod = body.httpMethod;

  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  }

  console.log("context", context);

  const payload: CreateOrderData = context.getPayload();
  const result = { text: "данные реквеста", payload };

  const text = createEmailBody(payload.productIds);
  sendEmail(text)

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
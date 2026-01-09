import { CreateOrderData } from "./CreateOrderData";
import { createAdminEmailBody, createClientEmailBody, sendEmail } from "./utils";

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

  const orderData: CreateOrderData = context.getPayload();
  const result = { text: "данные реквеста", payload: orderData };

  const textAdmin = createAdminEmailBody(orderData);
  const textClient = createClientEmailBody(orderData);

  sendEmail(orderData.email, textClient)
  sendEmail("ishmizh@gmail.com", textAdmin)

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
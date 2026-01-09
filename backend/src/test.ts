import { CreateOrderData } from "./CreateOrderData";
import { createAdminEmailBody, sendEmail } from "./utils";

console.log('Ты вонючка?');

const orderData: CreateOrderData = {
  telegram: "shmizh",
  email: "ishmizh@gmail.com",
  productIds: ["bifold-wallet", "zippered-wallet"]
}

const text = createAdminEmailBody(orderData);
sendEmail(orderData.email, text)
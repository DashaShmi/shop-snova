import { ALL_PRODUCTS_BACKEND } from "./ALL_PRODUCTS_BACKEND";
import { CreateOrderData } from "./CreateOrderData";

const brevoApiKey = process.env.BREVO_API_KEY ?? "";

if (brevoApiKey.length === 0) {
  console.error("BREVO_API_KEY не указан");
  throw new Error("BREVO_API_KEY не указан")
}

export async function sendEmail(email: string, htmlContent: string) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": brevoApiKey
    },
    body: JSON.stringify({
      sender: {
        name: "SNOVA",
        email: "ishmizh@gmail.com",
      },
      to: [
        {
          email: email,
        },
      ],
      subject: "New order on SNOVA",
      htmlContent: htmlContent,
    }),
  });
  const data = await response.json();
  console.log(data);
}

export function createClientEmailBody(orderData: CreateOrderData): string {
  let mail_text = "";

  mail_text += "<h2>Hi!</h2>";
  mail_text += "<p>Thank you for your order and for supporting handmade and upcycled work — I truly appreciate your trust.</p>";
  mail_text += "<p>I’ve received your request and will contact you personally soon to confirm the details and payment.</p>";
  mail_text += "<p>Warm regards, Dasha.</p>";
  mail_text += "<h3><SNOVA</h3>";
  const orderedProducts = orderData.productIds
    .map(id => ALL_PRODUCTS_BACKEND.find(p => p.id === id))
    .filter(Boolean); // убираем undefined

  mail_text += "<ul>";

  orderedProducts.forEach(product => {
    mail_text += `<li>${product!.name}</li>`;
  });

  mail_text += "</ul>";

  console.log(mail_text);

  return mail_text
}

export function createAdminEmailBody(orderData: CreateOrderData): string {
  let mail_text = "";

  mail_text += "<h2>Даша, привет!</h2>";
  mail_text += "<p>Новый заказ на сайте!</p>";
  mail_text += `<p>Telegram клиента:${orderData.telegram}</p>`
  mail_text += `<p>Email клиента:${orderData.email}</p>`

  const orderedProducts = orderData.productIds
    .map(id => ALL_PRODUCTS_BACKEND.find(p => p.id === id))
    .filter(Boolean); // убираем undefined

  mail_text += "<ul>";

  orderedProducts.forEach(product => {
    mail_text += `<li>${product!.name}</li>`;
  });

  mail_text += "</ul>";

  console.log(mail_text);

  return mail_text
}

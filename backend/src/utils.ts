import { ALL_PRODUCTS_BACKEND } from "./ALL_PRODUCTS_BACKEND";

const brevoApiKey = process.env.BREVO_API_KEY ?? "";

if (brevoApiKey.length === 0) {
  console.error("BREVO_API_KEY не указан");
  throw new Error("BREVO_API_KEY не указан")
}

export async function sendEmail(htmlContent: string) {
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
          email: "ishmizh@gmail.com",
        },
      ],
      subject: "New order on SNOVA",
      htmlContent: htmlContent,
    }),
  });
  const data = await response.json();
  console.log(data);
}

export function createEmailBody(ids: string[]): string {
  let mail_text = "";

  mail_text += "<h2>Даша, привет!</h2>";
  mail_text += "<p>Новый заказ на сайте!</p>";

  const orderedProducts = ids
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

import { ALL_PRODUCTS_BACKEND } from "./ALL_PRODUCTS_BACKEND";

console.log('Ты вонючка?')

const brevoApiKey = process.env.BREVO_API_KEY ?? "";

if (brevoApiKey.length === 0) {
  console.error("BREVO_API_KEY не указан");
  process.exit(1);
}

console.log("brevo api key: " + brevoApiKey)

// const response = await fetch("https://api.brevo.com/v3/smtp/email", {
//   method: "POST",
//   headers: {
//     "accept": "application/json",
//     "content-type": "application/json",
//     "api-key": brevoApiKey
//   },
//   body: JSON.stringify({
//     sender: {
//       name: "Dasha ne Brevno",
//       email: "ishmizh@gmail.com",
//     },
//     to: [
//       {
//         email: "ishmizh@gmail.com",
//         name: "Fonte",
//       },
//     ],
//     subject: "Hello from Brevno!",
//     htmlContent: `
//     <html>
//       <body>
//         <p>Hello,</p>
//         <p>This is my first transactional email sent from Brevo.</p>
//       </body>
//     </html>
//   `,
//   }),
// });

// const data = await response.json();
// console.log(data);



async function sendEmail(ids: string[]) {

  let mail_text = "";

  mail_text += "Даша, привет!\n"
  mail_text += "Новый заказ на сайте!\n"

  const orderedProducts = ids
    .map(id => ALL_PRODUCTS_BACKEND.find(p => p.id === id))
    .filter(Boolean); // убираем undefined

  orderedProducts.forEach(product => {
    mail_text += `* ${product!.name}\n`;
  });


  mail_text += "* ИМЯ_ТОВАРА \n"


  console.log(mail_text);
}

sendEmail(["bifold-wallet", "zippered-wallet"]);
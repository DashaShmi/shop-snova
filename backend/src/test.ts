import { createEmailBody, sendEmail } from "./utils";

console.log('Ты вонючка?');



const text = createEmailBody(["bifold-wallet", "zippered-wallet"]);
sendEmail(text)
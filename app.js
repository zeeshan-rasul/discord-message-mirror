import selfcore from "selfcore";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const client = new selfcore();
const gateway = new selfcore.Gateway(process.env.GATEWAY_URL);
console.log("Ready!")
gateway.on("message", (m) => {
  if (m.channel_id === "974407015189319801") 
  {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      process.env.WEBHOOK_URL,
      content
    );
  }
});
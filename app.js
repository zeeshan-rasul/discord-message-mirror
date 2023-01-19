
import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway("OTc0NDA2NDgxNjI3NzI1ODQ0.GUTH2S.61RQCxehV2PYhrfiXgdmKppxhd9ZD7rng0D1Lk");

gateway.on("message", (m) => {
  if (m.channel_id === "974407015189319801") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1065348747581722794/8G3d16UEKofYfi-tAkWXTJZvA9xtsr8blOEFBqwRis9iN4MvCrWsstYo_tv4Ni7bmLwB",
      content
    );
  }
});
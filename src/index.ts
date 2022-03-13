import { App, ExpressReceiver } from '@slack/bolt'
import dotenv from 'dotenv';
dotenv.config();

const PROT = 3000

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
})

app.command(`/attendance_add`, async ({ say, ack, body, context, command }) => {
  console.log(body)
});

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || PROT)
  console.log(`⚡️ Bolt app is running! ${PROT}`)
})();
const { App } = require('@slack/bolt');
const app = new App({
  token: ``,
  signingSecret: ``
})

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})()

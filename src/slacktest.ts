import { WebClient } from '@slack/web-api';
// import { Webhook } from '@slack/webhook';
// import { rtm } from '@slack/rtm-api';

async function main(){
    try{
        //Local PATH setting command at WindowsPowerShell: SETX SLACK_BOT_TOKEN <xoxb- type your token>
        const token = process.env.SLACK_BOT_TOKEN;
        const channel = '#test';
        const message = 'Hello, world! at TypeScript';

        const client = new WebClient(token);
        const params = {
            channel: channel,
            text: message
        };
        const resp = await client.chat.postMessage(params);
        console.log(resp);
    }catch(e){
        console.log(e);
    }
}
main();

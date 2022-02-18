import { WebClient } from "@slack/web-api";

async function message(){
    try{
        //const token = process.env.SLACK_BOT_TOKEN;
        const channel = '#test';
        const message = '昼飯だ！';

        const date = new Date();
        date.setDate(date.getDate()+1);
        date.setHours(13,0,0);
        const postAt = Number.parseInt("" + date.getTime()/1000);

        const client = new WebClient(token);
        
        const result = await client.chat.scheduleMessage({
            channel: channel,
            text: message,
            post_at: postAt
        });
        console.log(result);
    }catch(e){
        console.error(e);
    }
}
message();
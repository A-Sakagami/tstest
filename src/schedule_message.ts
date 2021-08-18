import { WebClient } from "@slack/web-api";

async function message(){
    try{
        const token = process.env.SLACK_BOT_TOKEN;
        const channel = '#test';
        const message = 'test message';

        const date = new Date();
        date.setDate(date.getDate()+1);
        date.setHours(10,0,0);
        const postAt = Number.parseInt("" + date.getTime()/1000);

        const client = new WebClient(token);
        
        const result = await client.chat.scheduleMessage({
            channel: '#test',
            text: 'test message',
            post_at: postAt
        });
        console.log(result);
    }catch(e){
        console.error(e);
    }
}
message();
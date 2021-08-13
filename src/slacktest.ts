import { WebClient } from '@slack/web-api';

async function main(){
    try{
        const token = 'xoxb-1977008656005-1986620500100-tJ2azu3RtPj1dGNSO06eaIsV';
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

    }
}
main();

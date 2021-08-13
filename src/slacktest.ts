import { WebClient } from '@slack/web-api';

async function main(){
    try{
        const token:string = 'xoxp-1977008656005-1973309065078-1980454774114-0ce080a1d523790373dbb6323044610b';
        const channel:string = '#test';
        const message:string = 'Hello, world! at TypeScript';

        const client = new WebClient(token);
        const params = {
            channel: channel,
            message: message
        };
        const resp = await client.chat.postMessage(params);
        console.log(resp);
    }catch(e){

    }
}
main();

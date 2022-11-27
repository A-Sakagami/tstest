"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_api_1 = require("@slack/web-api");
// import { Webhook } from '@slack/webhook';
// import { rtm } from '@slack/rtm-api';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Local PATH setting command at WindowsPowerShell: SETX SLACK_BOT_TOKEN <xoxb- type your token>
            const token = process.env.SLACK_BOT_TOKEN;
            const channel = '#test';
            const message = 'Hello, world! at TypeScript';
            const client = new web_api_1.WebClient(token);
            const params = {
                channel: channel,
                text: message
            };
            const resp = yield client.chat.postMessage(params);
            console.log(resp);
        }
        catch (e) {
            console.log(e);
        }
    });
}
main();
//# sourceMappingURL=slacktest.js.map
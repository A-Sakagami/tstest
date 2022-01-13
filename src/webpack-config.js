const path = require('path');

//webpackの設定ファイル
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development', //production | development | none

    //メインのtsファイル（エントリーポイント）
    entry: './hello.ts',

    output:{
        path: path.join(__dirname,"dist"),
        filename: "hello.js"
    },
    module:{
        rules:[{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve:{
        modules:[
            "node_modules",
        ],
        extensions:[
            '.ts',
            '.js'
        ]
    }
}
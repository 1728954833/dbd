import webpack, { Stats } from "webpack";

import WebpackConfig from "./webpack.config";

const env =
    process.env.NODE_ENV === "development" ? "development" : "production";

const config = new WebpackConfig(env);

if (env === "development") {
    const watching = webpack(config).watch(
        {
            aggregateTimeout: 300,
            ignored: /node_modules/,
        },
        (err, stats) => {
            console.log("重新编译");
            if (err || stats.hasErrors()) {
                console.error(err || stats.toString());
                watching.close(() => {
                    console.log("watching close~");
                });
            }
        }
    );
} else {
    console.log("开始打包");
    webpack(config).run((err: Error, stats: Stats) => {
        if (err || stats.hasErrors()) {
            console.error(err || stats.toString());
        }
    });
}

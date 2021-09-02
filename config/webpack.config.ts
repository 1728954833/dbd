import { Configuration } from "webpack";
import path from "path";

class WebpackConfig implements Configuration {
    // 修改 target 为 electron-main
    target: Configuration["target"] = "electron-main";
    entry: Configuration["entry"] = {
        main: path.resolve(__dirname, "../main/index.ts"),
        preload: path.resolve(__dirname, "../main/preload.ts"),
    };
    output: Configuration["output"] = {
        filename: "[name].js",
        path: path.resolve(__dirname, "../build"),
    };

    node: Configuration["node"] = {
        // 默认值是 'mock'，会将其转化为'/'，我们这里并不是服务端，应该设置为 false ，表示输出文件的目录名，在打包代码里面也要一直将其当作打包后的文件路径使用
        __dirname: false,
        __filename: false,
    };
    resolve: Configuration["resolve"] = {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    };
    module: Configuration["module"] = {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            },
        ],
    };

    constructor(public mode: Configuration["mode"] = "production") {}
}

export default WebpackConfig;

// Modules to control application life and create native browser window
import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";
import "./controller";
//保持窗口对象的全局引用，如果不这样做，窗口将在 JavaScript 对象被垃圾回收时自动关闭。
let mainWindow: any;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, "./preload.js"),
        },
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${__dirname}/../build/index.html`
    );

    // Open the DevTools.
    isDev && mainWindow.webContents.openDevTools();

    //当窗口关闭时发出。
    mainWindow.on("closed", function () {
        //取消引用窗口对象，通常你会存储窗口
        //在数组中，如果您的应用程序支持多窗口，现在是时候了
        //当你应该删除相应的元素时。
        mainWindow = null;
    });
}

//当 Electron 完成时将调用此方法
//初始化并准备好创建浏览器窗口。
//部分API只有在该事件发生后才能使用。
app.on("ready", () => {
    createWindow();
    app.on("activate", function () {
        //在 macOS 上，在应用程序中重新创建一个窗口是很常见的
        //单击停靠图标并且没有其他窗口打开。
        if (mainWindow === null) createWindow();
    });
});

//当所有窗口都关闭时退出
app.on("window-all-closed", function () {
    //在 macOS 上，应用程序及其菜单栏很常见。保持活动状态，直到用户使用 Cmd + Q 明确退出
    if (process.platform !== "darwin") app.quit();
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules to control application life and create native browser window
var electron_1 = require("electron");
var isDev = __importStar(require("electron-is-dev"));
var path = __importStar(require("path"));
require("./controller");
//保持窗口对象的全局引用，如果不这样做，窗口将在 JavaScript 对象被垃圾回收时自动关闭。
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, "./preload.js"),
        },
    });
    mainWindow.loadURL(isDev
        ? "http://localhost:3000"
        : "file://" + __dirname + "/../build/index.html");
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
electron_1.app.on("ready", function () {
    createWindow();
    electron_1.app.on("activate", function () {
        //在 macOS 上，在应用程序中重新创建一个窗口是很常见的
        //单击停靠图标并且没有其他窗口打开。
        if (mainWindow === null)
            createWindow();
    });
});
//当所有窗口都关闭时退出
electron_1.app.on("window-all-closed", function () {
    //在 macOS 上，应用程序及其菜单栏很常见。保持活动状态，直到用户使用 Cmd + Q 明确退出
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
//# sourceMappingURL=index.js.map
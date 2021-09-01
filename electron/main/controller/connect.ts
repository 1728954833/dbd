import { ipcMain, IpcMainEvent } from "electron";

ipcMain.on("connect", (event: IpcMainEvent, data: any[]) => {
    console.log(data);
    event.sender.send("connect-reply", "test-msg");
});

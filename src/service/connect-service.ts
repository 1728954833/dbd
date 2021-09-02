import { ConnectArgs } from '../component/ConnectDBModel';

const ipcRenderer = window?.Electron?.ipcRenderer;

export const connect = async (connectArgs: ConnectArgs) => {
    ipcRenderer.send('connect', connectArgs);
    return new Promise(resolve => {
        ipcRenderer.on('connect-reply', (_, data: any[]) => {
            resolve(data);
        });
    });
};

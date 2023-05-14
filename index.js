const {BrowserWindow, app} = require('electron');

let mainWindow;

function onClose(){
    mainWindow = null;
}

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 640,
        height: 480
    });
        
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', function(){onClose()});
}

app.on('ready', function(){createWindow()})


app.on('window-all-closed', function(){
    if(process.platfrom !== 'darwin'){
        app.quit();
    }
})

app.on('activate', function(){
    if(!mainWindow){
        createWindow();
    }
})



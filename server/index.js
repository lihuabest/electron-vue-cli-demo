const electron = require('electron');
// 用于控制应用生命周期
const {app} = electron;
// 用于创建本地窗口
const {BrowserWindow} = electron;

// 主进程
const ipc = electron.ipcMain;

//为Window对象创建一个全局的引用,否则可能被JavaScript的垃圾回收机制自动回收
let win;

/**
 * @function 创建窗口
 */
function createWindow() {
    // 创建类似于浏览器的窗口
    win = new BrowserWindow({
        width: 1024,
        height: 670,
        frame: false,
        // transparent: true, // 全透明了
        // titleBarStyle: 'hidden-inset', // window 无用
        x: 10,
        y: 200
    });

    // 加载应用入口文件,本文件为测试文件,因此加载的是测试
    win.loadURL(`http://localhost:3001`);

    // 正式环境
    // win.loadURL(`file://${__dirname}/dist/index.html`);
    // let url = require('url').format({
    //     protocol: 'file',
    //     slashes: true,
    //     pathname: require('path').join(__dirname, '/dist/index.html')
    // });

    // win.loadURL(url)

    // 启动调试工具,如果是开发环境下则不需要开启
    win.webContents.openDevTools();

    // 设置窗口关闭事件
    win.on('closed', () => {
        //因为上面是设置了一个全局引用,因此这里需要对该对象解除引用
        //如果你的应用支持打开多窗口,可以把所有的引用存入一个数组中,然后在这里动态删除
        win = null;
    });

    // 监听message事件
    ipc.on('message', (event, args) => {
        console.log(args);
    });

    // 关闭窗口
    ipc.on('window-close', (event, args) => {
        win.close();
    });

    // 最大化窗口
    ipc.on('window-maximize', (event, args) => {
        win.maximize();
    });

    // 关闭窗口
    ipc.on('window-minimize', (event, args) => {
        win.minimize();
    });
}

// 在基本环境准备好之后的回调
app.on('ready', createWindow);

// 所有窗口都关闭之后的回调
app.on('window-all-closed', () => {
    //在OSX中经常是用户虽然关闭了主窗口,但是仍然希望使用Menu Bar,因此这里不进行强行关闭
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// 应用被重新激活之后的回调
app.on('activate', () => {
    // 在Dock中的Menu Bar被点击之后重新激活应用
    if (win === null) {
        createWindow();
    }
});

const { app, BrowserWindow } = require('electron'); // 在electron 中有 app 这个对象 和BrowserWindow 这个类

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 }); //在这里是创建一个BrowserWindow的实例，就是一个窗口，设定大小
  win.loadFile('index.html'); //加载了主窗口UI的页面文件
  win.on('closed',()=>{
    console.log('closed');
    win = null
  })
}

app.on('ready', createWindow);
app.on('window-all-closed',()=>{
  console.log('window-all-closed');
  if(process.platform != 'darwin'){
    app.quit();
  }
});

app.on('active',()=>{
  console.log('active');
  if (win == null) {
    createWindow();//在苹果系统下面是会再次获得焦点，并没有真正的关闭，只适用苹果系统
  }
});
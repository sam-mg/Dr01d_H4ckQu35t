Java.perform(() => {
    var Activity = Java.use('com.ad2001.frida0x3.Checker');
    for (var i = 0; i < 256; i++) {
        Activity.increase();
    }
});
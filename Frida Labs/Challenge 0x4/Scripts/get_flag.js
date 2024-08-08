Java.perform(() => {
    var Check = Java.use('com.ad2001.frida0x4.Check');
    const check = Check.$new();
    var result = check.get_flag(1337);
    console.log("Flag: " + result);
});
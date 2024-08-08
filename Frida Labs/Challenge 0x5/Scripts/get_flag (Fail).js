Java.perform(function() {
    var MainActivity = Java.use('com.ad2001.frida0x5.MainActivity');
    var main = MainActivity.$new();
    main.flag(1337);
});
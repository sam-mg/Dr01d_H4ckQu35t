Java.perform(() => {
    Java.choose('com.ad2001.frida0x7.MainActivity', {
        onMatch: function(instance) {
            var Check = Java.use('com.ad2001.frida0x7.Checker');
            const check = Check.$new(550, 550);
            instance.flag(check);
        },
        onComplete: function() {}
    });
});
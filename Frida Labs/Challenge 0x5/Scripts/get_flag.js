Java.perform(() => {
    Java.choose('com.ad2001.frida0x5.MainActivity', {
        onMatch: function(instance) {
            instance.flag(1337);
        },
        onComplete: function() {}
    });
});
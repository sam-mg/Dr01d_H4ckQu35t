Java.perform(() => {
    Java.choose('com.ad2001.frida0x6.MainActivity', {
        onMatch: function(instance) {
            var Check = Java.use('com.ad2001.frida0x6.Checker');
            const check = Check.$new();
            check.num1.value = 1234;
            check.num2.value = 4321;
            instance.get_flag(check);
        },
        onComplete: function() {}
    });
});
var strcmp_adr =  Module.findExportByName("libfrida0x8.so", "strcmp");
Interceptor.attach(strcmp_adr, {
    onEnter: function (args) {
        var arg0 = Memory.readUtf8String(args[0]);
        var arg1 = Memory.readUtf8String(args[1]);
        if (arg0 === "") {
            send("agr[0]: (User Input)");
            send("arg[1]: "+ arg1);
        }
    },
    onLeave: function (retval) {
    }
});
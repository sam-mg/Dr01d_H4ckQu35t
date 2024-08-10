# Flag Six - Login 3

Let's explore the next flag, `Flag Six - Login 3`.
![](ScreenShots/Flag%20Six%20-%20Login%203.jpg)

Upon inspection, the primary hints provided are `keys` and `classes`. To dive deeper, let's analyze the source code:
```java
public final void submitFlag(View view) {
    if (C1843g.m8721a(editText.getText().toString(), C0940k.m5620a("k3FElEG9lnoWbOateGhj5pX6QsXRNJKh///8Jxi8KXW7iDpk2xRxhQ=="))) {
        Intent intent = new Intent(this, (Class<?>) FlagOneSuccess.class);
        FlagsOverview.f4479G = true;
    }
}
```
Here, the string entered by the user is compared against a decrypted value derived from `C0940k.m5620a("k3FElEG9lnoWbOateGhj5pX6QsXRNJKh///8Jxi8KXW7iDpk2xRxhQ==")`. Let's dissect what `C0940k.m5620a` does:
```java
public static String m5620a(String str) {
    if (m5622c(str)) {
        try {
            return new String(cipher.doFinal(decode));
        }
    } else {
        System.out.println("Not a string!");
    }
    return str;
}
```
This code utilizes a DES decryption method to decode the Base64 encoded string. Rather than manually attempting to reverse this, we can use **Frida**, a dynamic instrumentation toolkit, to hook into the method and retrieve the decrypted string.

To start with Frida on an Android emulator, you can follow the setup instructions [here](https://github.com/sam-mg/Dr01d_H4ckQu35t/tree/main/Frida%20Labs). This resource provides a comprehensive guide on how to install and use Frida, especially focusing on extracting information like the flag.

Below is the JavaScript code used for hooking into the decryption method:
```js
Java.perform(() => {
    const activity = Java.use('b3nac.injuredandroid.k');
    activity.a.implementation = function (string) {
        var res = this.a(string);
        send("The Flag: " + res);
        return res;
    }
});
```
Running this script with Frida will intercept the call to the decryption method and send the decrypted flag back to the Frida console.

Executing the script reveals the flag in the Frida output: `{This_Isn't_Where_I_Parked_My_Car}`.

When we enter this flag into the required field, the application proceeds, yielding the desired result.
![](ScreenShots%2FFlag%20Three%20-%20Resources%20%28Result%29.jpg)
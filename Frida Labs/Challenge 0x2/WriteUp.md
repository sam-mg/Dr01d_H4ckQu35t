# Challenge 0x2

Let's dive into the source code and break it down for easier understanding:
```java
public class MainActivity extends AppCompatActivity {
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle savedInstanceState) {
        f103t1 = (TextView) findViewById(C0497R.id.textview);
    }
    public static void get_flag(int a) {
        if (a == 4919) {
            try {
                SecretKeySpec secretKeySpec = new SecretKeySpec("HILLBILLWILLBINN".getBytes(), "AES");
                byte[] decryptedBytes = cipher.doFinal(Base64.decode("q7mBQegjhpfIAr0OgfLvH0t/D0Xi0ieG0vd+8ZVW+b4=", 0));
                f103t1.setText(decryptedText);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```
In the above code, the `get_flag` method is a static method that performs a specific action when passed the correct integer value, `4919`. The method decrypts a base64 encoded string using AES and sets the resulting text to a `TextView`. Notably, there is no direct invocation of `get_flag` from within `onCreate` or any other part of the code we have access to. Therefore, we need to hook into this method.

---
**Hooking `get_flag()`**  

By hooking into the `get_flag()` method, we can trigger the flag retrieval process. Here’s a JavaScript snippet using Frida to achieve this:
```js
Java.perform(() => {
    var Activity = Java.use('com.ad2001.frida0x2.MainActivity');
    Activity.get_flag(4919);
});
```
This script hooks into MainActivity and calls the `get_flag()` method with `4919` as an argument, triggering the method and setting the flag. 
![](Challenge0x01/ScreenShots/Result.jpg)

While there are alternative ways to retrieve the flag, such as decrypting the base64 string manually, the purpose here is to demonstrate the power of Frida in hooking and manipulating Android methods.

Happy hooking!
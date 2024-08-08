# Challenge 0x6

Let's dive into the source code and break it down for easier understanding:
```java
public class MainActivity extends AppCompatActivity {
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle savedInstanceState) {
        this.f103t1 = (TextView) findViewById(C0497R.id.textview);
    }
    public void get_flag(Checker A) throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
        if (1234 == A.num1 && 4321 == A.num2) {
            this.f103t1.setText(decrypted);
        }
    }
}
```
In this code, the `get_flag` method takes an instance of the `Checker` class as an argument. The method checks whether the `num1` and `num2` fields in the `Checker` instance have specific values (`1234` and `4321`, respectively). If both conditions are met, it sets the text of a `TextView` to a decrypted string.

The `Checker` class looks like this:
```js
public class Checker {
    int num1;
    int num2;
}
```

**To solve this challenge, we need to:**  
1. Create an instance of the `Checker` class.
2. Set the `num1` and `num2` fields to `1234` and `4321`, respectively.
3. Pass the modified `Checker` instance to the `get_flag` method of the `MainActivity`.  

Here’s how you can achieve this using Frida:
```js
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
```

Once you execute this, the `get_flag` method will be triggered with the correctly configured `Checker` instance, setting the decrypted text in the `TextView`.
![](ScreenShots/Result.jpg)

Happy hooking!
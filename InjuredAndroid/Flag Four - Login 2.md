# Flag Four - Login 2

Let's now look into the next level,`Flag Four - Login 2`.
![](ScreenShots%2FFlag%20Four%20-%20Login%202.jpg)

When we inspect the source code, we see the following:
```java
public final void submitFlag(View view) {
    EditText editText = (EditText) findViewById(R.id.editText2);
    C1843g.m8724d(editText, "editText2");
    String obj = editText.getText().toString();
    byte[] m5611a = new C0936g().m5611a();
    C1843g.m8724d(m5611a, "decoder.getData()");
    if (C1843g.m8721a(obj, new String(m5611a, C1874c.f6871a))) {
        Intent intent = new Intent(this, (Class<?>) FlagOneSuccess.class);
        new FlagsOverview().m5594I(true);
        new ApplicationC0939j().m5616b(this, "flagFourButtonColor", true);
        startActivity(intent);
    }
}
```

Here, we observe the following line:
```java
byte[] m5611a = new C0936g().m5611a();
```
When we look into this method, we find:
```java
private byte[] f4516a = Base64.decode("NF9vdmVyZG9uZV9vbWVsZXRz", 0);
public byte[] m5611a() {
    return this.f4516a;
}
```
This line decodes a Base64-encoded string. When we decode it, we obtain the specific text needed: `4_overdone_omelets`. Entering this text results in the following outcome:
![](ScreenShots/Flag%20Three%20-%20Resources%20(Result).jpg)

---
**Why is this happening?**  

The vulnerability exists because sensitive information is stored in a Base64-encoded string within the application. Base64 encoding is not encryption and can be easily decoded, exposing the sensitive information.

**How is this happening?**  

1. The `submitFlag` method retrieves the user input from the `EditText` field.
2. It then obtains a Base64-decoded byte array from the `m5611a` method in the `C0936g` class.
3. The byte array is converted to a string and compared with the user input to authenticate the flag.

**How can it be prevented?**  

To prevent this type of vulnerability, consider the following best practices:

1. **Avoid Hardcoding Sensitive Information:** Do not hardcode sensitive information or store it in an easily reversible format like Base64. Instead, retrieve such information securely at runtime.
2. **Use Secure Storage:** Store sensitive information using secure storage mechanisms provided by the platform, such as the Android Keystore system.
3. **Implement Stronger Authentication Mechanisms:** Use cryptographic methods to store and compare sensitive information securely. For example, use a secure hashing algorithm with salt.

---
By following these practices, you can significantly enhance the security of your application and protect it from potential security threats.
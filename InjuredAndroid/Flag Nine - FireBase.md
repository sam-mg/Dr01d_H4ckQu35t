# Flag Nine - FireBase

Let's now look into the next one, `Flag Nine - FireBase`.
![](ScreenShots%2FFlag%20Nine%20-%20FireBase.jpg)

Examining the source code of this activity, we find the following:
```java
public final void submitFlag(View view) {
    EditText editText = (EditText) findViewById(R.id.editText2);
    C1843g.m8724d(editText, "editText2");
    byte[] decode = Base64.decode(editText.getText().toString(), 0);
    C1843g.m8724d(decode, "decodedPost");
    Charset charset = StandardCharsets.UTF_8;
    C1843g.m8724d(charset, "StandardCharsets.UTF_8");
    this.f4431B.m7558b(new C0912b(new String(decode, charset)));
}
```
Additionally, we see the following piece of code in the same activity:
```java
private final String f4433x = "ZmxhZ3Mv";
```
Furthermore, the strings file contains:
```xml
<string name="firebase_database_url">https://injuredandroid.firebaseio.com</string>
```

By analyzing the code and the strings file, we can construct the correct Firebase URL:
```
https://injuredandroid.firebaseio.com/flags/.json
```
Navigating to this URL reveals the specific flag: `[nine!_flag]`

The application expects a Base64-encoded version of the flag to be entered. Decoding the given string, we get:
```
W25pbmUhX2ZsYWdd
```

Entering this encoded flag into the application yields the expected result:
![](ScreenShots/Flag%20Three%20-%20Resources%20(Result).jpg)
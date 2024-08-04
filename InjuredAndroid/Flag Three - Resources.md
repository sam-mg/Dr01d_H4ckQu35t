# Flag Three - Resources

Let's now examine the next level, `Flag Three - Resources`.
![](ScreenShots/Flag%20Three%20-%20Resources.jpg)

When we look at the source code of the activity, we find the following:
```java
public final void submitFlag(View view) {
    EditText editText = (EditText) findViewById(R.id.editText2);
    C1843g.m8724d(editText, "editText2");
    if (C1843g.m8721a(editText.getText().toString(), getString(R.string.cmVzb3VyY2VzX3lv))) {
        Intent intent = new Intent(this, (Class<?>) FlagOneSuccess.class);
        new FlagsOverview().m5597L(true);
        new ApplicationC0939j().m5616b(this, "flagThreeButtonColor", true);
        startActivity(intent);
    }
}
```

In the code, we notice the use of `R.string.cmVzb3VyY2VzX3lv`. This reference points to a string resource in the application's resources. By examining the string resources file, we can determine the required flag value.

Upon investigation, we find that the flag is `F1ag_thr33`. When we enter this value, we observe the following result:
![](ScreenShots/Flag%20Three%20-%20Resources%20(Result).jpg)

---
**Why is this happening?**  

The vulnerability exists because sensitive information, such as flags or passwords, is stored directly in the application's resource files. These files can be easily accessed and read by anyone with access to the application's APK or source code.

**How is this happening?**  

1. The activity retrieves a string resource using `getString(R.string.cmVzb3VyY2VzX3lv)`.
2. This string resource contains sensitive information (in this case, the flag value).
3. By examining the application's resources, an attacker can easily extract the flag value.

**How can it be prevented?**  

To prevent this type of vulnerability, consider the following best practices:

1. **Avoid Hardcoding Sensitive Information:** Do not store sensitive information in resource files or hardcode it in the application's source code. Instead, retrieve such information securely at runtime.
2. **Use Obfuscation:** Use code obfuscation techniques to make it harder for attackers to reverse-engineer your application and extract sensitive information.
3. **Implement Secure Storage:** Use Android's secure storage mechanisms, such as the Keystore system, to store sensitive information securely.

---
By following these practices, you can significantly reduce the risk of exposing sensitive information in your application and protect it from potential security threats.
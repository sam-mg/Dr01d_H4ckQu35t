# Flag One - Login

Let’s explore the next vulnerability, found in the "Flag One - Login" activity.  
![](ScreenShots/Flag%20One%20-%20Login.jpg)

When examining the Java code of this activity, we see the following:
```java
public final void submitFlag(View view) {
    EditText editText = (EditText) findViewById(R.id.editText2);
    C1843g.m8724d(editText, "editText2");
    if (C1843g.m8721a(editText.getText().toString(), "F1ag_0n3")) {
        Intent intent = new Intent(this, (Class<?>) FlagOneSuccess.class);
        new FlagsOverview().m5595J(true);
        new ApplicationC0939j().m5616b(this, "flagOneButtonColor", true);
        startActivity(intent);
    }
}
```

Here, we can see that the required text ("F1ag_0n3") is hard-coded and not encrypted. This presents a significant security flaw. When the correct text is entered, the application navigates to `FlagOneSuccess.class`.

---
**Why is this happening?**  

The vulnerability exists because the application directly compares user input with a plaintext string. This approach is insecure as it exposes the password to potential attackers who can easily retrieve and exploit it.

**How is this happening?**  

The submitFlag method retrieves the input from the EditText field.
It then directly compares the input with a hardcoded plaintext string "F1ag_0n3" using C1843g.m8721a.
If the input matches the string, the application grants access to the FlagOneSuccess.class activity.

**How can it be prevented?**  

To prevent this type of vulnerability, consider the following best practices:

1. **Hash Passwords:** Use a cryptographic hash function to store and compare passwords securely.
2. **Use Secure Comparisons:** Ensure that password comparisons are done using constant-time algorithms to prevent timing attacks.
3. **Implement Proper Authentication Mechanisms:** Use established libraries and frameworks for authentication and avoid implementing custom authentication logic.

---
By following these practices, you can significantly enhance the security of your authentication mechanisms and protect against vulnerabilities like this.
# Flag Seven - SQLITE

Let's now look into the next one, `Flag Seven - SQLITE`.
![](ScreenShots%2FFlag%20Seven%20-%20SQLITE.jpg)

Examining the source code of this activity, we find:
```java
public final void submitFlag(View view) {
    EditText editText = (EditText) findViewById(R.id.editText8);
    C1843g.m8724d(editText, "editText8");
    String obj = editText.getText().toString();
    EditText editText2 = (EditText) findViewById(R.id.editText7);
    C1843g.m8724d(editText2, "editText7");
    String obj2 = editText2.getText().toString();
    ApplicationC0939j applicationC0939j = new ApplicationC0939j();
    String m5617c = applicationC0939j.m5617c("flagSevenEncrypted", "");
    String m5617c2 = applicationC0939j.m5617c("flagSevenPasswordEncrypted", "");
    if (!C1843g.m8721a(obj, m5617c) || !C1843g.m8721a(obj2, m5617c2)) {
        Toast.makeText(this, "Try again! :D", 0).show();
        return;
    }
    FlagsOverview.f4480H = true;
    ApplicationC0939j applicationC0939j2 = new ApplicationC0939j();
    Context applicationContext = getApplicationContext();
    C1843g.m8724d(applicationContext, "applicationContext");
    applicationC0939j2.m5616b(applicationContext, "flagSevenButtonColor", true);
    m5572F();
}
```

Additionally, it is important to note that the table will be automatically deleted once we exit this activity. Therefore, we need to stay in this activity and carry out our work in the background.

Let's proceed with the shell commands to access the database:
```bash
adb shell
cd /data/data/b3nac.injuredandroid/databases
sqlite3 Thisisatest.db
```

Once inside the database, we can retrieve all the data with the following SQL command:
```sql
SELECT * FROM THISISATEST;
```
Executing this query returns:
```
1|The flag hash!|2ab96390c7dbe3439de74d0c9b0b1767
2|The flag is also a password!|9EEADi^^:?;FC652?5C@:5]7:C632D6:@]4@>^DB=:E6];D@?
```

Let's analyze these values:
1. `2ab96390c7dbe3439de74d0c9b0b1767`  - This appears to be an MD5 hash. Reversing it reveals the string `hunter2`.
2. `9EEADi^^:?;FC652?5C@:5]7:C632D6:@]4@>^DB=:E6];D@?` - This looks like ROT47 encryption. Decrypting it gives us the URL: `https://injuredandroid.firebaseio.com/sqlite.json`.
    Navigating to this URL provides us with the flag: `S3V3N_11`.
    
Entering these values into the respective fields grants us the desired result:
![](ScreenShots%2FFlag%20Seven%20-%20SQLITE%20%28Result%29.gif)

---
**How can it be prevented?**  
To prevent this type of vulnerability, consider the following best practices:
1. **Use Secure Storage:** Store sensitive data in secure storage mechanisms provided by the platform, such as the Android Keystore system.
2. **Restrict Access to Databases:** Implement strict access controls to ensure that only authorized components of the application can access the database.
3. **Sanitize Inputs:** Validate and sanitize all user inputs to prevent SQL injection attacks and other forms of data tampering.

---
By following these practices, you can significantly enhance the security of your application and protect it from potential security threats.
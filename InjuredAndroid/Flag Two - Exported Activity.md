# Flag Two - Exported Activity

Let's examine the next level, `Flag Two - Exported Activity`.  
![](ScreenShots/Flag%20Two%20-%20Exported%20Activity.jpg)

We know that to open an activity outside the context of an intent, we can use ADB (Android Debug Bridge). However, to do this, we need the activity name and the necessary permissions.

Let's inspect the `AndroidManifest.xml` file:
```xml
<activity
    android:name="b3nac.injuredandroid.b25lActivity"
    android:exported="true"/>
```

We can get the package name from the manifest itself. Using this information, our command to start the activity will be:
```bash
adb shell am start -n b3nac.injuredandroid/b3nac.injuredandroid.b25lActivity
```

Executing this command will launch the activity in our emulator:
![](ScreenShots/Flag%20Two%20-%20Exported%20Activity%20(Result).jpg)

---
**Why is this happening?**  

This vulnerability exists because the activity is marked as `exported="true"` in the manifest file. This configuration allows other applications and external processes to start the activity without any restrictions.

**How is this happening?**  

1. The `AndroidManifest.xml` file defines the activity with `android:exported="true"`.
2. This setting allows the activity to be launched by any external application or process, including ADB commands.
3. By knowing the package and activity name, an attacker can easily start the activity using an ADB command.

**How can it be prevented?**  

To prevent this type of vulnerability, consider the following best practices:

1. **Restrict Activity Access:** Set `android:exported` to `false` for activities that should not be accessible outside the application.
2. **Use Permissions:** If an activity must be exported, ensure it is protected by appropriate permissions.
3. **Validate Intents:** Implement checks within the activity to validate incoming intents and ensure they originate from trusted sources.

---
By following these practices, you can significantly reduce the risk of unauthorized access to your activities and protect your application from potential security threats.
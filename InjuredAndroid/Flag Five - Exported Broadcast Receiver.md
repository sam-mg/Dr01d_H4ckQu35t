# Flag Five - Exported Broadcast Receiver

Let's now look into the next flag, `Flag Five - Exported Broadcast Receiver`.  
When we access this activity, we are presented with a black screen and nothing else.  

To understand what's happening, let's examine the source code. There are two relevant pieces of code for this flag:
1. **FlagFiveActivity:**
    This activity links to the next one via the following line:
    ```java
    private FlagFiveReceiver f4426x = new FlagFiveReceiver();
    ```
2. **FlagFiveReciever:**
    Let's delve into the `FlagFiveReceiver` code:
    ```java
    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        String str;
        int i;
        C1843g.m8725e(context, "context");
        C1843g.m8725e(intent, "intent");
        ApplicationC0939j.f4523j.m5619a(context);
        int i2 = f4427a;
        if (i2 == 0) {
            StringBuilder sb = new StringBuilder();
            sb.append(C1877f.m8786e("\n    Action: " + intent.getAction() + "\n\n    "));
            sb.append(C1877f.m8786e("\n    URI: " + intent.toUri(1) + "\n\n    "));
            str = sb.toString();
            C1843g.m8724d(str, "sb.toString()");
            Log.d("DUDE!:", str);
        } else {
            str = "Keep trying!";
            if (i2 != 1) {
                if (i2 != 2) {
                    Toast.makeText(context, "Keep trying!", 1).show();
                    return;
                }
                String str2 = "You are a winner " + C0940k.m5620a("Zkdlt0WwtLQ=");
                new FlagsOverview().m5593H(true);
                new ApplicationC0939j().m5616b(context, "flagFiveButtonColor", true);
                Toast.makeText(context, str2, 1).show();
                i = 0;
                f4427a = i;
            }
        }
        Toast.makeText(context, str, 1).show();
        i = f4427a + 1;
        f4427a = i;
    }
    ```
    The receiver's code handles the broadcast and takes certain actions based on the value of `f4427a`.

By opening the flag five activity thrice, we trigger the code that eventually displays the flag: `F1V3!`. This process involves sending a custom intent and interacting with a broadcast receiver.

---
**Why is this happening?**  
This vulnerability exists because the broadcast receiver is exported and handles intents in a way that allows repeated triggers to reveal sensitive information. The receiver's actions depend on an internal counter (`f4427a`), which can be manipulated by repeatedly sending intents.

**How is this happening?**  
1. The `FlagFiveReceiver` is registered to listen for specific intents.
2. Each time an intent is received, the `onReceive` method processes the intent and increments the counter `f4427a`.
3. On the third intent, the receiver reveals the flag by showing a toast message with the decoded flag string.

**How can it be prevented?**  
To prevent this type of vulnerability, consider the following best practices:
1. **Restrict Broadcast Receivers:** Ensure that broadcast receivers are not exported unless absolutely necessary. This prevents external apps from sending arbitrary intents to them.
2. **Use Permissions:** If a broadcast receiver must be exported, protect it with appropriate permissions.
3. **Validate Intents:** Validate the incoming intents and their actions within the onReceive method to ensure they are coming from trusted sources and contain expected data.
4. **Limit Sensitive Information Exposure:** Avoid revealing sensitive information based on simple triggers like a counter. Implement more secure and complex validation mechanisms.

---
By following these practices, you can significantly reduce the risk of unauthorized access to your broadcast receivers and protect your application from potential security threats.
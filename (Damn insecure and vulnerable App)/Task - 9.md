# Task - 9

Now, let's move on to Task Nine.  
Upon reviewing `MainActivity.class`, we find it leading us to `AccessControl1Activity.class`.  
![Untitled](DIVA%20ScreenShots/Level%20-%209%20(AccessControl1Activity).png)

Here, we see that the activity leads to `jakhar.aseem.diva.action.VIEW_CREDS`. When we look into this in the Manifest, we find it redirects to an activity.
![Untitled](DIVA%20ScreenShots/Level%20-%209%20(Manifest).png)

From this, we see it leads to `APICredsActivity.class`. When we navigate there, we find these items:
![Untitled](DIVA%20ScreenShots/Level%20-%209%20(APICredsActivity).png)

This displays the same information as shown in the screenshot. However, we need to access this page from outside the app without going through all the button clicks.

We know that using ADB, we can open any specific activity that has `exported="true"`. Using the following command, we can invoke the activity:
```bash
adb shell am start jakhar.aseem.diva/.APICredsActivity
```
By doing this, we can call the specific activity without any button clicks.

The issue here is that having a specific activity exported as `true` makes it callable by any other app, not just the intended app. This exposes the activity to potential misuse, allowing unauthorized access to sensitive information and compromising the app's security. Proper access controls should be implemented to restrict access to such activities.
# Task - 13

Let's explore Task Thirteen.  
In `MainActivity.class`, we can trace a path to `InputValidation3Activity.class`.  
![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(InputValidation3Activity).png)

Here, you'll notice a difference. In the same file as before, there were two texts, but now you can see the dots connecting them.
![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(DivaJni).png)

Next, let's return to IDA for further examination. Since we've already addressed a similar situation in the previous level, we can confirm that entering the required string into the app works as expected.
![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(Access_Granted).png)

However, our current objective is different—we need to crash this activity to halt its operation. After analyzing the code, it's clear that there is no input validation implemented. Our strategy is to force the app to crash by entering an excessively long string, such as `abcdefghijklmnopqrtuvwxyz`. The initial attempt didn’t succeed, so let's double the length and try again.
<p align="center"> <img src="DIVA%20ScreenShots/Level%20-%2013%20(App_Crash).gif"/></p>

With the extended input, the app crashes. The next step is to identify the cause. By examining the `logcat`, we can see that the activity becomes unresponsive and crashes due to the extended input.

This demonstrates how the lack of proper input validation can lead to vulnerabilities, allowing an attacker to cause the app to crash and disrupt its normal operation.
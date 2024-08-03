# Injured Android

Injured Android is a challenge app designed to expose common vulnerabilities found in Android applications. With a series of 19 tasks, this app serves as a hands-on tool for learning about app security and vulnerability exploitation.

> **Objective:** The purpose of this app is to educate developers and security enthusiasts on identifying and mitigating vulnerabilities resulting from insecure coding practices.

## Requirements:

You can obtain the APK from the [GitHub Repository](https://github.com/sam-mg/Dr01d_H4ckQu35t/InjuredAndroid/Files/) or directly from the [Play Store](https://play.google.com/store/apps/details?id=b3nac.injuredandroid). 

### Accessing the Source Code:

1. **Using `jadx`**:
   - Download and install `jadx` to decompile the APK and examine the source code.

2. **From GitHub**:
   - Alternatively, the source code is available on the [GitHub Repository](https://github.com/B3nac/InjuredAndroid/tree/master/InjuredAndroid).

### Tools Installation:

Ensure you have the following tools installed:

- **Android Emulator**: Required to run the APK.
- **ADB**: Android Debug Bridge for interacting with the emulator.
- **jadx**: For decompiling the APK.

To install ADB and jadx, use the following commands:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install adb
brew install jadx
```

### Prerequisites:

- Basic knowledge of `adb` commands.

## Setup:

1. **Install the APK on your emulator:**

    ```bash
    adb install Injured_Android.apk
    ```

2. **Launch the app** on your emulator and start working on the challenges.

---

## Write-Ups

In this directory, you will find detailed write-ups for each of the 19 tasks. These documents outline the approach I took to solve each challenge and provide insights into the vulnerabilities and their exploitation. 

Feel free to attempt solving the challenges on your own first. If you encounter difficulties, consult my write-ups for guidance and solutions.

---

Happy learning and exploring! If you have any questions or need further assistance, feel free to reach out.
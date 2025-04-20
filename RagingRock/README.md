# RagingRock

This directory contains my solutions for the RagingRock Android App Reverse Engineering challenges. You can explore the challenges at [RagingRock Android App RE Challenge](https://www.ragingrock.com/AndroidAppRE/).

The creators have designed a series of Android APK challenges, packaged within `.vmdk` or `.ova` virtual machine files. These files are accessible to participants for solving the challenges. Unfortunately, `Mac` users like me face compatibility issues, but you can grab those files from [here](./Files/).

## Workflow
```mermaid
gitGraph LR:
    commit tag: "RagingRock" id: "By Maddie Stone"
    branch "RagingRock"
    checkout "RagingRock"
    commit id: "Introduction"
    commit id: "Android Application Fundamentals"
    commit id: "Beginning RE with jadx"
    commit id: "Reverse Engineer the DEX"
    commit id: "Find the Vulnerability in the Adups OTA Application"
    commit id: "Arbitrary Command Execution Take 2"
    commit id: "Find the Address of the Native Function"
    commit id: "Find and Reverse the Native Function"
    commit id: "String Deobfuscation"
    checkout main
    merge "RagingRock"
    commit id: "Make Write-ups"
```

Happy learning!
# InsecureShop

This directory contains my write-ups for the InsecureShop Android application, which has been intentionally designed to be insecure. You can download the APK from the [GitHub repository](https://github.com/hax0rgb/InsecureShop) or directly from [here](./Files/InsecureShop.apk).

## Workflow
```mermaid
gitGraph LR:
  commit tag: "InsecureShop" id: "By Gaurang Bhatnagar & Tylous"
  branch "InsecureShop"
  checkout "InsecureShop"
  commit id: "Insufficient URL Validation"
  commit id: "Weak Host Validation Check"
  commit id: "Intent Redirection (Access to Protected Components)"
  commit id: "Unprotected Data URIs"
  commit id: "Theft of Arbitrary Files from LocalStorage"
  commit id: "Insecure Broadcast Receiver"
  commit id: "AWS Cognito Misconfiguration"
  commit id: "Insecure Use of FilePaths in FileProvider"
  commit id: "Insecure Implementation of SetResult in Exported Activity"
  commit id: "Use of Implicit Intent to Send a Broadcast with Sensitive Data"
  commit id: "Intercepting Implicit Intent to Load Arbitrary URL"
  commit id: "Insecure Content Provider"
  checkout main
  merge "InsecureShop"
  commit id: "Make Write-Ups"
```

Happy learning!
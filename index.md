---
title: OnlyKey Docs
keywords: homepage
tags: [getting_started]
sidebar: mydoc_sidebar
permalink: index.html
summary: Documentation includes -
---

## Get Started With OnlyKey

### 1. Start Here

The first step in getting started with OnlyKey is to follow the [steps here ](https://crp.to/okstart).

This will ensure you stay up to date on important OnlyKey updates.

### 2. OnlyKey Configuration

The users's guide provides step-by-step instructions for configuring the OnlyKey. The user's guide is available online here [Online User's Guide](https://docs.google.com/document/d/196ZUQQA0P9QKROT6K6pCtvPV55M9XRLXppPgEe_5JvI/pub) as well as downloadable PDF format here [User's Guide PDF](https://drive.google.com/open?id=0B_Bb-hXCnpYqb0ZDVFFRd1VLTE0).

### 3. OnlyKey Support

If you have specific questions about the OnlyKey check out the [OnlyKey Frequently Asked Questions](https://docs.crp.to/faq.html) first.

If you are having issues that are not addressed in the User's Guide or FAQs check out the [OnlyKey Support forum](https://groups.google.com/forum/#!forum/onlykey). If you are having a new issue not already mentioned in the forum this is the place to ask for help.

### 4. OnlyKey Apps and Software

There are several apps and software projects that are compatible with OnlyKey. They basically fall into three categories.


**1 - Software that runs on the OnlyKey itself**

**2 - Software that is used to configure the OnlyKey**

**3 - Software that supports OnlyKey functionality**



**Software that runs on the OnlyKey itself**

[OnlyKey Firmware](https://docs.crp.to/firmware.html) - This is the software that runs on the OnlyKey itself. The OnlyKey firmware is open source and can be loaded onto the OnlyKey by following the instructions in the User's Guide.

The firmware releases can be found [here.](https://github.com/trustcrypto/OnlyKey-Firmware/releases)
The firmware supporting libraries can be found [here.](https://github.com/trustcrypto/libraries) 


**Software that is used to configure the OnlyKey**

[OnlyKey Chrome App](https://docs.crp.to/app.html) - This is the primary and recommended app to set up and configure OnlyKey. This App requires Google Chrome or open source Chromium browser and has been tested on Windows, Mac OS, Linux, and Chrome OS.

[OnlyKey Python App](https://docs.crp.to/command-line.html) - This is a command line tool targeted towards more advanced users. This can be used for set up, configuration, and testing. This app is open source and has been tested on Windows, Mac OS, and Linux.


**Software that supports OnlyKey functionality**

[OnlyKey SSH/GPG Agent](https://docs.crp.to/onlykey-agent.html) - This is essentially middleware that lets you use OnlyKey as a hardware SSH/GPG device (GPG not supported yet). OnlyKey Python App is required to use this agent.

[OnlyKey PGP Message Tool](https://docs.crp.to/command-line.html) - The PGP Message Tool is currently included with the OnlyKey Python App and permits OpenPGP decryption and signing. This allows private keys to remain safely stored on OnlyKey and requires no special drivers.

OnlyKey Android App - We are currently working on an Android app that supports U2F and Google Authenticator on Android. This app is working but has not been released for public use yet.

OnlyKey Web App - We are currently working on a web app that supports Keybase.io for encrypted email and chat (OpenPGP via browser). This web app will support Google Chrome/Chromium as well as Firefox. This app is working but has not been released for public use yet.

{% include links.html %}

---
title: International Travel Edition Guide
tags: [OnlyKey, International Travel Edition, Plausible Deniability]
keywords: OnlyKey, International Travel Edition, Plausible Deniability
last_updated: Nov, 6, 2018
summary: Follow this guide to use the International Travel Edition OnlyKey
sidebar: mydoc_sidebar
permalink: ite.html
folder: mydoc
---

## What is the International Travel Edition?

This version of OnlyKey firmware is designed to meet all international requirements in regards to encryption. It does this by not utilizing encryption at all. Because this version does not utilize encryption the device can be used in areas where encryption is forbidden and/or there are mandatory key disclosure requirements. This is particularly useful for international travel where the traveler would like to have secure portable access to accounts.

## How are accounts secure without encryption?

Even though there is no encryption, there is physical security of the accounts on the OnlyKey. This is accomplished through locking the flash memory and requiring a PIN code to access accounts. The accounts stored on the device can only be accessed with the correct PIN. Entering 10 incorrect PINs will completely wipe the device. Unlike a device like a flash/jump drive, the OnlyKey is locked so that there is no way of reading the data stored on the device.

## Limited features

The International Travel Edition has a limited feature set, including:

- Storage of 12 slots, each slot may contain:
  - Label - A reminder of what account is stored
  - URL - The site to log into may be automatically typed in the browser address bar
  - Username
  - Password
  - 2FA - Google Authenticator OTP (TOTP) is supported

- Firmware loading through the app - You can switch back and forth from the International Travel Edition and Standard edition firmware through the OnlyKey app.

- Preferences
  - Type Speed
  - Keyboard layout (International keyboard profiles are helpful for international travel)
  - Wipe mode
  - Inactivity lockout period

Features not included in the International Travel Edition OnlyKey that are available in the Standard Edition OnlyKey:
- Secure backup and restore
- FIDO U2F / Yubikey OTP
- SSH/OpenPGP
- Second Profile

## Switch to Standard Edition Firmware

It is easy to switch between the International Travel Edition firmware and the Standard Edition firmware. Keep in mind that switching from the Standard Edition to the International Travel Edition will disable features not available such as the second profile. In order to switch to Standard Edition firmware ensure that your International Travel Edition OnlyKey is in a factory default state and select [Load Firmware] in the OnlyKey App.

- Download the [latest firmware](https://github.com/trustcrypto/OnlyKey-Firmware/releases/latest/)
  - [OnlyKey Standard Edition firmware](https://github.com/trustcrypto/trustcrypto.github.io/raw/master/Signed_OnlyKey_2_1_0_STD.txt)
  - [OnlyKey International Travel Edition firmware](https://github.com/trustcrypto/trustcrypto.github.io/raw/master/Signed_OnlyKey_2_1_0_IN_TRVL.txt)
- Select the [Load Firmware] button as shown below and follow the instructions in the app to load firmware

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite6.png)

{% include tip.html content="***Factory Default?***<br><br>
To perform a factory default you have two options:
<br>
<br>
**Method #1** - Enter your self-destruct PIN.
<br>
<br>
**Method #2** - Enter 10 incorrect PINs. You will notice that after entering 3 incorrect PINs your OnlyKey is steadily blinking red. This is an intentional safeguard so that your OnlyKey will not be inadvertently wiped by repeatedly pressing buttons. You must remove and reinsert your OnlyKey and enter 3 more incorrect PINs. Repeat this until 10 incorrect PINs have been entered. The device will then have a solid green light on that indicates that it is in a factory default state." %}

## Setup guide

In order to setup an OnlyKey with the International Travel Edition first ensure you have loaded the International Travel Edition firmware and you have installed the OnlyKey app.

Step 1 - Select [Next] to get started.
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite1.png)

Step 2 - Enter a PIN code, check the disclaimer box, and select [Next].
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite2.png)

Step 3 - Re-enter PIN code, and select [Next].

Step 4 - Select [I don't want a second profile, skip this step]
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite4.png)

Step 5 - If you wish to set a self-destruct PIN enter a PIN code, check the disclaimer box, and select [Next].
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite5.png)

Step 6 - Re-enter PIN code, and select [Next].

Your device is now set up, remove and reinsert OnlyKey to set up accounts.

### Set Wipe Mode

The wipe mode setting determines what is wiped when a factory default occurs. The default setting is to just wipe the sensitive data, there is also the option to do a "Full Wipe" which wipes sensitive data and firmware. If keeping the type and version of firmware that is loaded confidential is desired, go to preferences in the OnlyKey app and set the wipe mode of your OnlyKey to "Full Wipe". More information on this setting is available here - [Wipe Mode Feature](https://docs.crp.to/usersguide.html#configurable-wipe-mode).

{% include links.html %}

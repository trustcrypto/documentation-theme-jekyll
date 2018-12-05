---
title: Plausible Deniability Setup Guide
tags: [OnlyKey, International Travel Edition, Plausible Deniability]
keywords: OnlyKey, International Travel Edition, Plausible Deniability
last_updated: Dec, 5, 2018
summary: Follow this guide to use the plausible deniability feature of OnlyKey
sidebar: mydoc_sidebar
permalink: pdguide.html
folder: mydoc
---

## About Plausible Deniability

General information on OnlyKey plausible deniability mode is available [here](https://docs.crp.to/features.html#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware).

General information on the International Travel Edition OnlyKey firmware is available [here](https://docs.crp.to/ite.html).

### Steps to Setup Plausible Deniability

{% include note.html content="Before getting started make sure you have OnlyKey firmware Beta 7 or later and the OnlyKey app is installed. OnlyKey must be in a factory default state to set up plausible deniability." %}

{% include callout.html content="**Step 1.** Select [Next] to get started." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite1.png)

{% include callout.html content="**Step 2.** Enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite2.png)

{% include callout.html content="**Step 3.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 4.** Enter a PIN code for second profile, check the disclaimer box, check the Plausible Deniability Profile radio button, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite4.png)

{% include callout.html content="**Step 5.** If you wish to set a self-destruct PIN enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite5.png)

{% include callout.html content="**Step 6.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 7.** Follow the instructions to enter a Backup Passphrase and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup7-2.png)

{% include callout.html content="**Step 8.** If you have an OnlyKey backup to restore, select [Choose File] and select your OnlyKey backup file and then select [Next] to load it onto your OnlyKey. If you do not have a backup just select [Next] to complete the setup." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup10.png)

{% include note.html content="Since plausible deniability mode does not support encryption, if accounts in your second profile of your backup have U2F or Yubikey 2FA set this will not be restored. TOTP mode will work in plausible deniability mode." %}

{% include callout.html content="**Step 9.** Your device will now automatically reboot. Enter the PIN for you first profile to unlock OnlyKey." type="default" %}

{% include callout.html content="**Step 10.** Select [Preferences] from the top menu and then click [Set Wipe Mode]. Full wipe will completely erase both the OnlyKey data and firmware in the event of a factory default. This ensures that after a factory default occurs there is not a way of determining what edition of firmware had been previously set on the device. This also requires re-loading the firmware through the OnlyKey app." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/pref.png)

{% include note.html content="This ensures that after a factory default occurs there is not a way of determining what edition of firmware had been previously loaded on the device. This also requires re-loading the firmware through the OnlyKey app." %}

{% include links.html %}

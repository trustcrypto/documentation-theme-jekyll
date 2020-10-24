---
title: Plausible Deniability Setup Guide
tags: [OnlyKey, International Travel Edition, Plausible Deniability]
keywords: OnlyKey, International Travel Edition, Plausible Deniability
last_updated: Oct, 5, 2020
summary: Follow this guide to use the plausible deniability feature of OnlyKey
sidebar: mydoc_sidebar
permalink: pdguide.html
folder: mydoc
---

## About Plausible Deniability

Before setting up plausible deniability read the International Travel Edition Guide [here](https://docs.crp.to/ite.html). Once enabled, an OnlyKey with the Standard Edition firmware that is in plausible deniability mode is identical in functionality to an OnlyKey with the International Travel Edition (ITE) firmware. Since the ITE firmware has only one profile and does not utilize encryption a user may if forced to unlock their OnlyKey, unlock the plausible deniability profile. It is then plausible that the user's OnlyKey only has this one profile (the standard profile essentially becomes a hidden profile), and it is plausible that the user is not in possession of an encryption device (useful where encryption my be banned as the ITE firmware is encryption free).

## Steps to Setup Plausible Deniability

{% include note.html content="Before getting started make sure you have OnlyKey firmware Beta 7 or later and the OnlyKey app is installed. OnlyKey must be in a factory default state to set up a plausible deniability profile." %}

{% include callout.html content="**Step 1.** Select the Advanced checkbox and then select [Next] to get started." type="default" %}

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

{% include callout.html content="**Step 10.** Select [Preferences] from the top menu and then click [Set Wipe Mode]. Full wipe will completely erase both the OnlyKey data and firmware in the event of a factory default. This is an important step as if this is not set it is possible to determine which firmware edition is loaded after doing a factory default, more information [here](https://docs.crp.to/usersguide.html#configurable-wipe-mode)" type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/pref.png)

## Plausible Deniability FAQ

Q - Is it believable that my OnlyKey only has one profile (only 12 slots used)?<br>
A - We sell quite a few [International Travel Edition (ITE) Onlykeys](https://onlykey.io/products/onlykey-international-travel-edition-w-stealth-black-case?variant=8661476737068) so yes it is believable that you are using one of these. It is also believable that even if you purchased a standard OnlyKey you then followed the guide [here](https://docs.crp.to/ite.html) to load the ITE firmware in order to prepare for traveling. The ITE firmware is made for use in places where strong encryption may be controlled or banned.

Q - Is having wipe mode set to "Full Wipe" an indicator that device is using plausible deniability?<br>
A - We recommend that all users desiring the highest level of security enable full wipe. This is described in the user's guide and in the [International Travel Edition Guide](https://docs.crp.to/ite.html) as it ensures that no data or meta data such as what version of firmware was loaded is available to an adversary.

Q - Why not just give an adversary your self-destruct PIN?<br>
A - If you are not concerned with plausible deniability then yes the self-destruct pin would be fine. The adversary would obviously know that this was intentional.

Q - Wouldn't it be possible for an adversary to brute force the unknown primary profile PIN by trying 9 pins and then entering the known secondary profile pin?<br>
A - When using a plausible deniability profile there is a counter that counts how many failed login attempts since the last primary profile login. You have a maximum of 20 failed attempts since the last successful login to the primary profile. Once that is reached the primary profile hash is deleted, essentially the primary profile is gone forever.

{% include warning.html content="This means if you have a plausible deniability profile you have to occasionally log into your standard profile. If you use the plausible deniability profile 20 times in a row the standard profile will no longer be accessible." %}

{% include links.html %}

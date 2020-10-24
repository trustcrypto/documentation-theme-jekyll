---
title: Upgrading Firmware
tags: [OnlyKey, Firmware, Upgrade]
keywords: OnlyKey, Firmware, Upgrade
last_updated: Oct, 19, 2020
summary: Follow this guide to upgrade firmware
sidebar: mydoc_sidebar
permalink: upgradeguide.html
folder: mydoc
---


We are pleased to announce that the latest and greatest OnlyKey software is now available! This release includes a new, easier to use desktop app for Windows/Mac/Linux to be used in conjunction with the latest OnlyKey firmware.

## Why Upgrade?

This release has a lot of improvements and new features. Here is the short list of new features in this release:

- [OnlyKey GPG agent support](https://docs.crp.to/onlykey-agent.html)
- [WebCrypt 3.0 support](https://docs.crp.to/webcrypt.html)
- Enhanced FIDO2 support (improved usability and ability to manage individual FIDO2 resident keys)
- [Sysadmin mode](https://docs.crp.to/usersguide.html#sysadmin-mode) - SysAdmin mode permits OnlyKey to type almost any combination of characters such as Ctrl-Alt-Del, then enter usernames/passwords or system commands.
- Primary Profile and Secondary Profile LED Color - OnlyKey supports a primary and secondary profile, switching between the two is now even easier. Hold down button #3 for 5 seconds to lock OnlyKey to switch profiles. Recognizing which profile you are logged into is now easier with profile colors, OnlyKey has Green light for Primary profile and Blue light for Secondary profile.
- Customizable HMAC Keys - By default HMAC keys are random, these can now be customized for HMAC challenge-response. This feature is used for things like [KeePassXC](https://docs.crp.to/usersguide.html#keepassxc) support.
- Improved OnlyKey Agent SSH support - OnlyKey SSH agent now supports both derived keys and stored keys for users who wish to use a single key to log into multiple servers. PGP (RSA and ECC) key import support will be added in our next OnlyKey SSH agent release. This allows users to import existing keys to OnlyKey for secure SSH. Alternatively, OpenSSH supports OnlyKey — read more about that [here](https://docs.crp.to/openssh.html).

## Before Upgrading

{% include note.html content="If you are a new OnlyKey user skip this section and head over to the [User's Guide](https://docs.crp.to/usersguide.html#onlykey-setup) to get started." %}

{% include callout.html content="**Backup OnlyKey** - It is always a good idea to create a backup prior to upgrading. Do this by going to the Backup/Restore tab in the OnlyKey app. Ensure you have a copy of your backup key/passphrase ([User Guide Backup Instructions here](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere))." type="default" %}

{% include warning.html content="This firmware release adds enhanced support for FIDO2 (WebAuthn) resident keys. If you have any resident keys they will be wiped during upgrade and must be reloaded by restoring backup file. This only applies to FIDO2 resident keys which are not widely supported yet, this does not apply to FIDO U2F (When security key flashed blue to be used as only 2nd factor) which does not require restoring backup. While most users do not use resident keys we recommend to keep a copy of the backup from the previous step." %}

## Steps to Upgrade

{% include callout.html content="**Step 1.** **Upgrade OnlyKey desktop app** - Follow instructions [here](https://docs.crp.to/usersguide.html#app-desktop) to install the new OnlyKey app." type="default" %}

{% include callout.html content="**Step 2.** **Upgrade OnlyKey firmware** - Follow instructions [here](#loading-onlykey-firmware) to upgrade firmware on the OnlyKey" type="default" %}

{% include note.html content="onlykey-agent users, make sure to install the latest version of onlykey-agent with `$pip uninstall onlykey onlykey-agent` and `$pip3 install onlykey-agent`. Python 3 is required." %}

### Steps to Upgrade OnlyKey firmware {#loading-onlykey-firmware}

### Download Firmware

There is a tab named [Firmware] in the app. This may be used to load the latest firmware onto OnlyKey directly through the OnlyKey app.

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/newfeature2.png)

- Download [OnlyKey Standard Edition firmware](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/Signed_OnlyKey_2_1_0_STD.txt)
- Go to the [Firmware] tab in the app
- Follow the instructions in the app to load firmware

{% include note.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>Signed_OnlyKey_2_1_0_STD.txt SHA 256 checksum:<br>
c4c2fd05c89fa164dae069c57deea78f2adc665c69e4e671e7483c2658339c9a" %}

<!---
- Download [OnlyKey Standard Edition firmware](https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v2.1.0-prod/Signed_OnlyKey_2_1_0_STD.txt)
- Go to the [Firmware] tab in the app
- Follow the instructions in the app to load firmware

For more information on the latest firmware release [here](https://github.com/trustcrypto/OnlyKey-Firmware/releases/latest/)
-->

{% include links.html %}

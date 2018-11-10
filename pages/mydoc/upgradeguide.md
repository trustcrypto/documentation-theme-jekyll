---
title: Upgrading Firmware From Beta6 to Beta7
tags: [OnlyKey, Firmware, Upgrade]
keywords: OnlyKey, Firmware, Upgrade
last_updated: Oct, 31, 2018
summary: Follow this guide to upgrade firmware from Beta6 to Beta7
sidebar: mydoc_sidebar
permalink: upgradeguide.html
folder: mydoc
---

## Why Upgrade?

This release has a lot of improvements, most notably after upgrading your OnlyKey you can load future updates directly in the app without the need to backup and restore. Here is the short list of improvements in this release:

- Better touch sense on OnlyKey buttons using automatic touch sense calibration.
- Backup Passphrase support - Backup's may be securely encrypted with a passphrase.
- Two profile support - By setting two PINs you can have two profiles to store up to 24 accounts.
- Automatic firmware and app update notifications - The OnlyKey app can now let you know when there are updates available.
- Seamless firmware upgrades - Signed firmware can now be loaded directly through the app without wiping account data (thanks to our new blockchain bootloader).
- Better FIDO U2F support

## Steps to Upgrade

{% include note.html content="If you are a new OnlyKey user just complete steps 2 and 3 below as you won't have anything to backup/restore. Then head over to the [User's Guide](https://docs.crp.to/usersguide.html#onlykey-setup) to get started." %}

{% include callout.html content="**Step 1.** **Backup OnlyKey** - Create a backup of your OnlyKey by going to the Backup/Restore tab in the OnlyKey app. Ensure you have a copy of your backup key ([User Guide Backup Instructions here](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere))." type="default" %}

{% include callout.html content="**Step 2.** **Upgrade OnlyKey firmware** - Follow instructions [here](#loading-onlykey-firmware) to upgrade firmware on the OnlyKey" type="default" %}

{% include callout.html content="**Step 3.** **Upgrade OnlyKey desktop app** - Follow instructions [here](#app-desktop) to install the new OnlyKey app." type="default" %}

{% include callout.html content="**Step 4.** **Setup OnlyKey** - Follow instructions [here](#onlykey-setup) to setup OnlyKey and restore from backup" type="default" %}

{% include callout.html content="**Step 4.** **Check out the new features [here](#new-features)**" type="default" %}

### Steps to Upgrade OnlyKey firmware {#loading-onlykey-firmware}

**Before Getting Started**

{% include warning.html content="Legacy firmware loading wipes all data from OnlyKey. Be sure to have a backup of OnlyKey data and the backup key before loading firmware." %}


{% include callout.html content="**Step 1.**  Insert OnlyKey into USB port" type="default" %}
{% include callout.html content="**Step 2.**  Download and install [Teensy Loader](https://www.pjrc.com/teensy/loader.html)" type="default" %}
{% include callout.html content="**Step 3.**  Determine which version of OnlyKey you have and download firmware below" type="default" %}

{% include image.html file="image25.jpg" max-width="285" %}

<table>
  <tr>
   <td>OnlyKey Color (Has a square LED)
   </td>
   <td>OnlyKey Original (Has text "LED" visible)
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.7/OnlyKey_Beta7_STD_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.7/OnlyKey_Beta7_STD_Original.cpp.hex">here</a>
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.7/OnlyKey_Beta7_IN_TRVL_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.7/OnlyKey_Beta7_IN_TRVL_Original.cpp.hex">here</a>
   </td>
  </tr>
</table>


{% include callout.html content="**Step 4.** You can ensure the integrity of your downloaded firmware by verifying the checksum" type="default" %}

<table>
  <tr>
   <td>
File Name
   </td>
   <td>SHA 256 Checksums
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta7_STD_Color.cpp.hex
   </td>
   <td>572912a48b3d2f56ca87aa1b72b58a87ffdf33c372fc1229eef968bc773fcc0e
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta7_STD_Original.cpp.hex
   </td>
   <td>ab42a2d6e2630ada1050a1b7835b1dd06c08c8db40cc3004efe7e483bb89c1a1
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta7_IN_TRVL_Color.cpp.hex
   </td>
   <td>c9bda251ac22d9228de035d95bb9d57b0909fb432af7057c2df816b4049ca345
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta7_IN_TRVL_Original.cpp.hex
   </td>
   <td>fd567d88f073e10cddf72cf028d9073d5f379cb026383928f16bdda49b37c1ba
   </td>
  </tr>
</table>


{% include tip.html content="To do this in Windows open a command prompt and type 'certUtil -hashfile pathToFileToCheck SHA256'. To do this in Linux open a terminal and type 'sha256sum pathToFileToCheck'. Where pathToFileToCheck is replaced with the path of the file you are checking." %}

{% include callout.html content="**Step 5.**  In Teensy Loader select File -> Open HEX File. Then select the firmware you downloaded and click open." type="default" %}
{% include callout.html content="**Step 6.**  Now the firmware should appear at the bottom of the Teensy Loader application." type="default" %}

{% include image.html file="image67.png" max-width="213" %}

{% include note.html content="If a message prompts that 'HEX file is too large' ensure that your OnlyKey is plugged in." %}

{% include callout.html content="**Step 7.**  In order to enable the OnlyKey to upload the new firmware a jumper (Paperclip, aluminum foil etc) must make contact between the two small copper color circles shown while the OnlyKey is plugged into the USB port." type="default" %}

{% include tip.html content="If your OnlyKey has a case on it you can just slip the two corners out of the case without completely removing the case." %}

{% include image.html file="image16.png" %}

{% include callout.html content="**Step 8.**  With the Teensy Loader in the foreground, you should now see the Teensy Loader progress bar and then a reboot complete appear in the Teensy Loader which indicates that the firmware has loaded successfully." type="default" %}

{% include image.html file="image48.png" max-width="200" %}

{% include image.html file="image2.png" max-width="202" %}

**Under The Hood** - What actually happens when you load the firmware is that a mass erase is completed first. What this means is that all data is completely wiped, and then the new firmware is loaded.


### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0_amd64.deb)

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 486a5f8c8da82dfdf57dbe76b3343274c4e6bea4294db789b7c258788d353234<br>Windows SHA 256 CHECKSUM: af331256d79ae7d8aa522072ab35724c29cb7a3c83b25d61ccd7067ef4c8612f<br>Linux SHA 256 CHECKSUM: 4638ce8b21c66b6f414d937d08ba01917db3d20b050630e6b456c338ba1c9e06<br> [ **GPG Public Key**](https://keybase.io/trustcrypto/pgp_keys.asc)" %}


### Steps to Setup OnlyKey {#onlykey-setup}

Now that the new OnlyKey app and firmware are installed its time to setup OnlyKey.

{% include callout.html content="**Step 1.** Select [Next] to get started." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite1.png)

{% include callout.html content="**Step 2.** Enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite2.png)

{% include callout.html content="**Step 3.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 4.** Enter a PIN code for second profile, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite4.png)

{% include callout.html content="**Step 5.** If you wish to set a self-destruct PIN enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite5.png)

{% include callout.html content="**Step 6.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 7.** Select [Use PGP Key instead of passphrase]" type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup7.png)

{% include callout.html content="**Step 8.** With slot 1 selected, paste OpenPGP RSA key and enter passphrase and then select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup8.png)

{% include callout.html content="**Step 9.** If you generated your keys as described in the [Generating Keys section](https://docs.crp.to/usersguide.html##generating-keys) select [subkey 1] and then select [Save]. If you generated a custom backup key then load the subkey used for backups to slot 1." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup9.png)

{% include callout.html content="**Step 10.** Select [Choose File] and select your OnlyKey backup file and then select [Next] to load it onto your OnlyKey. Your device will reboot automatically when the restore is complete." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup10.png)

Your device is now set up!

Check out the new app features below.

## New OnlyKey Features {#new-features}

### Backup Passphrase

Keys are great but a passphrase is an easier way to securely backup your OnlyKey. If you are already using an OpenPGP key for backup you can switch to a passphrase simply by following the instructions on the [Set Backup Passphrase or Key] page. Your OpenPGP key will remain on the OnlyKey but the passphrase will be used for future backup and restore.
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/newfeature1.png)

### Two Profile Support

You may notice now that when setting your PINs there is a primary profile and a secondary profile. The secondary profile can be either a standard profile or plausible deniability profile. This is a change as the previous OnlyKey release only had the option for the second profile to be a plausible deniability profile. The standard profile is a full featured second profile with 12 available slots and the plausible deniablity profile is a limited feature second profile that looks and acts just like a device with [International Travel Edition firmware](https://docs.crp.to/internationaledition.html).
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite4.png)

### In App Firmware Updates

You may notice now that there is an option in the app to load firmware when setting up a device. There is also a tab named Firmware in the app. This may be used to load the latest firmware onto OnlyKey directly through the app, no backup/restore or wiping is required. Firmware updates are securely signed using a simple blockchain and verified by on the OnlyKey.
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/newfeature2.png)

{% include links.html %}

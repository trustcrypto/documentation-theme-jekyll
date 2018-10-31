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
   <td>Download OnlyKey Color Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_STD_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_STD_Original.cpp.hex">here</a>
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_IN_TRVL_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_IN_TRVL_Original.cpp.hex">here</a>
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
   <td>OnlyKey_Beta6_STD_Color.cpp.hex
   </td>
   <td>68f2ba7a23e6d4983cb47d4318e8eedbb86ecdf094feaf4928383ade88eb9150
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_STD_Original.cpp.hex
   </td>
   <td>309da576981b0f9cf811f577467c8e214ce761bc543f7a469eed25e43c0dd811
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_IN_TRVL_Color.cpp.hex
   </td>
   <td>d50ffa47c1e201fea4f77cddc3ad49e3afeb5873c537281569df65d12e27749d
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_IN_TRVL_Original.cpp.hex
   </td>
   <td>018c2f3fda8f958653e9e3f0c686ca1b9f84c2d5f1dab182b6efa8d2428234e8
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

{% include links.html %}

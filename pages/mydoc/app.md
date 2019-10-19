---
title: OnlyKey App
tags: [OnlyKey App, Chrome App]
keywords: OnlyKey, App
last_updated: Oct, 18, 2019
summary: The OnlyKey App is used for the initial setup and configuration of OnlyKey. Supported on Windows, macOS, Linux, and Chromebook (with Chrome App).
sidebar: mydoc_sidebar
permalink: app.html
folder: mydoc
---

# OnlyKey App

This is the official app for **OnlyKey**

OnlyKey can be purchased here: [OnlyKey order](http://www.crp.to/p/)

## About

**OnlyKey App** is an app to be used along with an OnlyKey device. The app is used for things like:

- Initial setup of OnlyKey (PINs)
- Configuration of accounts (Slots)
- Loading keys for OpenPGP and secure backup (Keys)
- Backup and restore of OnlyKey (Backup/Restore)
- Setting OnlyKey preferences (Preferences)
- Setting advanced options such as Yubikey and U2F security info (Advanced)

*The app is required on all systems where Google Authenticator (TOTP) is used*

For information on using the app with OnlyKey see the [OnlyKey User's Guide](https://docs.crp.to/usersguide.html)

### Install OnlyKey App {#app-install}

There are two options for installing the OnlyKey app.
- Install the [OnlyKey Desktop App](#app-desktop) (Recommended)
- Install the [OnlyKey Chrome App](#app-chrome) (Supported on Chrome, Brave Browser, Chromium)

Once you have installed the app proceed to [OnlyKey Setup](#onlykey-setup)

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey.App.5.2.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0_amd64.deb)

{% include note.html content="Linux users, if a UDEV rule has not been created previously follow the following instructions here, additionally the OnlyKey app may now be installed via snapcraft - [Linux Guide](https://docs.crp.to/linux.html)" %}

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 247b3ed27a5d7f2c35f6da0d44e0d6e7cb3ac4084eb3f944df1ce58e0df54dce<br>Windows SHA 256 CHECKSUM: 71ae01f86995c1aadae947d447223f65540c0c5ebcd1319dd5e5f1e1907013c0<br>Linux SHA 256 CHECKSUM: 3dc675c5a33c55abb153f98003a41843d4a1b5959f30ff479b76a953799665c8<br> [ **GPG Public Key**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/CryptoTrust_LLC_pub.asc)" %}

### Install OnlyKey Chrome App {#app-chrome}

{% include callout.html content="**Step 1.** Open the Chrome (or Brave/Chromium) Web Browser. If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))" type="default" %}

{% include callout.html content="**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration app on the Chrome Web Store and select 'Add to Chrome'" type="default" %}

{% include image.html file="image41.png" %}

{% include callout.html content="**Step 3.** When prompted select ''Add App''" type="default" %}

{% include image.html file="image12.png" max-width="359" %}

{% include callout.html content="**Step 4.** To launch the OnlyKey Configuration App select the top right menu icon -> Bookmarks -> Show Bookmarks Bar to enable the bookmarks bar to become visible. Then select the Apps icon (Or alternatively browse to ''chrome://apps/'') and then select the ''OK'' icon to launch the OnlyKey App." type="default" %}

{% include image.html file="image33.png" max-width="544" %}
<br>
<br>
{% include image.html file="image17.png" %}
<br>
<br>

## Support ##

Check out the [OnlyKey Support Forum](https://groups.google.com/forum/#!forum/onlykey)

Check out the [OnlyKey Documentation](https://docs.crp.to)

## Developer Notes

This repository contains shared code that can be used to build multiple types of
apps.

To run this code as a Chrome app:

    $ npm run chrome

To run as NWJS app:

    $ npm start

To create releases:

    $ npm run release

This will create an installer in the `releases/` subfolder. The installer is created for the current OS; this means you will need to run the `release` command on Windows, Linux, and Mac OS to generate all the installers.

On Windows, you need to install [NSIS][nsis] first, and ensure that it's present in your shell's `%PATH%`. That is, add `C:/Program Files (x86)/NSIS` or similar to your `%PATH%` in the operating system settings. On Mac OS, you need to install an optional NPM dependecy: `npm install appdmg`.

To run tests:

    $ npm test

Running tests requires the SDK version of NWJS, which comes with a `chromedriver` that handles automated Selenium tests. To install that version, run `npm install nw --nwjs_build_type=sdk`. Note that to create releases, you should install the non-sdk variant again; otherwise the installer will be unnecessarily large.

## Cryptography Notice

This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to another country, of encryption software.
BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use, and re-export of encryption software, to see if this is permitted.
See <http://www.wassenaar.org/> for more information.

The U.S. Government Department of Commerce, Bureau of Industry and Security (BIS), has classified this software as Export Commodity Control Number (ECCN) 5D002.C.1, which includes information security software using or performing cryptographic functions with asymmetric algorithms.
The form and manner of this distribution makes it eligible for export under the License Exception ENC Technology Software Unrestricted (TSU) exception (see the BIS Export Administration Regulations, Section 740.13) for both object code and source code.

The following cryptographic software is included in this distribution:

   "OpenPGP.js - OpenPGP JavaScript Implementation." - https://openpgpjs.org/

For more information on export restrictions see: http://www.apache.org/licenses/exports/

## Source

[OnlyKey App on Github](https://github.com/trustcrypto/OnlyKey-Chrome-App)

{% include links.html %}

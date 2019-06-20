---
title: OnlyKey App
tags: [OnlyKey App, Chrome App]
keywords: OnlyKey, App
last_updated: Jan, 16, 2018
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
- Install the [OnlyKey Chrome App](#app-chrome)

Once you have installed the app proceed to [OnlyKey Setup](#onlykey-setup)

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0.exe)

{% include tip.html content="The latest version of Windows 10 (1903) now requires apps to be “run as administrator” in order to be able to communicate with OnlyKey. While running the OnlyKey App as admin does work for now, we are building a better solution that will be available in an upcoming OnlyKey app update." %}


[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.1.0/OnlyKey_5.1.0_amd64.deb)

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 486a5f8c8da82dfdf57dbe76b3343274c4e6bea4294db789b7c258788d353234<br>Windows SHA 256 CHECKSUM: af331256d79ae7d8aa522072ab35724c29cb7a3c83b25d61ccd7067ef4c8612f<br>Linux SHA 256 CHECKSUM: 4638ce8b21c66b6f414d937d08ba01917db3d20b050630e6b456c338ba1c9e06<br>" %}

### Install OnlyKey Chrome App {#app-chrome}

{% include callout.html content="**Step 1.** Open the Chrome (or Chromium) Web Browser. If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))" type="default" %}

{% include callout.html content="**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration Web app on the Chrome Web Store and select 'Add to Chrome'" type="default" %}

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

### GNU/Linux users:

Your system may by default only allow read access to USB devices including the OnlyKey. You'll need to insert a udev rule in order to allow read/write access if the app hangs and you see "Working... please wait". Here are [instructions for inserting a udev rule](https://docs.crp.to/linux.html).

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

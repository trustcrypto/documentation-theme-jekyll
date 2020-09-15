---
title: OnlyKey App
tags: [OnlyKey App]
keywords: OnlyKey, App
last_updated: Oct, 18, 2019
summary: The OnlyKey App is used for the initial setup and configuration of OnlyKey. Supported on Windows, macOS, and Linux.
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
- Setting advanced options (Advanced)

*The app is required on all systems where Google Authenticator (TOTP) is used*

For information on using the app with OnlyKey see the [OnlyKey User's Guide](https://docs.crp.to/usersguide.html)

### Install OnlyKey App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey.App.5.2.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0_amd64.deb)

{% include note.html content="Linux users, if a UDEV rule has not been created previously follow the following instructions here, additionally the OnlyKey app may now be installed via snapcraft - [Linux Guide](https://docs.crp.to/linux.html)" %}

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 247b3ed27a5d7f2c35f6da0d44e0d6e7cb3ac4084eb3f944df1ce58e0df54dce<br>Windows SHA 256 CHECKSUM: 71ae01f86995c1aadae947d447223f65540c0c5ebcd1319dd5e5f1e1907013c0<br>Linux SHA 256 CHECKSUM: 3dc675c5a33c55abb153f98003a41843d4a1b5959f30ff479b76a953799665c8<br> [ **GPG Public Key**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/CryptoTrust_LLC_pub.asc)" %}

If you have an OnlyKey to set up, once you have installed the app proceed to [OnlyKey Setup](https://docs.crp.to/usersguide.html#onlykey-setup)

### OnlyKey Chrome App (End of life)

Google is discontinuing Chrome app support on all operating systems. For now, the Chrome app is still available but Google has announced that it will be disabled in a future version of Chrome.

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


## Support

Check out the [OnlyKey Support Forum](https://forum.onlykey.io)

Check out the [OnlyKey Documentation](https://docs.crp.to)

## Source

[OnlyKey App on Github](https://github.com/trustcrypto/OnlyKey-App)


{% include links.html %}

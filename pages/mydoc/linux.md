---
title: Using OnlyKey with Linux
tags: [OnlyKey, Linux]
keywords: OnlyKey, Linux, udev
last_updated: Oct, 16, 2019
summary: Create Linux UDEV rule for OnlyKey.
sidebar: mydoc_sidebar
permalink: linux.html
folder: mydoc
---


## Using OnlyKey with Linux

### Step 1 - Linux UDEV Rule {#udev-rule}

Linux requires a UDEV rule in order for non-root users to be able to communicate with USB devices.

- Go to [https://github.com/trustcrypto/trustcrypto.github.io/blob/master/49-onlykey.rules](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules) and download or create a copy of the file named 49-onlykey.rules into the Linux directory: /etc/udev/rules.d/ If this file is already there, ensure that the content looks like the one provided on the link above.

- Use the command `udevadm control --reload` or restart system for changes to take effect

To complete this via terminal issue the following commands:

```
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload
```

### Step 2 - Install OnlyKey Desktop App {#install-app}

For Debian user's install the DEB below.

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0_amd64.deb)

For other Linux users you may install the OnlyKey app via [snapcraft](https://snapcraft.io/onlykey-app)

`
$ snap install onlykey-app
`

At time of writing, snapcraft app does not work on Fedora, as an alternative you may also extract the .DEB and run the application directly:

`
$ ar xf OnlyKey*.deb
$ tar xf data.tar.xz
`

Copy the OnlyKey directory to where you want the app i.e.
`
$ sudo cp -r opt/OnlyKey/ /opt/
`

Fedora requires additional dependency
`
$ sudo dnf install libXScrnSaver
`

To launch the app run the nw file located in the OnlyKey directory, you may want to create a symlink to launch the nw file.

### Step 3 - Customization {#custom-app}

You may want to also install the OnlyKey CLI app. Follow instructions [here](https://docs.crp.to/command-line.html)

One requirement of TOTP (Time-based One-time Password) is having the correct time. If OnlyKey is used on a system where the OnlyKey app is not running it will display “NOTSET” instead of the OTP code. Because OnlyKey has no battery it requires an app to send it the correct time to be able to generate TOTP codes. If you have OnlyKey command-line utility installed, adding the following to UDEV rule will automatically set the current time on OnlyKey every time you plug it: RUN+="/usr/local/bin/onlykey-cli settime"

## Other Linux and BSD support

Details on using the OnlyKey CLI app and OnlyKey Agent with FreeBSD are available [here](https://groups.google.com/forum/#!searchin/onlykey/freebsd%7Csort:date/onlykey/CEYwdXjB508/vPPcJsEnAwAJ)


{% include links.html %}

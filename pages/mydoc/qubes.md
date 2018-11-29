---
title: Using OnlyKey with Qubes OS
tags: [OnlyKey, vm, qubes, qubes os]
keywords: OnlyKey, vm, qubes, qubes os
last_updated: Nov, 28, 2018
summary: How to use OnlyKey with Qubes OS
sidebar: mydoc_sidebar
permalink: qubes.html
folder: mydoc
---

## Qubes OS Support

[Qubes OS](https://www.qubes-os.org/intro/) is a security-oriented operating system that uses virtual machines that are compartmentalized and securely isolated. These securely isolated compartments are called qubes. OnlyKey is supported on Qubes OS in the same way as USB keyboards (USB HID).

### Basic Setup Instructions

The following setup instructions walk through the process of configuring dom0 and a USB qube so that OnlyKey will function as a keyboard and be able to communicate with the OnlyKey app (required for TOTP).

**Step 1 - Create a USB qube** - Follow the instructions [here](https://www.qubes-os.org/doc/usb/#creating-and-using-a-usb-qube) to create a USB qube.

**Step 2 - Enable USB Keyboard Support** - As described [here](https://www.qubes-os.org/doc/usb/#creating-and-using-a-usb-qube) configure dom0 so that OnlyKey will function as a keyboard by adding the following line to the top of the file /etc/qubes-rpc/policy/qubes.InputKeyboard.

```
sys-usb dom0 allow,user=root
```

*Note: The above assumes your USB qube is called sys-usb*

**This will permit OnlyKey (and any other USB keyboard) to immediately operate as a keyboard in all VMs (without attaching the OnlyKey to a VM). However, OnlyKey requires accurate time for the TOTP feature to work. Complete step 3 below to if TOTP support is required.**

### Install OnlyKey App

**Step 3 - Install OnlyKey App** - The OnlyKey app is available as a .deb file [here](https://github.com/trustcrypto/OnlyKey-App/releases/latest). If your USB qube is based on Debian, you should be able to simply download the file in an appVM and move it to your USB qube. You then install the .deb file, like this:

```
dpkg -i OnlyKey_5.1.0_amd64.deb
```

If your USB qube is based on a non-debian Linux distribution and the .deb file is incompatible there are two additional options available.

**Option 1** - Install Chromium, and install the OnlyKey Chrome extension from [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica). The OnlyKey Chrome app will automatically set the time on the OnlyKey whenever Chromium is running and the OnlyKey is connected.

**Option 2** - Install the OnlyKey Python Command-Line Utility from [here](https://docs.crp.to/command-line.html). With this installed you can set the time on OnlyKey as follows:

```
onlykey-cli settime
```

This command may be set to run whenever the USB device is connected by using the UDEV rules [here](https://docs.crp.to/linux.html) and following the instructions [here](https://unix.stackexchange.com/questions/65891/how-to-execute-a-shellscript-when-i-plug-in-a-usb-device).


{% include links.html %}

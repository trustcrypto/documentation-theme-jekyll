---
title: Using OnlyKey with Linux
tags: [OnlyKey, Linux]
keywords: OnlyKey, App
last_updated: May, 14, 2018
summary: Create Linux UDEV rule for OnlyKey.
sidebar: mydoc_sidebar
permalink: linux.html
folder: mydoc
---

### Linux UDEV Rule

In order for non-root users in Linux to be able to communicate with OnlyKey a udev rule must be created as described below.

- Go to [https://github.com/trustcrypto/trustcrypto.github.io/blob/master/49-onlykey.rules](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules) and download or create a copy of the file named 49-onlykey.rules into the Linux directory: /etc/udev/rules.d/ If this file is already there, ensure that the content looks like the one provided on the link above.

- Use the command `udevadm control --reload` or restart system for changes to take effect

To complete this via terminal issue the following commands:

`$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules`
`$ sudo cp 49-onlykey.rules /etc/udev/rules.d/`
`$ sudo udevadm control --reload`

{% include links.html %}

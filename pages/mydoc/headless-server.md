---
title: Using OnlyKey for Head-less Server/Workstation Authentication
tags: [OnlyKey, server, head-less, authentication]
keywords: OnlyKey, server, head-less, authentication
last_updated: May, 17, 2019
summary: How to use OnlyKey to authenticate to a device with no monitor
sidebar: mydoc_sidebar
permalink: headless-server.html
folder: mydoc
---

## Head-less Device Authentication Scenarios

There are quite a few scenarios where secure authentication with a head-less (no monitor) computer is required. Here is an example use case and how OnlyKey may be utilized:

- A consulting company wants to ship a testing device to a customer. Full-disk encryption is enabled to ensure that only the customer at the destination can decrypt and access the server. Company ships both the server and a provisioned OnlyKey protected by a PIN code. Upon receiving the shipment customer calls client to obtain PIN code (or sent via secure messaging). The client inserts the OnlyKey, unlocks with PIN code and presses a button which sends a very strong 56 character password to unlock the server.

OnlyKey helps is several ways:
  - Sending the client the password securely may be an issue. If the password is intercepted by a hacker it may be used to access the server. On the other hand, the OnlyKey PIN is only usable by a hacker if they also have access to the physical OnlyKey device.
  - The client may decide to write the password down or store it insecurely, with OnlyKey there is no password to write down.
  - The client may become frustrated typing that long of a password. OnlyKey automatically types the password at the push of a button which adds convenience without compromise of security.


{% include links.html %}

---
title: Import keys from Protonmail, Keybase, and Mailvelope
tags: [OnlyKey, mailvelope, protonmail, keybase]
keywords: OnlyKey, mailvelope, protonmail, keybase, pgp, openpgp
last_updated: Nov, 01, 2019
summary: How to use export keys from Protonmail, Keybase, and Mailvelope and load onto OnlyKey
sidebar: mydoc_sidebar
permalink: importpgp.html
folder: mydoc
---

## OpenPGP Support

OnlyKey uses the same standard OpenPGP keys used by popular services like Protonmail, Keybase, and Mailvelope. If you already have a key with one of these you can export the private key and load it onto OnlyKey. OnlyKey uses this loaded key for encrypted messages and files (see [WebCrypt](https://docs.crp.to/webcrypt.html)) and can use this key for secure backups of your OnlyKey (see [secure backups](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere)).

### Protonmail

{% include warning.html content="Only export keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

{% include callout.html content="**Step 1.** Follow the instructions in the [Protonmail knowledge base here](https://protonmail.com/support/knowledge-base/download-public-private-key/) to Download your private key" type="default" %}

{% include callout.html content="**Step 2.** Follow the instructions [here](#loading-keys) to load key onto OnlyKey" type="default" %}

{% include callout.html content="**Step 3.** Follow the instructions [here](#loading-keys) to load key onto OnlyKey" type="default" %}


### Loading Keys {#loading-keys}

{% include warning.html content="Only load keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

{% include callout.html content="**Step 1.** Open the text file of your private key that you downloaded in the previous steps in a text editor. Select all of the text of the private key (CTRL+A), and copy the text (CTRL+C)." type="default" %}

{% include callout.html content="**Step 2.** Click on the Keys tab of the OnlyKey App." type="default" %}

{% include callout.html content="**Step 3.** Put the OnlyKey into config mode doing the following" type="default" %}

*   Ensure OnlyKey is unlocked
*   Hold the 6 button down for more than 5 seconds, and then release, you will see the light turn off.
*   Re-enter your PIN, you will see the OnlyKey LED fade in and out continuously (Red if OnlyKey Color) while in config mode.

{% include callout.html content="**Step 4.** Paste the copied private key into the RSA Private Key box. Ensure *Auto* is selected as Slot, enter the same passphrase you used with Keybase, Protonmail, or Mailvelope. When finished select Save to OnlyKey" type="default" %}

{% include image.html file="loadkey1.jpeg" %}

{% include note.html content="Selecting set as backup key will use your Keybase key to encrypt backups. Setting this will override any previously set backup passphrase/key as there can only be one backup key set." %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

Now your OnlyKey is ready to send/receive OpenPGP encrypted messages/files using [WebCrypt](https://docs.crp.to/webcrypt.html)


{% include links.html %}

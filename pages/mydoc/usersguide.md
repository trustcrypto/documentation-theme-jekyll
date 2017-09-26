---
title: OnlyKey User's Guide
tags: [OnlyKey, User's Guide]
keywords: OnlyKey, User's Guide
last_updated: Sept, 25, 2017
summary: The OnlyKey user's guide provides step-by-step instructions for configuring and using OnlyKey.
sidebar: mydoc_sidebar
permalink: usersguide.html
folder: mydoc
---

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image50.png"><img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/ok.jpg">

# Unpacking {#unpacking}

**Step 1.** Remove the OnlyKey and Keychain from packaging.

**Step 2.** Remove the small metal keyring if one is attached and discard this keyring.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image76.jpg" width= "20%">

**Step 3.** Attach the plastic end of the keychain to your own keyring that you use to carry your keys and the other string end of the keychain to your OnlyKey.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image14.jpg" width= "40%">

**Step 4.** By pressing the buttons on both sides of the plastic attachment you can remove your OnlyKey from your keyring to insert it into USB.

**Step 5.** (Optional) Insert OnlyKey into silicone case as shown [here.](#onlykey-case)

***PRO TIP - (Optional) Check out OnlyKey accessories - [color cases]({#onlykey-case}), [keychain options]({#keychain-options}), [mobile adapter]({#android-support}).***

*Proceed to initial setup below*

# Initial Setup {#initial-setup}

**Step 1.** Open the Chrome Web Browser (If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))

**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration Web app on the Chrome Web Store and select "Add to Chrome"

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image41.png" width= "100%">

**Step 3.** When prompted select "Add App"

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image12.png" width= "45%">

**Step 4.** To launch the OnlyKey Configuration App select the top right menu icon -> "Bookmarks" -> "Show Bookmarks Bar" to enable the bookmarks bar to become visible. Then select the Apps icon (Or alternatively browse to "chrome://apps/") and then select the "OK" icon to launch the OnlyKey App.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image33.png" width= "60%">
<br>
<br>
<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image17.png" width= "60%">

**Step 5.** Once the OnlyKey Configuration App launches you will see the message "Please connect your OnlyKey"

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image18.png" width= "80%">

**Step 6.** Insert the OnlyKey into USB port.

**Step 7.** Once the OnlyKey has been successfully attached to the computer the Initial Setup Wizard screen will appear. Select "Next" to continue.

***LINUX USERS NOTE: If you are using Linux your system may by default only allow read access to USB devices including the OnlyKey. In order to allow read/write access follow the instructions[ here](https://docs.google.com/document/d/1Go_Rs218fKUx-j_JKhddbSVTqY6P0vQO831t2MKCJC8/edit?usp=sharing) to create a udev rule. Also see the following forum topic [here.](https://groups.google.com/forum/#!topic/onlykey/MnD03gQzczg)***

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image77.png">

**Step 8. Select OnlyKey Edition** - This is where you select the edition of OnlyKey that you have. If you are a US customer select Standard Edition. For international customers (outside of US) the OnlyKey comes pre-loaded with the International Travel Edition as shipping devices with military grade encryption is problematic in some countries. If strong encryption is permitted in your country ([check here](http://www.cryptolaw.org/)) then you may load the standard OnlyKey firmware by following the instructions in the [Firmware Loading](#loading-onlykey-firmware) section and then return to initial setup.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image88.png">

***PRO TIP - Before setting a PIN***

*   *You may find it easier to remember a pattern rather than a 7 - 10 digit PIN. Kind of like patterns used to unlock an Android Lockscreen:*

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image86.png" width= "30%">

*   *As described in the following steps you can use multiple PINs, make sure PINs are not set to the same thing or share the same sequence, this will not work they must be different. For example, if PIN A is "11223344" and PIN B is "1122334455" then when you try to type in PIN B the device would read PIN A before you enter "55".*

**Step 9. Set Your PIN** - Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select "Next" to continue.

*Note: The OnlyKey LED should be on and briefly turn off (blink) when you press each digit of your PIN. *

**Step 10. Confirm Your PIN -**  Re-enter the same PIN and select "Next" to continue. Once you click next you can see the messages in red at the bottom of the app displaying "Successfully set PIN" and that your "OnlyKey is ready…" at this point the manditory steps of your initial setup is complete you can either remove and reinsert your OnlyKey to start using or optionally continue to set the self-destruct and plausible deniability PINs.

**Step 11. Set Self-Destruct PIN** - The Self-Destruct PIN is an additional PIN you can set that is used to wipe your OnlyKey. Whenever this PIN is entered the OnlyKey will wipe all data and return to a factory default state. See [this](#self-destruct) for more information on this feature.

Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select "Next" to continue.

**Step 12. Confirm Your PIN -**  Re-enter the same PIN and select "Next" to continue. Once you click next you can see the messages in red at the bottom of the app displaying "Successfully set PIN" and that your "OnlyKey is ready…" at this point your initial setup is complete you can either remove and reinsert your OnlyKey to start using or if you have a Standard Edition OnlyKey you can optionally continue to set the plausible deniability PIN.

**Step 13. Set Plausible Deniability PIN (Only For Standard Edition OnlyKey)** - The Plausible Deniability PIN is an additional PIN you can set that is used to set up a separate profile on your OnlyKey. Whenever this PIN is entered the OnlyKey will open the separate profile while your primary profile remains hidden. This second profile operates identically to a profile on the OnlyKey international travel edition. It would be plausible that this second profile is the only profile on your OnlyKey. By design this feature allows a user plausibly deny that a second profile exists on the OnlyKey. See [this](#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware) for more information on this feature.

Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select "Next" to continue.

**Step 14. Confirm Your PIN -**  Re-enter the same PIN and select "Next" to continue. Once you click next you can see the message shown below. Remove and reinsert your OnlyKey to set up your profile.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image27.png">

***PRO TIP - Don't Care About Plausible Deniability, how about a work profile and personal profile?***

*We get that there will be some users who think the idea of having a second hidden profile is awesome and others will be be like meh, I don't want or need that. That is fine and you can still get value out of having the second profile. Using the second profile you can have up to 24 unique accounts set up instead of 12. For example, if you wanted to set up all of your personal accounts under the main profile and all of the work accounts under the hidden profile that would be fine. You can get creative and use the other profile for whatever you want.*

***PRO TIP - Forget your PIN?***

*If you lose or forget your PIN then a factory default must be completed on your OnlyKey before you can set a new PIN. This wipes all of your sensitive information and allows you to go through the Initial Setup again to configure a new OnlyKey PIN. To perform a factory default you have two options:*

***Method #1 - Enter your self-destruct PIN. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure.***

***Method #2 - Enter 10 incorrect PINs. You will notice that after entering 3 incorrect PINs your OnlyKey is steadily blinking. This is an intentional safeguard so that in the event that a child gets ahold of your OnlyKey the device will not be inadvertently wiped by them repeatedly pressing buttons. You must remove and reinsert your OnlyKey and enter 3 more incorrect PINs. Repeat this until 10 incorrect PINs have been entered. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure.***

*If you want to learn more about the Self-Destruct and Plausible Deniability features see the [OnlyKey FAQ](https://docs.crp.to/faq.html) and the [OnlyKey Features](#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware).*

# Configure Profile {#configure-profile}

***PRO TIP -*** Set aside some time to configure profiles as this can be time consuming the first time you set it up. Once you configure your profiles once you won't have to do this again unless you add a new account. Think of all the time you will save not having to remember and type usernames, passwords, and getting your phone out to type codes etc. This is a huge time saver in the long run.

**Enter your PIN -**  After removing and reinserting your OnlyKey you are prompted to enter the PIN you set during initial setup onto your OnlyKey six button keypad.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image82.png">

Now that your OnlyKey is unlocked you see this screen.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image31.png">

### All About Slots {#all-about-slots}

The Slots area of the application is where you will set up things like your usernames, passwords, and 2 factor. As you can see the word "empty" is shown 12 times next to a button with a number and a letter. Each of these buttons refer to one of the slots on your OnlyKey.

**What are slots?** On the OnlyKey you have 6 buttons and 12 available slots in your profile. Each slot can be set with a Label, URL, Username, Password, and two-factor authentication. Each slot is assigned to a button on your OnlyKey. So for example if you were to save your Google password to slot 1a, then to type out your Google password you would tap button 1 on your OnlyKey for less than one second (Slot 1a). If you were to save your Yahoo password to slot 1b, then to type our your Yahoo password you would hold button 1 on your OnlyKey for more than one second (Slot 1b).

Each button has two slots assigned to it that can be activated by holding the button for less than or more than one second.

The slots that have not been configured have no label so they are shown as "empty". Next, let's set a label to slot 1a.

### Set a Label {#set-a-label}

**Step 1.** Click the 1a button in the OnlyKey app and see the Slot 1a Configuration

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image36.png">

**Step 2.** Enter a label such as Gmail in the Label field, check the box next to Label, and click Submit.

Now the label you entered is assigned to slot 1a. Slot labels are helpful if you forget which button is assigned to which account you can open the OnlyKey app at any time to see how it is set up.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image66.png">

**What if I am using a computer without the OnlyKey app?**

This is where the card you received with your OnlyKey comes in handy. You can write your labels on this and carry this in your wallet. This is a low tech solution but it works great.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/card.png">

Obviously, no sensitive information should be written on the card or saved to your slot labels. Just something that helps you remember which account is assigned there. Next, let's assign a username and password to slot 1a.

### Set up a Slot {#set-up-a-slot}

The example configuration shown below would be to set up a username and password to automatically login to the Google page shown below.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image35.png" width= "90%">

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image24.png" width= "90%">

**Note:** Since not all Login pages are the same OnlyKey has options like tab (use to go to the next field) and Return (submit). These essentially press either the tab or return key so if you are unsure of how to set up your OnlyKey configuration try logging into your login page first by using just your keyboard. For the example above you would do this by entering your password, pressing the Return/Enter key, on the next page entering your password and then pressing the Return/Enter key to complete your login.

<img src ="https://github.com/trustcrypto/trustcrypto.github.io/raw/master/images/image3.png" width= "50%">


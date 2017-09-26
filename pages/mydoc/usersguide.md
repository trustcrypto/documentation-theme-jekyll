---
title: USER'S GUIDE
tags: [OnlyKey, User's Guide]
keywords: OnlyKey, User's Guide
last_updated: Sept, 25, 2017
summary: The OnlyKey user's guide provides step-by-step instructions for configuring and using OnlyKey.
sidebar: mydoc_sidebarusers
permalink: usersguide.html
folder: mydoc
---
{% include image.html file="image50.png" %}
<h1>&nbsp;&nbsp;USER'S GUIDE</h1>
<br>
## Unpacking OnlyKey {#unpacking}

{% include callout.html content="**Step 1.** Remove the OnlyKey and Keychain from packaging." type="default" %}

{% include callout.html content="**Step 2.** Remove the small metal keyring if one is attached and discard this keyring." type="default" %}

{% include image.html file="image76.jpg" max-width="138" %}

{% include callout.html content="**Step 3.** Attach the plastic end of the keychain to your own keyring that you use to carry your keys and the other string end of the keychain to your OnlyKey." type="default" %}

{% include image.html file="image14.jpg" max-width="350" %}

{% include callout.html content="**Step 4.** By pressing the buttons on both sides of the plastic attachment you can remove your OnlyKey from your keyring to insert it into USB." type="default" %}

{% include callout.html content="**Step 5.** (Optional) Insert OnlyKey into silicone case as shown [here.](#onlykey-case)" type="default" %}

{% include tip.html content="(Optional) Check out OnlyKey accessories - [color cases](#onlykey-case), [keychain options](#keychain-options), [mobile adapter](#android-support)." %}

{% include callout.html content="***Proceed to initial setup below***" type="success" %}

## Initial Setup {#initial-setup}

{% include callout.html content="**Step 1.** Open the Chrome Web Browser (If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))" type="default" %}

{% include callout.html content="**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration Web app on the Chrome Web Store and select 'Add to Chrome'" type="default" %}

{% include image.html file="image41.png" %}

{% include callout.html content="**Step 3.** When prompted select ''Add App''" type="default" %}

{% include image.html file="image12.png" max-width="359" %}

{% include callout.html content="**Step 4.** To launch the OnlyKey Configuration App select the top right menu icon -> Bookmarks -> Show Bookmarks Bar to enable the bookmarks bar to become visible. Then select the Apps icon (Or alternatively browse to ''chrome://apps/'') and then select the ''OK'' icon to launch the OnlyKey App." type="default" %}

{% include image.html file="image33.png" max-width="544" %}
<br>
<br>
{% include image.html file="image17.png" %}

{% include callout.html content="**Step 5.** Once the OnlyKey Configuration App launches you will see the message ''Please connect your OnlyKey''" type="default" %}

{% include image.html file="image18.png" %}

{% include callout.html content="**Step 6.** Insert the OnlyKey into USB port." type="default" %}

{% include callout.html content="**Step 7.** Once the OnlyKey has been successfully attached to the computer the Initial Setup Wizard screen will appear. Select ''Next'' to continue." type="default" %}

{% include note.html content="LINUX USERS - If you are using Linux your system may by default only allow read access to USB devices including the OnlyKey. In order to allow read/write access follow the instructions[ here](https://docs.google.com/document/d/1Go_Rs218fKUx-j_JKhddbSVTqY6P0vQO831t2MKCJC8/edit?usp=sharing) to create a udev rule. Also see the following forum topic [here.](https://groups.google.com/forum/#!topic/onlykey/MnD03gQzczg)" %}

{% include image.html file="image77.png" %}

{% include callout.html content="**Step 8. Select OnlyKey Edition** - This is where you select the edition of OnlyKey that you have. If you are a US customer select Standard Edition. For international customers (outside of US) the OnlyKey comes pre-loaded with the International Travel Edition as shipping devices with military grade encryption is problematic in some countries. If strong encryption is permitted in your country ([check here](http://www.cryptolaw.org/)) then you may load the standard OnlyKey firmware by following the instructions in the [Firmware Loading](#loading-onlykey-firmware) section and then return to initial setup." type="default" %}

{% include image.html file="image88.png" %}

{% include tip.html content="Before setting a PIN<br><br>You may find it easier to remember a pattern rather than a 7 - 10 digit PIN. Kind of like patterns used to unlock an Android Lockscreen:" %}

{% include image.html file="image86.png" max-width="157" %}

{% include note.html content="As described in the following steps you can use multiple PINs, make sure PINs are not set to the same thing or share the same sequence, this will not work they must be different. For example, if PIN A is '11223344' and PIN B is '1122334455' then when you try to type in PIN B the device would read PIN A before you enter '55'." %}

{% include callout.html content="**Step 9. Set Your PIN** - Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue." type="default" %}

{% include note.html content="The OnlyKey LED should be on and briefly turn off (blink) when you press each digit of your PIN." %}

{% include callout.html content="**Step 10. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the messages in red at the bottom of the app displaying ''Successfully set PIN'' and that your ''OnlyKey is ready…'' at this point the manditory steps of your initial setup is complete you can either remove and reinsert your OnlyKey to start using or optionally continue to set the self-destruct and plausible deniability PINs." type="default" %}

{% include callout.html content="**Step 11. Set Self-Destruct PIN** - The Self-Destruct PIN is an additional PIN you can set that is used to wipe your OnlyKey. Whenever this PIN is entered the OnlyKey will wipe all data and return to a factory default state. See [this](#self-destruct) for more information on this feature." type="default" %}

Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue.

{% include callout.html content="**Step 12. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the messages in red at the bottom of the app displaying ''Successfully set PIN'' and that your ''OnlyKey is ready…'' at this point your initial setup is complete you can either remove and reinsert your OnlyKey to start using or if you have a Standard Edition OnlyKey you can optionally continue to set the plausible deniability PIN." type="default" %}

{% include callout.html content="**Step 13. Set Plausible Deniability PIN (Only For Standard Edition OnlyKey)** - The Plausible Deniability PIN is an additional PIN you can set that is used to set up a separate profile on your OnlyKey. Whenever this PIN is entered the OnlyKey will open the separate profile while your primary profile remains hidden. This second profile operates identically to a profile on the OnlyKey international travel edition. It would be plausible that this second profile is the only profile on your OnlyKey. By design this feature allows a user plausibly deny that a second profile exists on the OnlyKey. See [this](#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware) for more information on this feature." type="default" %}

Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue.

{% include callout.html content="**Step 14. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the message shown below. Remove and reinsert your OnlyKey to set up your profile." type="default" %}

{% include image.html file="image27.png" %}

{% include tip.html content="Don't Care About Plausible Deniability, how about a work profile and personal profile?" %}

*We get that there will be some users who think the idea of having a second hidden profile is awesome and others will be be like meh, I don't want or need that. That is fine and you can still get value out of having the second profile. Using the second profile you can have up to 24 unique accounts set up instead of 12. For example, if you wanted to set up all of your personal accounts under the main profile and all of the work accounts under the hidden profile that would be fine. You can get creative and use the other profile for whatever you want.*

{% include tip.html content="Forget your PIN?<br><br>
If you lose or forget your PIN then a factory default must be completed on your OnlyKey before you can set a new PIN. This wipes all of your sensitive information and allows you to go through the Initial Setup again to configure a new OnlyKey PIN. To perform a factory default you have two options:" %}

***Method #1 - Enter your self-destruct PIN. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure.***

***Method #2 - Enter 10 incorrect PINs. You will notice that after entering 3 incorrect PINs your OnlyKey is steadily blinking. This is an intentional safeguard so that in the event that a child gets ahold of your OnlyKey the device will not be inadvertently wiped by them repeatedly pressing buttons. You must remove and reinsert your OnlyKey and enter 3 more incorrect PINs. Repeat this until 10 incorrect PINs have been entered. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure.***

*If you want to learn more about the Self-Destruct and Plausible Deniability features see the [OnlyKey FAQ](https://docs.crp.to/faq.html) and the [OnlyKey Features](#features).*

## Configure Profile {#configure-profile}

{% include tip.html content="Set aside some time to configure profiles as this can be time consuming the first time you set it up. Once you configure your profiles once you won't have to do this again unless you add a new account. Think of all the time you will save not having to remember and type usernames, passwords, and getting your phone out to type codes etc. This is a huge time saver in the long run." %}

### Configure Basic Login Info {#all-about-slots}

**Enter your PIN -**  After removing and reinserting your OnlyKey you are prompted to enter the PIN you set during initial setup onto your OnlyKey six button keypad.

{% include image.html file="image82.png" %}

Now that your OnlyKey is unlocked you see this screen.

{% include image.html file="image31.png" %}

#### All About Slots {#all-about-slots}

The Slots area of the application is where you will set up things like your usernames, passwords, and 2 factor. As you can see the word ''empty'' is shown 12 times next to a button with a number and a letter. Each of these buttons refer to one of the slots on your OnlyKey.

**What are slots?** On the OnlyKey you have 6 buttons and 12 available slots in your profile. Each slot can be set with a Label, URL, Username, Password, and two-factor authentication. Each slot is assigned to a button on your OnlyKey. So for example if you were to save your Google password to slot 1a, then to type out your Google password you would tap button 1 on your OnlyKey for less than one second (Slot 1a). If you were to save your Yahoo password to slot 1b, then to type our your Yahoo password you would hold button 1 on your OnlyKey for more than one second (Slot 1b).

Each button has two slots assigned to it that can be activated by holding the button for less than or more than one second.

The slots that have not been configured have no label so they are shown as ''empty''. Next, let's set a label to slot 1a.

#### Set a Label {#set-a-label}

{% include callout.html content="**Step 1.** Click the 1a button in the OnlyKey app and see the Slot 1a Configuration" type="default" %}

{% include image.html file="image36.png" %}

{% include callout.html content="**Step 2.** Enter a label such as Gmail in the Label field, check the box next to Label, and click Submit." type="default" %}

Now the label you entered is assigned to slot 1a. Slot labels are helpful if you forget which button is assigned to which account you can open the OnlyKey app at any time to see how it is set up.

{% include image.html file="image66.png" %}

**What if I am using a computer without the OnlyKey app?**

This is where the card you received with your OnlyKey comes in handy. You can write your labels on this and carry this in your wallet. This is a low tech solution but it works great.

{% include image.html file="card.jpg" %}

Obviously, no sensitive information should be written on the card or saved to your slot labels. Just something that helps you remember which account is assigned there. Next, let's assign a username and password to slot 1a.

#### Set up a Slot {#set-up-a-slot}

The example configuration shown below would be to set up a username and password to automatically login to the Google page shown below.

{% include image.html file="image35.png" max-width="602" %}

{% include image.html file="image24.png" max-width="602" %}

{% include note.html content="Since not all Login pages are the same OnlyKey has options like tab (use to go to the next field) and Return (submit). These essentially press either the tab or return key so if you are unsure of how to set up your OnlyKey configuration try logging into your login page first by using just your keyboard. For the example above you would do this by entering your password, pressing the Return/Enter key, on the next page entering your password and then pressing the Return/Enter key to complete your login." %}

{% include image.html file="image3.png" max-width="295" %}

#### Test a Slot {#test-a-slot}

Once you set your desired account information to a slot then try it out by going to the login page, clicking in the login field, and pressing the corresponding button on the OnlyKey.

***Common issues:***

*   ***The password is entered before page loads.***
    *   *Set the delay, usually 2-3 seconds works well but this may not be enough time for slow web pages or slow internet connections.*
*   ***There is a Captcha required sometimes after password***
    *   *You can either set the delay to a high value like 8 - 9 seconds to give yourself time to enter this or select None. Selecting None means that the password is entered but not submitted so you have time to enter additional information.*
*   ***Everything works fine but I really wish it typed faster.***
    *   *You can adjust the type speed in [preferences.](#configurable-keyboard-type-speed)*

As mentioned earlier, login pages can be different between sites and sometimes even different on the same site. For the second example we will set up another Google login, this one for a Google account where the username is already saved to the website so all you need to do is enter a password. This is the default when you have already logged into Google in the past on a computer.

Additionally, by using the URL field we can have the OnlyKey type the login page URL into the browser and browse to the login page (in this case accounts.google.com). This way a one-touch login is possible. Just select the empty URL field in the browser and the URL is automatically typed out and Return is pressed to browse to the site. Once on the site the password is entered and the login is complete.

The example configuration shown below would be to set up a URL and password to automatically login to the Google page shown below. Notice that the username is already remembered so there is not a need to set this in the OnlyKey slot.

{% include image.html file="image72.png" max-width="624" %}

{% include image.html file="image23.png" max-width="602" %}

*The table below shows how to configure some common login forms that at first may seem problematic. By using the delay setting of the OnlyKey we can support practically any login field format.*


<table>
  <tr>
   <td><strong>Login Format</strong>
   </td>
   <td><strong>Configuration</strong>
   </td>
  </tr>
  <tr>
   <td>Site that does not automatically select username field after loading page (i.e.Kracken).
{% include image.html file="image42.png" max-width="201" %}
   </td>
   <td><em>With URL - You will notice that the delay is set to a high value so that you have plenty of time to select the username field manually since it's not selected automatically.</em>
{% include image.html file="image54.png" max-width="395" %}
<em>Without URL - Browse to the login page first and place cursor in the username field before selecting the assigned OnlyKey button.</em>
{% include image.html file="image4.png" max-width="395" %}
   </td>
  </tr>
  <tr>
   <td>Site where username is remembered after first login (i.e. Google).
   </td>
   <td><em>Password and 2FA only - This is usually the best option if you remember your username/email address as this will work on any computer whether your username is remembered or not. This method does not include URL in case you are prompted for a password.</em>
{% include image.html file="image60.png" max-width="395"%}
<em>Username Remembered w/URL - If you use your device mostly on a computer where you username is remembered this is a good option.</em>
{% include image.html file="image61.png" max-width="395" %}
   </td>
  </tr>
  <tr>
   <td>Site that does not automatically select OTP code field (i.e. Salesforce)
{% include image.html file="image22.png" max-width="201" %}
After loading next page
{% include image.html file="image47.png" max-width="201" %}
   </td>
   <td><em>You will notice that the delay before 2FA is set to a high value so that you have plenty of time to select the OTP code field manually since it's not selected automatically.</em>
{% include image.html file="image44.png" max-width="395"%}
   </td>
  </tr>
  <tr>
   <td>Site where username and password is required first and then OTP code field appears below (i.e. IT Glue)
{% include image.html file="image28.png" max-width="207"%}
   </td>
   <td>
{% include image.html file="image52.png" max-width="395" %}
   </td>
  </tr>
</table>


{% include tip.html content="Before testing a configuration in your web browser it is a good idea to try it out in a text editor like notepad, just to make sure it looks right. The last thing you want is to find that you accidentally are typing your password out in the wrong field and now have to change the password." %}

***NO WEAK PASSWORDS*** - While OnlyKey makes it possible for your accounts to be more secure than remembering passwords or than using a software password manager one thing to remember is that it is up to you to use strong passwords. If you set your password to something like ''password1'' this is not secure, in fact we recommend using randomly generated strong passwords that cannot be guessed or cracked by a hacker.

Generating a strong password is easy to do. Next, let's use two different methods to generate strong uncrackable passwords.

#### Generate Strong Password via Browser Extension {#generate-strong-password-via-browser-extension}

Install a browser extension by selecting add to Chrome the same way that you installed the OnlyKey app.

Chrome Extension available from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/strong-password-generator/emehklffcaphknhhfhadkjhpfapcbpco).

{% include image.html file="image21.png" %}

#### Generate Strong Passwords Online {#generate-strong-passwords-online}

There are many websites that allow you to generate a secure random password including the Lastpass tool.

LastPass password generation tool available [here](https://lastpass.com/generatepassword.php).

{% include image.html file="image59.png" %}

### Configure Two Factor Authentication (2FA) {#two-factor-authentication-2fa}

Two-factor authentication (2FA) is essentially an extra step that is required during the login process that makes it so that even if your username and password are compromised an attacker cannot login to your account. It is called two-factor authentication, or sometimes also multifactor authentication, because more than one factor is required to login. Factors can be something you know like a password, something you are like a fingerprint or iris scan, or something you have like the OnlyKey. There are three different types of 2FA supported by OnlyKey. There is more information on these available on the features page of the [OnlyKey Wiki](https://docs.crp.to). By supporting multiple modes of 2FA OnlyKey will work with most sites that suppor 2FA - [http://www.dongleauth.info/](http://www.dongleauth.info/)

#### Google Authenticator (TOTP) {#google-authenticator-totp}

*DISCLAIMER - Google® is the registered trademarks of Google Inc. OnlyKey is not associated with or sponsored by Google® Inc.*

{% include tip.html content="If you are not a 2FA guru then this is the recommended method to use." %}

***Background Information***

*The way you would typically set up Google Authenticator without OnlyKey is to download the Google Authenticator app to your smartphone. You would then enable Google Authenticator on a website and the website would provide you with a QR code that looks like this:*

{% include image.html file="image84.png" max-width="550" %}

*You would then take a picture of the QR code the website gives you. The app then starts generating a 6 digit number that changes every 30 seconds that is required to be typed into the website login prompt in addition to your username and password.*

*This method of two-factor authentication has some notable advantages over using features like 2nd-step verification where a website will send you an SMS message with a code to enter to login. One weakness in the SMS approach is that phone numbers can be transferred to a malicious party sometimes just by calling and asking the phone company to do this and providing some personal information. Another weakness is that more sophisticated attackers may be able to clone your phone number and then receive SMS messages sent to you. Google authenticator (TOTP) solves some of these issues by generating the code on your phone itself using a private key. Now that the background is covered we can set this up on your OnlyKey. No phone or app required for setting this up on your OnlyKey but if you wish to maintain a backup of your two-factor authentication codes it may be a good idea to download the app and scan the QR code as a backup in case you lose your OnlyKey.*

{% include callout.html content="**Step 1. Enable Google Authenticator App on Website -** If you are unsure if the website you want to setup supports OTP check [here](http://www.dongleauth.info/). Assuming that the website supports Google Authenticator you can proceed to enable Google Authenticator. For example to do this for your Google Account you must first enable 2-Step Verification and then you select ''SETUP'' as shown below:" type="default" %}

{% include image.html file="image85.png" max-width="582" %}

As you go through the steps you will be prompted to scan a QR code (Looks like a square bar code). You can go ahead and scan the QR code using your smartphone Google Authenticator app if you wish to create a backup and then select "CAN'T SCAN IT" as shown below:

{% include image.html file="image6.png" max-width="392" %}

{% include callout.html content="**Step 2. Copy and Paste Code into Chrome App -**

Selecting ''CAN'T SCAN IT'' will display the private code. Select this text and copy it as shown below:" type="default" %}

{% include image.html file="image38.png" max-width="383"%}

Now open the OnlyKey Chrome Configuration App. With your correct PIN entered on the OnlyKey you are able to select the Slot to configure and paste this code into the field located next to ''Google Auth OTP'' as shown below:

{% include image.html file="image65.png" max-width="599" %}

Once you click submit your OnlyKey is ready to generate OTPs.

{% include callout.html content="**Step 3. Generate OTP -** Place your cursor in the ''Enter code'' field and press the button that corresponds to the slot that was set. In the example above we set slot 2a so we press the #2 button to generate the OTP." type="default" %}

{% include image.html file="image20.png" max-width="339" %}

{% include image.html file="image75.png" max-width="324" %}

Once your account has been verified you are all set. You can add a username and password to this slot so that you can do a one touch login. Keep in mind that the page may take a second or two to load where your 6 digit OTP is entered so set the delay accordingly, 4 - 5 seconds delay should be plenty of time.

{% include image.html file="image37.png" max-width="600" %}

Learn more about the implementation of Google Auth OTP [here.](#google-authenticator-totp)

#### Yubico® One-Time Password {#Yubico®-one-time-password}

*DISCLAIMER - Yubico® and Yubikey® are the registered trademarks of Yubico® AB. OnlyKey is not associated with or sponsored by Yubico® AB. Yubikey® OTP has been released by Yubico® as open source software with license found [here](https://github.com/Yubico/Yubico-c/blob/master/COPYING)*

{% include tip.html content="The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP." %}

*   First download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)
*   Go into Yubico® OTP and select ''Quick''

{% include image.html file="image43.png" %}

*   Select the ''Hide values'' checkbox and select ''Regenerate'' to create a Public Identify, Private Identity, and Secret Key.

{% include image.html file="image1.png" %}

*   Copy and paste these into the corresponding fields on the OnlyKey Configuration App.

{% include image.html file="image62.png" max-width="330" %}

*   Select ''Save to OnlyKey'' to write these values to your OnlyKey
*   Now your OnlyKey is ready to function in Yubikey® OTP mode
*   Just select a slot that you wish to use with Yubikey® OTP mode by selecting the radio button and then selecting ''Submit''. The Yubikey® OTP will be generated when the corresponding button is pressed.

{% include image.html file="image56.png" max-width="80" %}

The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP.

Learn more about Yubikey® OTP implementation [here.](#Yubico®-one-time-password)

#### Yubicloud (Not Officially Support)  {#yubicloud-not-officially-support}

Some online services use Yubicloud for authentication. Yubicloud is owned by Yubico® and 3rd party devices are not supported so OnlyKey is not supported on Yubicloud. However, 3rd party devices will technically work with Yubicloud as long as you own an actual Yubikey®.

The following instructions show you how to set up a 3rd party device on Yubicloud. This is for your information only and we do not recommend setting up a 3rd party device on Yubicloud. If you choose to follow this information to set up a 3rd party device on Yubicloud you choose to do so against our recommendations and at your own risk.

{% include callout.html content="**Step 1.** Download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)" type="default" %}

{% include callout.html content="**Step 2.** Go into Yubico® OTP and select ''Quick''" type="default" %}

{% include callout.html content="**Step 3.** Insert Yubikey®, select a configuration slot, and click ''Write configuration'' button" type="default" %}

{% include image.html file="image5.png" max-width="90" %}

{% include callout.html content="**Step 4.** Set the values shown in the Public Identity, Private Identity, and Secret Key to your 3rd party device." type="default" %}

{% include callout.html content="**Step 5.** Once this is complete select ''Upload to Yubico®''" type="default" %}

{% include callout.html content="**Step 6.** This will open a web browser, to complete the registration enter the OTP in the ''OTP from the Yubikey®'' field by pressing the button on your 3rd party device." type="default" %}

{% include image.html file="image46.png" %}

{% include callout.html content="**Step 7.** Once the form is complete enter the Captcha and select Upload AES key." type="default" %}

{% include callout.html content="**Step 8.** Now you can test your OTP on the site [https://demo.Yubico®.com/](https://demo.Yubico®.com/)" type="default" %}

{% include image.html file="image51.png" %}

#### Universal 2nd Factor (U2F) {#universal-2nd-factor-u2f}

{% include note.html content="The OnlyKey comes pre-loaded with an attestation certificate that can be used or you can load a custom certificate and private key." %}

In order to Load your own custom U2F certificate to OnlyKey see the certificate generation guide [here](https://docs.google.com/document/d/1LE09BB2ULGblc--3Ttut66NVMJk698LHp0f3DeRdr7w/edit?usp=sharing)

OnlyKey works just like any other U2F token. Follow the steps below to configure a slot to use U2F.

{% include callout.html content="**Step 1.** Select a slot that you wish to use with U2F mode by selecting the radio button and then selecting ''Submit''." type="default" %}

{% include image.html file="image34.png" max-width="90" %}

{% include callout.html content="**Step 2.** Go to the website that you wish to register a new security token and when you select to register a token you will notice the OnlyKey light flashing (Blue for OnlyKey Color) on and off. Press the button corresponding to the slot you set to U2F in step 1 to register token." type="default" %}

{% include callout.html content="**Step 3.** Once registered, your token can be used to authenticate by pressing the button. You can also add username and password to this slot to have a one touch login." type="default" %}

Learn more about OnlyKey's implementation of U2F [here.](#universal-2nd-factor-authentication-u2f)

### Using OnlyKey With A Software Password Manager {#using-onlykey-with-a-software-password-manager}

OnlyKey stores up to 24 unique accounts in offline storage and can be used to secure an unlimited number of accounts if used in conjunction with a software password manager. For example, set one of the OnlyKey slots to Dashlane, Google (Smart Lock), Lastpass, etc. enable 2-factor on this slot and then use your OnlyKey to unlock your software password manager. This way you can keep your most valuable accounts in offline storage and everything else in the software password manager.

{% include tip.html content="This way you can keep your most valuable accounts in offline storage and everything else in the software password manager." %}

#### LastPass {#lastpass}

LastPass supports both Google Authenticator and Yubico® OTP. Google Authenticator is supported in the free version of LastPass and Yubico® OTP is supported in the premium version of LastPass.

To protect LastPass account with Google Authenticator 2FA follow the steps below.

{% include callout.html content="**Step 1.** Go into Account settings-> Multi-factor Options and select the edit button in the Google Authenticator column." type="default" %}

{% include image.html file="image71.png" max-width="495" %}

{% include callout.html content="**Step 2.** Change to enabled and select View button next to Private Key" type="default" %}

{% include image.html file="image7.png" max-width="351" %}

{% include callout.html content="**Step 3.** You will be prompted to enter your master password and then the key is displayed." type="default" %}

{% include image.html file="image11.png" max-width="369" %}

{% include callout.html content="**Step 4.** Copy and paste the key into the Google Auth OTP field of the OnlyKey app for the slot that you want to set up." type="default" %}

{% include image.html file="image53.png" max-width="415" %}

{% include callout.html content="**Step 5.** Make sure to check the radio button next to Google Auth OTP and select Submit." type="default" %}

{% include callout.html content="**Step 6.** Go back to the LastPass app and select Update. You will be prompted for your password again and then your current verification code. Click inside the verification code box and press the button assigned to the slot you set up on your OnlyKey to type out the verification code." type="default" %}

{% include image.html file="image74.png" max-width="430" %}

{% include image.html file="image13.png" max-width="624" %}

{% include image.html file="image10.png" max-width="400" %}

#### DashLane {#dashlane}

DashLane supports Google Authenticator, Yubico® OTP, and U2F. The choice is yours but for beginners Google Authenticator is the best option.

#### Google SmartLock {#google-smartlock}

SmartLock is a new password manager that is available in Google Chrome. Since this uses a Google account it supports Google Authenticator or U2F. The choice is yours but for beginners Google Authenticator is the best option.

## Preferences {#preferences}

OnlyKey has several customizable preferences that can be accessed from the preferences tab of the configuration app.

{% include image.html file="image63.png" %}

### Configurable Inactivity Lockout Period {#configurable-inactivity-lockout-period}

This is the amount of time that the OnlyKey should remain unlocked while not being used. The default value is 30 minutes and the maximum is 255 minutes (about 4 hours). To disable lockout altogether set the lockout to 0.

### Configurable Keyboard Type Speed {#configurable-keyboard-type-speed}

Setting a custom type speed may be desirable in cases where the application you are using can not keep up with fast typing. Or if you don't use any applications with type speed restrictions you can have the text typed at top speed for the fastest logins. Setting value to 1 will result in very slow type speed of about one character a second, setting value to 10 will result in very fast type speed that will type almost instantly.

### Configurable Wipe Mode {#configurable-wipe-mode}

**Use Case #1** - If you are using the plausible deniability feature there is one scenario where an adversary may be able to determine that you were using the plausible deniability feature. This is possible if the adversary enters 10 incorrect PINs causing your OnlyKey to wipe all data and then they go to reconfigure the PINs. The adversary would be able to set both a regular PIN and PD PIN on the newly wiped OnlyKey and thus they would be able to conclude that you have the Standard Edition firmware. At this point the device is wiped the adversary would not have access to any sensitive information but the adversary would know that your device is capable of encryption which in some areas may be undesirable. To address this issue you can now set the wipe mode of your OnlyKey to Full Wipe. Given the same scenario with Full Wipe set when 10 incorrect PINs are entered the device will completely wipe all information including the firmware from your OnlyKey. No useful information would be available to an adversary concerning what firmware you were running and in order to use the device new firmware must be loaded.

**Use Case #2** - You are just really paranoid and want to erase any trace of your OnlyKey when a factory default occurs. Doing a full wipe is one way to be absolutely sure that everything including the firmware has been eliminated from your device.

### Configurable Keyboard Layouts {#configurable-keyboard-layouts}

We now support changing your keyboard layout on the fly through the Chrome app no firmware reload required. Traveling to France from the US? No problem just set the OnlyKey keyboard to French and change it back to US when you return. Here are the options supported for international keyboards:

*   US_ENGLISH
*   CANADIAN_FRENCH
*   CANADIAN_MULTILINGUAL
*   DANISH
*   FINNISH
*   FRENCH
*   FRENCH_BELGIAN
*   FRENCH_SWISS
*   GERMAN
*   GERMAN_MAC
*   GERMAN_SWISS
*   ICELANDIC
*   IRISH
*   ITALIAN
*   NORWEGIAN
*   PORTUGUESE
*   PORTUGUESE_BRAZILIAN
*   SPANISH
*   SPANISH_LATIN_AMERICA
*   SWEDISH
*   TURKISH
*   UNITED_KINGDOM
*   US_INTERNATIONAL
*   CZECH
*   SERBIAN_LATIN_ONLY

## Encryption Keys {#encryption-keys}

OnlyKey makes encryption keys easier and by storing them offline, protected even if the computer using the keys is compromised.

### Key FAQ {#key-faq}

**What is a key?**

In the simplest terms an encryption key is something you have that allows you to encrypt data. This data could be emails, files, or anything really. Every time you browse to a secure website there are keys being used in the background to encrypt the information you send so that only you and the website can see the information.

**Why does protecting private keys matter?**

You may hear the term private key being used sometimes, we will not get into the details here but there are plenty of places to read further on this topic online. For our purposes here a private key is used to read the secure messages / data that someone sends you. Only you should have access to this key because anyone with access to the key can read all messages sent to you in the past or in the future. This is why it is important to protect the key from exposure and why storing it on the OnlyKey is better than on your computer somewhere. If it's on your computer and your computer is hacked then all past and future messages you send may be read by the hacker.

**What does OnlyKey use keys for?**

The OnlyKey stores private keys. These private keys are used for four different purposes.

1.  **Secure Encrypted Backup** - OnlyKey allows using RSA or ECC private keys to backup your OnlyKey. This will backup everything including your stored accounts, preferences, and other keys to an encrypted text file. For more information see [Secure Encrypted Backup](#secure-encrypted-backup-anywhere).
1.  **SSH Authentication** - OnlyKey allows using ECC private keys for SSH authentication. Using the OnlyKey agent ssh authentication can be accomplished by storing a key on the OnlyKey and setting it as an authentication key. For more information see [SSH Authentication](#ssh-login).
1.  **Email/File Decryption** - Using the OnlyKey PGP Message Tool, the OnlyKey supports decryption of email and files using OpenPGP (PGP/GPG compatible). This feature is currently released as experimental, to try it out we recommend encrypting emails with Mailvelope (Using RSA 4096 Key) and decrypting with the OnlyKey PGP Message Tool. More to come here we are looking to partner to support a web based OpenPGP solution.
1.  **Email/File Signing** - Using the OnlyKey PGP Message Tool, the OnlyKey supports signing of email and files using OpenPGP (PGP/GPG compatible). This feature is currently released as proof of concept and is not available for general use.

Learn more about keys feature [here.](#keys-feature)

### Generating Keys {#generating-keys}

If you are already familiar with PGP/GPG and already have keys ready to use you can jump ahead to the

[Loading Keys](#heading=h.ym6z4k6k0sud) section.

If this is your first time creating keys or if you would like to create new keys the method we will be using just requires a web browser and the Mailvelope extension/plugin. Instructions are for Chrome browser but this could also be accomplished using Firefox browser.

{% include warning.html content="Only generate keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)" %}

{% include callout.html content="**Step 1.** Open Chrome and then open this link to go to the[ Mailvelope Extension in the Chrome Web Store.](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke) Click ADD TO CHROME, and then Add extension to add the extension to Chrome." type="default" %}

{% include image.html file="image81.png" max-width="525" %}

{% include image.html file="image57.png" max-width="314" %}

{% include callout.html content="**Step 2.** Now a small lock and key will show up in the top right of the Chrome browser. Click the lock and then click Options." type="default" %}

{% include image.html file="image58.png" max-width="312" %}

{% include callout.html content="**Step 3.** On the page that opens up click Generate Key" type="default" %}

{% include image.html file="image39.png" max-width="513"%}

{% include callout.html content="**Step 4.** Fill in the name, email, and password you want to be assigned to your key. You can uncheck Upload public key to Mailvelope Key Server if you wish. Finally, click generate to create your key." type="default" %}

{% include image.html file="image8.png" %}

{% include callout.html content="**Step 5.** When you see Success! Click Display Keys and then click on the name of the key you created." type="default" %}

{% include image.html file="image30.png" %}

{% include callout.html content="**Step 6.** Click on Export, then click Private, then click save to save a local copy of your encrypted private key." type="default" %}

{% include important.html content="It is recommended to keep an offline copy of this in a secure location. For example, you could copy this to a USB flash drive or CD/DVD and then store it in a safe. You will need this key and the password you used when you created it to read encrypted messages, there is no way to recover this key if you lose it." %}

{% include image.html file="image68.png" max-width="434" %}

### Loading RSA Keys {#loading-rsa-keys}

{% include callout.html content="**Step 1.** Starting from the last step of the Generating Keys section, select all of the text in the Private box (CTRL+A), and copy the text (CTRL+C)." type="default" %}

{% include image.html file="image15.png" max-width="465" %}

{% include callout.html content="**Step 2.** Click on the Keys tab of the OnlyKey Chrome App." type="default" %}

{% include callout.html content="**Step 3.** Put the OnlyKey into config mode doing the following" type="default" %}

*   Ensure OnlyKey is unlocked
*   Hold the 6 button down for more than 5 seconds, and then release, you will see the light turn off.
*   Re-enter your PIN, you will see the OnlyKey LED fade in and out continuously (Red if OnlyKey Color) while in config mode.

{% include callout.html content="**Step 4.** Paste the copied private key into the RSA Private Key box and then enter the same Passphrase you used when you generated your private key." type="default" %}

Select the slot where you would like to store this key, there are 4 RSA slots available.

Select the key features (what you want to use the key for) such as backup, signature, decryption, authentication. You can select them all but only one key can be set as the backup key, if you load a new key and set it as backup it will be the backup key and the old key will no longer be used for backup.

{% include image.html file="image19.png" %}

{% include callout.html content="**Step 5.** Click Save to OnlyKey, then select primary or subkey. The primary key is typically used to sign other keys so you will generally want to load the subkey(s)." type="default" %}

{% include image.html file="image87.png" max-width="349" %}

{% include callout.html content="**Step 6** Click Save, and you should see the message Successfully set RSA Key." type="default" %}

### Loading ECC Keys  {#loading-ecc-keys}

Loading ECC keys is a more advanced topic and requires familiarity with using terminal commands. ECC Keys are required for SSH Authentication and can be used for encrypted backups. Up to 32 ECC keys can be stored on OnlyKey.

The [OpenSSL ECC Key Generation guide here](https://docs.google.com/document/d/14RxoaqBLEhU8nizZeeB2RbZVJAG6sxXD7epkdt7Ukls/pub) provides instructions on how to generate OnlyKey compatible ECC keys and load them onto the OnlyKey

## Secure Encrypted Backup Anywhere {#secure-encrypted-backup-anywhere}

The Secure Encrypted Backup Anywhere feature allows you to backup OnlyKey on the go. The way that this works is that the OnlyKey encrypts everything on your OnlyKey using an encryption key and then types it out. This allows saving the backup in a text file or email on any computer.

**Before Getting Started**

The backup feature was introduced in firmware version v0.2-beta.4, but for users who use the second profile (plausible deniability mode) make sure your OnlyKey is running firmware v0.2-beta.5 or later. You can check this once your device is configured by looking in the bottom right corner of the OnlyKey Chrome App. If you are running an earlier version follow the

{% include image.html file="image83.png" %}

### Backup With OnlyKey App {#backup-with-onlykey-app}

{% include callout.html content="**Step 1.** First, you must have a backup key and have this set on your OnlyKey. Follow the instructions in the [Generating Keys](#generating-keys) section to create a new key and then follow the instructions in the [Loading Keys](#loading-rsa-keys) section to load and set as backup key." type="default" %}

{% include callout.html content="**Step 2.** Click on the Backup/Restore tab of the OnlyKey Chrome App." type="default" %}

{% include callout.html content="**Step 3.** Click inside the Backup data box and then hold down the 1 button on your OnlyKey for 5 seconds or more and then release. This will type out an encrypted backup of your OnlyKey configuration into the box. Select save file to save the backup file which has a timestamp so you can keep track of the latest backup file." type="default" %}

{% include image.html file="image78.png" max-width="550" %}

{% include tip.html content="Backup can take a long time if your Keyboard Type Speed is set to a low setting. To speed this up go to Preferences in the OnlyKey Chrome app and select a higher setting, 9 usually works well" %}

### Backup Without OnlyKey App {#backup-without-onlykey-app}

The process is the same to backup without the app. Instead of clicking in the Backup data box you could click into any text editor like notepad and when the backup is complete save the file using whatever filename you prefer. In the same way you could also click into any email client and then when the backup is complete send the email to yourself or someone else.

{% include note.html content="While the backup is already encrypted using what would be considered as strong encryption, we recommend due to the sensitive nature of the information to double encrypt it before sending over insecure means. For example, if you already use encrypted email like PGP/GPG then encrypt the email before sending. Or if storing in some kind of cloud storage like Dropbox then encrypt the backup using Veracrypt/Truecrypt, encrypted zip file, or equivalent. This will ensure that not only is the backup given extra protection but will ensure that any snooping eyes would not even be able to tell that the encrypted file contains an OnlyKey backup." %}

## Restore From Backup {#restore-from-backup}

Using the backup file created in the Secure Encrypted Backup Anywhere section, we can restore an OnlyKey from backup. This also allows restoring to a different OnlyKey or a second OnlyKey in order to have an extra.

{% include note.html content="The way that a restore works is that it overwrites the current information on your OnlyKey with the information stored in the backup. So if you for example have a backup file that contains a password in slot 1 and you do a restore to an OnlyKey that already has a username and password in slot 1 the result would be that the username would remain unchanged and the password would be overwritten." %}

{% include callout.html content="**Step 1.** Ensure that a PIN is set on the target OnlyKey by completing the [Initial Setup](#initial-setup) section and ensure that the same key is loaded onto the OnlyKey that was used to backup by following the steps in the [Loading Keys](#loading-rsa-keys) section." type="default" %}

{% include callout.html content="**Step 2.** Put the OnlyKey into config mode by holding the 6 button down for more than 5 seconds, and then re-entering your PIN. You will see the OnlyKey LED fade in and out continuously while in config mode." type="default" %}

{% include callout.html content="**Step 4.** Click on the Backup/Restore tab of the OnlyKey App and then click Choose File to select your OnlyKey backup file. Click Restore to OnlyKey." type="default" %}

If you used the OnlyKey App to create the backup then the name of this file will be ''onlykey-backup-<timestamp>.txt''. The timestamp can be used to make sure you are loading the latest backup.

{% include image.html file="image45.png" %}

{% include callout.html content="**Step 5.** Restore may take a minute or two depending on the amount of data to restore. You will know that the restore is complete when the OnlyKey starts blinking continuously." type="default" %}

## Loading OnlyKey Firmware {#loading-onlykey-firmware}

{% include tip.html content="Can I load the Standard Edition firmware on an International Travel Edition OnlyKey?" %}

*Yes, you can load the Standard Edition firmware on an International Travel Edition OnlyKey or vice versa the hardware is identical. For that matter you can load any custom firmware you want on it.*

1.  Insert OnlyKey into USB port
2.  Download and install [Teensy Loader](https://www.pjrc.com/teensy/loader.html)
3.  Determine which version of OnlyKey you have and download firmware below

{% include image.html file="image25.jpg" max-width="285" %}

<table>
  <tr>
   <td colspan="2" >OnlyKey Color (Has a square LED)              OnlyKey Original (Has text "LED" visible)
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.5/OnlyKey_Beta5_STD_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.5/OnlyKey_Beta5_STD.cpp.hex">here</a>
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.4/OnlyKey_Beta4_IN_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.5/OnlyKey_Beta5_IN-TRVL.cpp.hex">here</a>
   </td>
  </tr>
</table>


4.  You can ensure that your copy of the firmware has not been tampered with by checking to see if the SHA256 hash of the downloaded file matches these


<table>
  <tr>
   <td>
File Name
   </td>
   <td>SHA256 Hash
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta5_STD.cpp.hex
   </td>
   <td>2eb241a376b2493b2fd57d33ee2d30b2a8ac9262f2ace44f2b433759b5af7e33
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta5_STD_Color.cpp.hex
   </td>
   <td>70a350f6f143090b63aefff5aad192a18940e3f20ee6649ebe905e0b186656d6
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta5_IN-TRVL.cpp.hex
   </td>
   <td>f0f7a83162578b35d82af9a4e023564fe5a5b7f8e74d50c7604147c1a6ce15a4
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta5_IN-TRVL_Color.cpp.hex
   </td>
   <td>0b9af89af7c37ee97af05a7f0605e5ac9a510b7cd402753e8095d99cd958d3ad
   </td>
  </tr>
</table>


{% include tip.html content="To do this in Windows open a command prompt and type 'certUtil -hashfile pathToFileToCheck SHA256'. To do this in Linux open a terminal and type 'sha256sum pathToFileToCheck'. Where pathToFileToCheck is replaced with the path of the file you are checking." %}

5.  In Teensy Loader select File -> Open HEX File. Then select the firmware you downloaded and click open.
6.  Now the firmware should appear at the bottom of the Teensy Loader application.

{% include image.html file="image67.png" max-width="213" %}

{% include note.html content="If a message prompts that 'HEX file is too large' ensure that your OnlyKey is plugged in." %}

7.  In order to enable the OnlyKey to upload the new firmware a jumper (Paperclip, aluminum foil etc) must make contact between the two small copper color circles shown while the OnlyKey is plugged into the USB port.

{% include tip.html content="If your OnlyKey has a case on it you can just slip the two corners out of the case without completely removing the case." %}

{% include image.html file="image16.png" %}

8.  With the Teensy Loader in the foreground, you should now see the Teensy Loader progress bar and then a reboot complete appear in the Teensy Loader which indicates that the firmware has loaded successfully.

{% include image.html file="image48.png" max-width="200" %}

{% include image.html file="image2.png" max-width="202" %}

**Under The Hood** - One of the great things about this method of firmware loading is that you, the user, can load your own firmware and in doing so be sure that your OnlyKey has not been tampered with. What actually happens when you load the firmware is that a mass erase is completed first. What this means is that all data is completely wiped, and then the new firmware is loaded. This way if say you suspect that your device was tampered with by someone or you just like to know for sure you can just re-load the firmware yourself.

## OnlyKey Accessories / Mobile Support {#onlykey-accessories-mobile-support}

### OnlyKey Case {#onlykey-case}

The OnlyKey silicon case provides additional protection and gives OnlyKey a polished appearance. To put on the case just carefully slide the case over the OnlyKey as shown below:


<table>
  <tr>
   <td>
{% include image.html file="image40.jpg" max-width="121" %}
   </td>
   <td>
{% include image.html file="image80.jpg" max-width="292" %}
   </td>
   <td>
{% include image.html file="image49.jpg" max-width="227"%}
   </td>
  </tr>
</table>


### Android Support {#android-support}

Android is supported by using a USB on-the-go (OTG) adapter. There are two types of OTG adapters that can be purchased USB Micro and USB C.

Since the OnlyKey is essentially detected by Android as a keyboard, the username / password / Yubikey® OTP login features will work. Unfortunately, there is no support for U2F or Google Authenticator currently on Android.

#### [USB Micro to USB 3 OTG adapter with keychain](https://www.amazon.com/dp/B071Y4CZV9) {#usb-micro-to-usb-3-otg-adapter-with-keychain}

**Supports Samsung Galazy S7 S6 S5 S4 S3 Note 2 Note, HTC One X, HTC One S, Moto G5, Moto X, or other Android device with USB Micro and OTG support.**[https://www.amazon.com/dp/B071Y4CZV9](https://www.amazon.com/dp/B071Y4CZV9)

This solution is ideal as it can be carried on a keychain for on the go use.


<table>
  <tr>
   <td>
{% include image.html file="image55.png" max-width="221"%}
   </td>
   <td>
{% include image.html file="image26.jpg" max-width="204" %}
   </td>
  </tr>
</table>


#### [USB C to USB 3 OTG adapter](https://www.aliexpress.com/item/ONEPLUS-3-3T-Type-C-Dash-Cable-10CM-USB-Female-TO-TYPE-C-OTG-Converter-Data/32790621768.html) {#usb-c-to-usb-3-otg-adapter}

*Supports OnePlus2/3, Nexus 5X, LG G5, HTC 10 or other Android device with USB C and OTG support.*

[https://www.aliexpress.com/item/ONEPLUS-3-3T-Type-C-Dash-Cable-10CM-USB-Female-TO-TYPE-C-OTG-Converter-Data/32790621768.html](https://www.aliexpress.com/item/ONEPLUS-3-3T-Type-C-Dash-Cable-10CM-USB-Female-TO-TYPE-C-OTG-Converter-Data/32790621768.html)

{% include image.html file="image73.png" max-width="221" %}

### iPhone/iPad Support (Experimental) {#iphone-ipad-support-experimental}

This is currently in the experimental phase so there is not official support. User's have claimed to successfully use OnlyKey on their iPhones using a USB adapter like the one shown below.

{% include image.html file="image29.png"  max-width="248" %}

[https://www.amazon.com/gp/product/B00S9I7EPO/](https://www.amazon.com/gp/product/B00S9I7EPO/)

Since the OnlyKey is essentially detected by iPhone/iPad as a keyboard then the username / password / Yubikey® OTP login features will work. Unfortunately, there is no support for U2F or Google Authenticator currently.

### Keychain Accessory Options {#keychain-options}

#### Standard Keychain

The standard keychain that comes with the OnlyKey is plastic which provides good durability and an easy quick disconnect for convenient access.

If you ever need a replacement or extra keychain one can be purchased using the link below:

<div>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="FCWD7D8B4G7VY">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" max-width="1" height="1">
</form>
</div>

#### Keychain DIY Customize

If you don't like how far your OnlyKey hangs off of your keyring then follow these instructions to create a nice short keychain. You can do this yourself all that is needed is a pair of scissors.

{% include callout.html content="**Step 1.** As shown in the diagram below, pull excess through clip opening and tie a second knot approximately at the length of the end of the plastic attachment." type="default" %}

{% include image.html file="image64.jpg" max-width="156" %}

{% include callout.html content="**Step 2.** Put the knot back through the clip opening and remove the keychain to make sure there is enough length left to fit over plastic attachment, if not increase length and re-tie knot." type="default" %}

{% include image.html file="image70.jpg" max-width="179" %}

{% include callout.html content="**Step 3.** Finally, cut off the first knot and enjoy your optimum length keychain." type="default" %}

{% include image.html file="image9.jpg" max-width="134" %}

#### Other Keychain Options

Various other Keychains may be used some ideas are shown below:

{% include image.html file="keychain.jpg" %}

{% include image.html file="keychain2.jpg" %}

## Troubleshooting {#troubleshooting}

### Common Issues {#common-issues}

Below is a list of common issues and solutions.


<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Solution</strong>
   </td>
  </tr>
  <tr>
   <td>Accidentally press OnlyKey button
   </td>
   <td>All OnlyKeys now include a silicone case accessory, this is also available for purchase on Amazon. Using the case makes it difficult to inadvertently press a button.
   </td>
  </tr>
  <tr>
   <td>Not working with certain sites / Not entering data in correct field
   </td>
   <td>We often get customers that ask how to set up a specific site with OnlyKey. There are several examples listed in the table provided in the section "Set up a slot". If you have a use case that is not covered by this please open a new issue on the support forum.
   </td>
  </tr>
  <tr>
   <td>Missing characters while typing / typing too fast / typing too slow
   </td>
   <td>Adjust the type speed in <a href="#configurable-keyboard-type-speed">preferences.</a>
   </td>
  </tr>
  <tr>
   <td>Google Authenticator types NOTSET instead of OTP code
   </td>
   <td>This occurs when the OnlyKey does not have the time set. Time is set from the OnlyKey Chrome App which occurs automatically. Chrome and the OnlyKey Chrome App must be installed for the code to be generated.
   </td>
  </tr>
  <tr>
   <td>Entering data into OnlyKey App and selecting submit but the data is not saved
   </td>
   <td>The check box next to the data must be selected.
   </td>
  </tr>
  <tr>
   <td>Yubico® OTP Error (LastPass)
   </td>
   <td>The majority of Yubikey® OTP applications require Yubicloud setup including LastPass. See Yubicloud section of User's Guide.
   </td>
  </tr>
</table>


If you have an issue not listed here please reference the online support forum [here.](https://groups.google.com/forum/#!forum/onlykey)

## Additional Information {#additional-information}

### Alternate Backup Method {#alternate-backup-method}

This method has been replaced by the built-in OnlyKey secure backup method but is provided here for reference.

### Standard Edition OnlyKey Backup using Veracrypt/Truecrypt 7.1a {#standard-edition-onlykey-backup-using-veracrypt-truecrypt-7-1a}

[https://youtu.be/NYh5eZS6gsc](https://youtu.be/NYh5eZS6gsc)

### Plausible Deniability OnlyKey Backup using Veracrypt/Truecrypt 7.1a {#plausible-deniability-onlykey-backup-using-veracrypt-truecrypt-7-1a}

[https://youtu.be/vrhZyddwzxQ](https://youtu.be/vrhZyddwzxQ)

### Features {#features}

#### Password Manager {#password-manager}

The primary benefit to having an OnlyKey is that instead of having to remember all of your passwords you can just remember one 7 - 10 digit PIN. You can set up 12 unique accounts using strong 32 character passwords along with the usernames and two-factor authentication. This way whenever you need to log in you just detach the OnlyKey from your keyring and enter your PIN to unlock your passwords. The Onlykey automatically types them into the login fields for you with the press of a button.

#### Self-Destruct {#self-destruct}

Wouldn't it be nice to know that your data is protected, and if you are in a pinch or forced to give up your PIN there is an easy way to make sure that your data does not get into the wrong hands? That is what the Self-Destruct feature is all about. You set this PIN code whenever you first setup your OnlyKey and then if you or anyone else ever enters it the OnlyKey wipes all of the sensitive data you have stored on it.

#### Plausible Deniability (International Travel Edition and Standard Edition of Firmware) {#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware}

Wouldn't it be nice to be able to be able to travel to a country where encryption is illegal or to a country where it is against the law to refuse to give up your password to authorities and be able to comply without actually giving any access to your accounts? That is what the plausible deniability feature is all about. OnlyKey allows the use of a hidden profile and a fake profile (Plausible Deniability Mode) that essentially provides a cover story. If compelled to do so a fake profile can be activated by entering a plausible deniability PIN code and the goal of this feature is that there is no proof that the hidden profile even exists. In fact since the international travel edition of the OnlyKey ships without the plausible deniability feature there is no way to know if you are using an OnlyKey with the international travel edition firmware or the Standard Edition firmware in plausible deniability mode. When the Standard Edition OnlyKey is in plausible deniability mode it is essentially indistinguishable from an International version OnlyKey.

Now that you understand the basics of how the plausible deniability feature works the reason for having two versions of firmware becomes more clear. The genius behind the plausible deniability feature that makes it possible is a three part solution.

Part 1. We ship two versions of the OnlyKey, an international travel edition and a standard edition. We can ship the international travel edition anywhere in the world because this version is basically just a password manager that does not utilize encryption (No U.S. export restrictions). The Standard Edition on the other hand does utilize encryption and has the plausible deniability feature that when activated makes the OnlyKey appear to be running the international travel edition firmware.

Part 2. Both versions utilize physical flash security to essentially lock the information stored on the devices so there is no way to know what version a device has loaded. We have taken great care to ensure that the plausible deniability mode on the Standard Edition Version acts exactly the same as the International Travel Edition.

Part 3. We make it easy for user's to load whatever version of the firmware they want. International customers can easily load the Standard Edition and vice versa. Even we have no way of knowing what version of firmware a device has loaded.

Anyone can view the open source firmware [here](https://github.com/trustcrypto/OnlyKey-Firmware/releases) and verify that this is the case. Since there are devices that ship without the ability to perform encryption it is plausible that your OnlyKey is one of these, just a basic password manager. There is not a way of knowing that there is another hidden profile that is only activated if you know the secret PIN. Best of all, changing the version of firmware on your device is easily accomplished as the OnlyKey is field upgradable. There is a section in the user's guide [here](#loading-onlykey-firmware) that provides instructions on flashing whichever Onlykey firmware you want.

So now you can see how a user if compelled to do so could say ''I just have a basic password manager, here is my PIN code'' and it would be completely plausible that they do in fact just have a basic password manager. To be even more plausible the user should set up actual accounts with real credentials which work to log into websites.

Are these the user's real accounts or are really just dummy accounts and there is another hidden profile? There is not a way of knowing.

Alternatively, if you don't need the second profile for plausible deniability you can just use it as a second profile to store additional accounts, such as a personal profile and keep your work accounts in the primary profile.

For more information on encryption and international travel see [https://www.princeton.edu/itsecurity/encryption/encryption-and-internatio/](https://www.princeton.edu/itsecurity/encryption/encryption-and-internatio/)

Q - When should I use the plausible deniability PIN?

A - Whenever you wish for your OnlyKey to appear to be a simple password manager that does not utilize encryption. Form more information on Plausible Deniability encryption see [https://en.wikipedia.org/wiki/Deniable_encryption](https://en.wikipedia.org/wiki/Deniable_encryption)

Q - When should I not use the plausible deniability PIN?

A - Plausible deniability is only good if you are in a country where your worst case scenario is that you will be fined for using encryption. If someone is holding a gun to your head or there is risk of torture plausible deniability is pretty much useless. For more information on why see this [https://en.wikipedia.org/wiki/Rubber-hose_cryptanalysis](https://en.wikipedia.org/wiki/Rubber-hose_cryptanalysis).

#### Hardware Security {#hardware-security}

When it comes to hardware security there are terms such as tamper resistant, tamper proof, and secure element. These terms are mostly marketing terms as anyone with in-depth knowledge of hardware security understands there is no such thing as tamper proof, and tamper resistant can mean something as simple as the device being coated in plastic that can [easily be removed](http://www.hexview.com/~scl/neo/). The National Institute of Standards and Technology has established some standards for the SECURITY REQUIREMENTS FOR CRYPTOGRAPHIC MODULES in the publication [here](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf). This standard defines 4 security levels.

A simplified explanation of these levels can be found on [wikipedia](https://en.wikipedia.org/wiki/FIPS_140-2) (Notice that even the highest security level is not tamper proof)

While we do not plan on pursuing FIPS certification we can attest that OnlyKey meets many of the requirements of FIPS certification including using a FIPS approved algorithm (FIPS 140-2 Level 1 - AES-256 is an approved algorithm). The coating of the OnlyKey would be difficult to remove and not easily dissolvable with chemicals like plastic coatings. In our testing chemical removal of the coating results in noticeable damage to the OnlyKey that results in evidence that it was tampered with (FIPS 140-2 Level 2). In the same way attempts to manually delaminate the potting compound in our testing will also delaminate electronic components rendering the device inoperable and creates visible damage to the silkscreen/soldermask layers.

In addition to this, we enable the [Kinetis flash security](http://cache.nxp.com/files/microcontrollers/doc/app_note/AN4507.pdf) the first time the device is used. This ensures that the firmware, and all sensitive information stored in memory is essentially locked down. The ability to read or write to the chip from external sources is disabled. The only way to clear this so the OnlyKey can load new firmware is to place a jumper between the two touch points of the OnlyKey shown here:


{% include image.html file="image16.png" %}

When a connection is placed between these two points it does two things, first it proves that a user is present there is no way for malware running on the connected computer to do this, second it does a mass erase of the OnlyKey. A mass erase essentially wipes everything and returns the chip to a factory default state. Once this is complete new firmware can be loaded to the Onlykey.

If you would like to read more about the flash security features of the MK20 [here](https://www.pjrc.com/teensy/K20P64M72SF1RM.pdf) is a document that describes in detail. If you plan to mess around with the flash security features - WARNING - Changes to the flash security settings can brick your device. We tested this feature to ensure this does not happen but any changes you make to source code are at your own risk.

#### LED Definitions (OnlyKey Color) {#led-definitions-onlykey-color}

*   Steady Green Light = Unlocked
*   No Light = Locked
*   Single Yellow Flash = Button Pressed for PIN entry
*   3 Red Flashes = Wrong PIN
*   Continuous Red Flashes = Exceeded PIN tries
*   Continuous Green Flashes = Backup and restore is complete.
*   Blue Fade in and Fade out = U2F request
*   Purple Fade in and Fade out - Private key signing request (SSH or PGP)
*   Turquoise Fade in and Fade out - Private key decryption request
*   Red Fade in and Fade out - Device is in config mode

#### LED Definitions (Original OnlyKey) {#led-definitions-original-onlykey}

*   Steady Light = Unlocked
*   No Light = Locked
*   Single Flash = Button Pressed
*   3 Flash = Wrong PIN
*   Continuous Flash = Exceeded PIN tries
                    Or if you just did a backup and restore, the restore is complete.

*   Fade in and Fade out = U2F, SSH, or private key operation request
   Or if you have placed your device into config mode

#### Two-Factor Authentication {#two-factor-authentication}

There are 3 methods of two-factor authentication supported by Onlykey.

*   Google Authenticator (TOTP)
*   Universal 2nd Factor Authentication (U2F)
*   Yubico® One-Time Password

##### Google Authenticator (TOTP) {#google-authenticator-totp}

Google Authenticator is an application that implements TOTP security tokens from RFC 6238 in mobile apps made by Google, sometimes branded ''Two-step verification'' (or 2-Step Verification).

Quoting Wikipedia:

Typically, users will install the Authenticator app on their smartphone. To log in to a site or service that uses two-factor authentication, they provide user name and password to the site and run the Authenticator app which produces an additional six-digit one-time password. The user provides this to the site, the site checks it for correctness and authenticates the user.

For this to work, a set-up operation has to be performed ahead of time: the site provides a shared secret key to the user over a secure channel, to be stored in the Authenticator app. This secret key will be used for all future logins to the site.

With this kind of two-factor authentication, mere knowledge of username and password is not sufficient to break into a user's account. The attacker also needs knowledge of the shared secret key or physical access to the device running the Authenticator app. An alternative route of attack is a man-in-the-middle attack: if the computer used for the login process is compromised by a trojan, then username, password and one-time password can be captured by the trojan, which can then initiate its own login session to the site or monitor and modify the communication between user and site.

The service provider generates an 80-bit secret key for each user (whereas RFC 4226 §4 requires 128 bits and recommends 160 bits).[36] This is provided as a 16, 26 or 32 character base32 string or as a QR code.

As mentioned above the service provider generates a base32 string or a QR code. While the way you would set up the Google Authenticator app on your phone is typically to take a picture of the QR code you also have the option of displaying the base 32 string. This option is available when you are setting up an account there may be a link that says something like ''Can't read QR code'' that you have to click to show the base 32 key. You would then copy and paste this key into the the OnlyKey slot that you would like to use with this account.


{% include image.html file="image79.jpg" max-width="492" %}

And then press the OnlyKey button to output your 6 digit OTP into the passcode field to complete the setup. Now you can also go and set your username and password to this slot and have a complete one touch login with two-factor authentication.

Currently the Google Authenticator (TOTP) feature requires the Chrome app to be open.

##### Universal 2nd Factor Authentication (U2F) {#universal-2nd-factor-authentication-u2f}

OnlyKey's implementation of U2F started out with the open source implementation [here](https://github.com/yohanes/teensy-u2f). We then reviewed the model in use by Yubikey® [here](https://www.Yubico.com/2014/11/Yubicos-u2f-key-wrapping/). And came up with our own implementation of key wrapping that utilizes the open source [AES-256-GCM](https://github.com/rweather/arduinolibs) implementation we are using for encryption of local storage. When the Onlykey is first configured with a PIN, a random nonce is stored that is the SHA-256 hash of random values including hardware generated noise and the capacitive touch readings from a user's skin. The private key generated for U2F key handle encryption is generated from the SHA-256 hash of the random nonce and a unique Freescale chip ID that is hardcoded onto the processor at the factory. The U2F service also provides an AppID (that is tied to the URL of the site) and during registration the SHA256 hash of the AppID is used as the Initialization Vector for the AES-GCM encryption of the key handle. This ensures that the key handle is only valid for the particular combination of device (private key) and AppID that was created during registration. By using AES-256 in Galios Counter Mode and using SHA-256 our key wrapping implementation follows NIST (SP) 800 guidelines [NIST approved key wrapping](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar1.pdf) (See Table 7: Approval Status of Block Cipher Algorithms Used for Key Wrapping and Table 9: Approval Status of Hash Functions)

For the attestation certificates we allow users to import their own certificates. We do understand that the attestation certificate in other U2F tokens is hard coded and the user is unable to change this. There is an ongoing discussion of how you can have a closed source system (or U2F token) and truly be able to trust the security of that system. A closed source product is not verifiable, and requires you to trust that the vendor was not compelled to put a backdoor into the product. This is why we are using what may be the first open source implementation of U2F that supports user import of attestation certificates.

This all being said the implementation of U2F has not been certified by the FIDO Alliance as an approved token.

##### Yubico® One-Time Password {#Yubico®-one-time-password}

OnlyKey's implementation of the Yubico® OTP is based on the open source library provided by Yubico® [here](https://github.com/Yubico/Yubico-c). The one-time passwords generated by OnlyKey have been tested to be indistinguishable from the one-time passwords generated by a Yubikey®. However, some services like Yubicloud do not allow third-party devices and require a valid serial number from a Yubikey®. For example, you can test your OnlyKey with the [https://demo.Yubico.com/](https://demo.Yubico.com/) test site but you would be required to have a valid Yubikey® serial number to do so.

For more information on Yubico® OTP see [this](https://www.Yubico.com/products/services-software/personalization-tools/Yubikey-otp/)

#### Keys Feature {#keys-feature}

The keys feature allows you to use OnlyKey to store private keys that can be used for SSH authentication, OpenPGP Signing, OpenPGP Decryption, and secure OnlyKey backup. You can store 32 ECC private keys and 4 RSA private keys. Each key also has a label assigned to it so just like with slots, an identifier can be assigned to each key.

Under the hood -

*   Up to 32 ECC keys are supported of type curve25519, P256 (NIST), and secp256k1 (Used for Bitcoin)
*   Up to 4 RSA keys are supported with key sizes 1024, 2048, 3072, and 4096 bit keys.

{% include image.html file="image69.png" %}

Keys are loaded using the OnlyKey Chrome App. For a demonstration see [https://vimeo.com/210800252](https://vimeo.com/210800252)

#### SSH Login {#ssh-login}

SSH Authentication - Currently only ECC keys are supported for SSH authentication. Using the OnlyKey agent ssh authentication can be accomplished by storing a key on the OnlyKey and setting it as an authentication key. The benefit this provides is that your private key is never exposed on a computer where it can be compromised by hacker.

See [https://github.com/trustcrypto/onlykey-agent](https://github.com/trustcrypto/onlykey-agent)

#### Email/File Signing (OpenPGP) {#email-file-signing-openpgp}

Using the OnlyKey PGP Message Tool, the OnlyKey supports signing of email and files using OpenPGP (PGP/GPG compatible). This feature is currently released as proof of concept, additional work is needed to properly generate signatures that can be validated.

See [https://github.com/trustcrypto/python-onlykey](https://github.com/trustcrypto/python-onlykey)

#### Email/File Decryption (OpenPGP) {#email-file-decryption-openpgp}

Using the OnlyKey PGP Message Tool, the OnlyKey supports decryption of email and files using OpenPGP (PGP/GPG compatible). This feature is currently released as experimental, to try it out we recommend encrypting emails with Mailvelope (Using RSA 4096 Key) and decrypting with the OnlyKey PGP Messege Tool. The benefit this provides is that your private key is never exposed on a computer where it can be compromised by hacker.

See [https://github.com/trustcrypto/python-onlykey](https://github.com/trustcrypto/python-onlykey)

#### Config Mode {#config-mode}

This secondary feature has been added to provide additional protection against the following scenario:

Bob leaves his OnlyKey unlocked and plugged into his computer and walks away, Alice walks up and loads her key onto Bob's OnlyKey and sets this as the backup key and then uses this to create a backup. Alice now has the encrypted contents of Bob's OnlyKey and knows the key.

While Bob should not have left his device unlocked and unattended we still want to prevent this scenario so first a device must be in config mode to load keys or to restore from backup. To put a device in config mode hold the #6 button down for 5 seconds on an unlocked OnlyKey, then re-enter the PIN. This ensures that only someone who knows the PIN can select the private key used to create a backup.

{% include note.html content="Backups only supported on Standard Edition firmware and not while in plausible deniability mode. The reason is the backup requires encryption and plausible deniability requires being able to deny that any encryption is used." %}

For a demonstration of backup feature see [https://vimeo.com/210800252](https://vimeo.com/210800252)

#### Cryptographically Secure Random Number Generator {#cryptographically-secure-random-number-generator}

After much research it was concluded that Arduino and other microcontrollers such as MK20 are not ideal for generating truly random numbers. While the Arduino Reference Manual recommends using analog pins, which read random atmospheric noise to seed a PRNG, it was concluded that this method alone may not generate a cryptographically secure random number. The paper here goes into more detail - [http://benedikt.sudo.is/ardrand.pdf](http://benedikt.sudo.is/ardrand.pdf). A true random number generator uses non-deterministic sources to produce randomness. Thus, the random number generation function in use requires user provided entropy. This is similar to how TrueCrypt used mouse movements to generate entropy during key generation. The OnlyKey RNG function uses a combination of the entropy provided from two separate analog pins (atmospheric noise) and the user's key presses on the six capacitive touch sensors (conductivity of user's skin, duration of key press, number of key presses, conductivity of air).

Below is an example of values read from the analog 0 pin and the touchpins values, read once per second for 3 seconds without any user provided entropy.

Analog 0 Value = 123

Touchpin 1 Value = 552

Touchpin 2 Value = 553

Touchpin 3 Value = 607

Touchpin 4 Value = 700

Touchpin 5 Value = 662

Touchpin 6 Value = 723

Analog 0 Value = 87

Touchpin 1 Value = 553

Touchpin 2 Value = 555

Touchpin 3 Value = 610

Touchpin 4 Value = 700

Touchpin 5 Value = 663

Touchpin 6 Value = 724

Analog 0 Value = 242

Touchpin 1 Value = 552

Touchpin 2 Value = 553

Touchpin 3 Value = 605

Touchpin 4 Value = 699

Touchpin 5 Value = 662

Touchpin 6 Value = 723

Without any interaction from the user there is entropy generated from analog 0 and some entropy generated from the touchpins. The touchpin's values change slightly based on temperature, humidity, and no two pins have exactly the same sensing calibration. Below is an example of values read from the analog 0 pin and the touchpins, values read once per second for 3 seconds with user entering a three digit PIN.

Analog 0 Value = 221

Touchpin 1 Value = 551

Touchpin 2 Value = 559

Touchpin 3 Value = 6452

Touchpin 4 Value = 700

Touchpin 5 Value = 662

Touchpin 6 Value = 709

Analog 0 Value = 84

Touchpin 1 Value = 550

Touchpin 2 Value = 559

Touchpin 3 Value = 611

Touchpin 4 Value = 712

Touchpin 5 Value = 5684

Touchpin 6 Value = 729

Analog 0 Value = 130

Touchpin 1 Value = 550

Touchpin 2 Value = 553

Touchpin 3 Value = 609

Touchpin 4 Value = 6228

Touchpin 5 Value = 669

Touchpin 6 Value = 721

With user interaction, the touchpin values change significantly. Also the touchpins next to the button that was pressed change slightly just from the proximity of a user's finger to that button. As implemented, touchpin values are read from all six capacitive touch sensors once every ~10ms and users are required to have a PIN of 7 – 10 digits. During a typical login (One button press per second), this generates approximately 56 - 80 numbers based on the conductivity of a user's skin and 280 - 400 numbers based on the conductivity of the air around the buttons not being pressed. By performing xor and bitshift operations on these numbers we can generate a random number that is based on non-deterministic values that are completely unpredictable. Additionally, if a user enters an incorrect PIN this would generate even more entropy as this would require re-entering the PIN and during use the buttons are also pressed to select sites to authenticate to which generates constantly unpredictable entropy.

### Web Links {#web-links}

Documentation - [https://docs.crp.to](https://docs.crp.to)

FAQs - [https://docs.crp.to/faq.html](https://docs.crp.to/faq.html)

Forum -[ https://groups.google.com/forum/#!forum/onlykey](https://groups.google.com/forum/#!forum/onlykey)

Store –[ https://crp.to/ok](https://crp.to/ok)

Github –[ https://github.com/trustcrypto](https://github.com/trustcrypto)

Getting started with OnlyKey –[ https://crp.to/okstart](https://crp.to/okstart)

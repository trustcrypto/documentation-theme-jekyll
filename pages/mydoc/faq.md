---
title: OnlyKey FAQ
permalink: faq.html
sidebar: mydoc_sidebar
tags: [special_layouts]
keywords: frequently asked questions, FAQ, question and answer
last_updated: Jul, 13 2017
summary: Frequently Asked Questions
toc: false
folder: mydoc
---

<div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">What specifically are the differences between the Standard Edition firmware and the International Travel Edition firmware?</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                The International Travel Edition firmware is essentially a stripped down version of the Standard Edition firmware. The crypto libraries have been removed so that it will be a fully functional password manager but not utilize encryption and may be usable in countries where encryption is illegal.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Why have the two different versions of Firmware?</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                There are two big reasons to have the two separate versions of firmware. 1) The International Travel Edition is not subject to any export restrictions that would apply to export of crypto outside of the US since it performs no encryption. 2) By actually having a version in use that does not utilize encryption the plausible deniability feature is actually plausible. If for example all devices shipped with encryption and a plausible deniability mode it would not be plausible that a device does not perform encryption because anyone with the ability to search online would see that this is a feature available on all devices. By having this as a feature on some devices and other devices being legitimately without any encryption capabilities it is plausible that your device does not utilize encryption.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">What does entering the self destruct PIN do?</a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse noCrossRef">
                            <div class="panel-body">
                                Depending on what your wipe mode is set to it either wipes all sensitive data (overwrites where your usernames, passwords, keys etc. are stored) or if you are using full wipe mode it does a complete erase of the OnlyKey including sensitive data and all firmware (this requires reloading firmware).
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">When should I use the self destruct PIN?</a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <div class="panel-body">
                                Whenever you wish to wipe all sensitive data from the OnlyKey and restore it to a factory default state.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">What does entering the plausible deniability PIN do?</a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse">
                            <div class="panel-body">
                                This activates a second profile that is designed to be indistinguishable from the OnlyKey (International Travel Edition) firmware while actually running the OnlyKey (Standard Edition) firmware. The objective of this feature is to allow travel overseas to areas where devices using encryption might not be allowed or where it is mandatory to give up passwords/keys. The user can load the International Travel Edition firmware on thier OnlyKey along with some accounts they don't really care about before crossing a border and then if they are asked if they have anything that is encrypted they can say no and be completely telling the truth. Once inside the country they could load the Standard Firmware and set up thier plausible deniability profile so that if they are ever detained or forced to give up thier PIN they can comply by giving the plausible deniability PIN which would just unlock the accounts they don't really care about and would again appear to just be an unencrypted password manager. The user would have a plausible story that they are giving up everything they have while keeping the accounts they care about and encryption keys protected. For more information on encryption and international travel see https://www.princeton.edu/itsecurity/encryption/encryption-and-internatio/
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">When should I use the plausible deniability PIN??</a>
                            </h4>
                        </div>
                        <div id="collapseSix" class="panel-collapse collapse">
                            <div class="panel-body">
                                Whenever you wish for your OnlyKey to appear to be a simple password manager that does not utilize encryption. Form more information read https://crp.to/2017/04/plausible-deniability-onlykey/
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">When should I not use the plausible deniability PIN?</a>
                            </h4>
                        </div>
                        <div id="collapseSeven" class="panel-collapse collapse">
                            <div class="panel-body">
                                Plausible deniability is only good if you are in a country where your worst case scenario is that you will be fined for using encryption. If someone is holding a gun to your head or there is risk of torture plausible deniability is pretty much useless. For more information on why see this https://en.wikipedia.org/wiki/Rubber-hose_cryptanalysis.

If you think an adversary has the resources to decap a chip and inspect the contents with an electron microscope, or equivalent method, and is willing to spend these resources to obtain your passwords, then this implementation of plausible deniability would be defeated as there is no tamper respondent enclosure surrounding the device.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">Why not sign the firmware with a code signing certificate?</a>
                            </h4>
                        </div>
                        <div id="collapseEight" class="panel-collapse collapse">
                            <div class="panel-body">
                                We did consider this option but there is one big security weakness this introduces. If the registered holder of the signing certificate is forced to give up the private key (by court order or other means) then whoever gains access to the private key could make modifications to the firmware and release it to unsuspecting users. Also there is not a good way to have firmware be both open source and require a specific code signing certificate. The integrity of firmware can still be validated without a signature using a checksum.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseNine">How can I be sure by OnlyKey does not have a backdoor or was not tampered with?</a>
                            </h4>
                        </div>
                        <div id="collapseNine" class="panel-collapse collapse">
                            <div class="panel-body">
                                We have designed OnlyKey to be as transparent as possible (literally it is covered in a clear potting compound). You can load our firmware, review the source, or write your own firmware. Here are some of the features that allow you validate that there is no backdoor or tampering has occurred.<br>
                                1) Hardware - By having a clear coat on the electronics you can actually see the hardware and would be able to see a hardware type of backdoor.<br>
                                2) Software - The way that OnlyKey loads firmware is unique. When you bridge the two touch points to load firmware what actually happens is first the small chip on the board sends a message to the large chip on the board that wipes all data from the large chip, next the firmware is loaded onto the small chip via USB, and finally written onto the blank large chip. So even is someone succeeded in loading malicious software onto your OnlyKey reloading the firmware would completely remove it.
                            </div>
                        </div>
                    </div>
                     <!-- /.panel -->                   
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Why no NFC (Near Field Communication) support?</a>
                            </h4>
                        </div>
                        <div id="collapseTen" class="panel-collapse collapse">
                            <div class="panel-body">
                                Three main reasons for not supporting NFC<br>
                                1) Power Requirements - NFC provides ~5mA of harvested power to NFC tags. The OnlyKey has a high performance processor which permits quick cryptographic operations but requires more power than NFC provides.<br>
                                2) User Experience - The way that NFC devices are typically used is to quickly tap an NFC device to a reader/smartphone. There is no physical protection in place for most NFC devices if you drop it, someone can pick it up and use it. With OnlyKey this is not the case, you have to enter a PIN to unlock the device first. Even if power output of NFC was enough imagine trying to hold a device close enough to the reader for power while entering a PIN. This in many cases would not be very user friendly.<br>
                                3) Not Universally Supported - One thing we strive to do is provide a device that works practically everywhere and on everything. NFC is only supported on select Android devices and there are no plans for Apple to open up NFC functionality on the iPhone/iPad. NFC support would not provide universal mobile support. With USB an adapter is required but we can support all Android devices and even newer iPhones that now have USB suppor.
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->               
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">Why no USB C version?</a>
                            </h4>
                        </div>
                        <div id="collapseTwelve" class="panel-collapse collapse">
                            <div class="panel-body">
                                USB C, while definitely having its advantages and on paper looks like a great option also has a lot of disadvantages and issues to consider.<br>
                                1) Connector Strength - OnlyKey has physical security provided by requiring a PIN to be entered in order to use. This makes OnlyKey a much more secure option than devices with no physical protection but it also requires that the USB connector is fairly durable and strong. USB C connectors/recepticles are smaller not very durable and more prone to breaking from say the stress of pressing on a device that is plugged in to enter a PIN. The way to resolve this issue would be to have a flexible USB C connector attached to OnlyKey. While this is possible it would be more expensive to produce and would only be slightly more compact than just using a USB C adapter connected to the current OnlyKey. For this reason we provide USB C support via a USB C adapter, as this method also provides backwards compatability with the majority of systems in use that do not support USB C.<br>
                                2) Connector Complexity/Durability - USB C connectors contain 24 tiny connections while USB A contains 4 large connections. Additionally, the USB A connector on OnlyKey is a flat surface while USB C is not. With the current USB A the device is waterproof, you could go swimming, wipe your OnlyKey dry and its good to go. This is not the case with USB C as water can reside inside the connector where its not easy to dry and plugging a wet electrical connector in is a bad idea. The complexity of USB C is great for things like supporting a 4K monitor that requires an incredible amount of data transfer, but for OnlyKey it is just a disadvantage as there is no need for high speed data at all.<br>
                                For more information on mobile adapters including USB C, Mirco USB, and iPhone Lightning see is [OnlyKey supported on Android and iPhone](#collapseThirteen).
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThirteen">Is OnlyKey Supported on Android and iPhone?</a>
                            </h4>
                        </div>
                        <div id="collapseThirteen" class="panel-collapse collapse">
                            <div class="panel-body">
                                OnlyKey is supported by any device that would support a USB keyboard. This includes Android devices and even iPhone 7 using USB OTG adapter.<br>
                                <table>
                          <tbody>
                          <tr>
                          <th>Phone Model</th>
                          <th>Supported</th>
                          <th>Required Adapter</th>
                          </tr>
                          <tr>
                          <td>iPhone/iPad (IOS 9.2+) with Lightning port</td>
                          <td>Password manager and Yubikey OTP</td>
                          <td>Lightning to USB OTG Adapter available <a href="https://www.amazon.com/gp/product/B00S9I7EPO/">here</a></td>
                          </tr>
                          <tr>
                          <td>Android with USB Micro port</td>
                          <td>Password manager and Yubikey OTP</td>
                          <td>USB Micro OTG w/Key chain Adapter available <a href="https://www.amazon.com/dp/B071Y4CZV9">here</a></td>
                          </tr>
                          <tr>
                          <td>Android with USB C port</td>
                          <td>Password manager and Yubikey OTP</td>
                          <td>USB C OTG Adapter available <a href="https://www.aliexpress.com/item/ONEPLUS-3-3T-Type-C-Dash-Cable-10CM-USB-Female-TO-TYPE-C-OTG-Converter-Data/32790621768.html">here</a></td>
                          </tr>
                          </tbody>
                          </table>
                    
                            </div>
                        </div>
                    </div>
                    <!-- /.panel -->
</div>
<!-- /.panel-group -->

{% include links.html %}

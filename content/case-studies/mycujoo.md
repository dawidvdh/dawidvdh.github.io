# MyCujoo Broadcast

Share your game with your fans all over the world, from the palm of your hand. Our free broadcast app allows you to simultaneously live stream and produce your football matches from a mobile phone.

# TL;DR

unique in the sense that is uses 1 code base for the UI and 1 code base written in C for the streaming.

# Introduction

MyCujoo Broadcast allows users to stream a game.

When I started working with MyCujoo they had both an iOS and Android App released in the store, iOS was written in React Native using a native library for broadcasting to the rtmp server while the Android App was entirely written in Java.

The code base was an absolute mess, Android was relatively stable however the suaght after "solo-operater" features was in beta and not so stable whilst iOS was not at all stable (crash continously) and did not have the "solo-operator" feature.

The quality of the stream would also be different depending if Android or iOS was used, not due to camera qaulity but  due to the different libraries used.

The reason for the mess became very apprent they had various developers working on this project and when the had an Android developer then iOS developer would leave and vice versa, it was a constant battle of adding new features and keeping both iOS and Android in sync.

After reviewing both apps and seeing how out of sync these apps would contantly fall with eachother I started investigating an alternative solution.

# Challenges

- Users were currently activly using both Apps (more so android).
- Keeping feature parity between iOS and Android
- Simplified and Unified code base so that if all the mobile developers resigned the frontend developers could keep the project a float.
- Getting "solo-operator" out of beta and availible on both devices.
- Using a singular library/code base for broadcasting to the rtmp server to ensure thee quality and stability are the same regardless of the device used.

# Solution

Using React Native for the UI so that majority of the code base is written in JavaScript which is a very accesible language and a lot easier to hire for and moving the rtmp broadcasting library to seperate node module and by doing so removing thee concern from any work required on the mobile app... 

using react native with a shared c library.
---
title: The window is an Object!
cover: "https://unsplash.it/1280/500/?random?BoldMage"
author: "Antonio Pavicevac-Ortiz"
date: "09/05/2015"
category: "tech"
tags:
    - javascript
---

I am sure everyone knows that—mostly, but for people who just started learning JS—especially when getting introduced to concepts regarding `scope`, and how the  `this` keyword works, I think if we explicity showed the Window is just an Object right from the start, it would help getting the aforementioned concepts.

<!--more-->

So here goes! Open up your text editor or better yet let's crack open your developer tools from your favorite browser; I use chrome, but use whatever you want. Anyway, if you do  `command + option + j`(in chrome on a mac, probably `ctrl + alt + j` on a pc ) you'll get right to the javascript console. Basically below is what I actually entered in the developer tools,

```javascript
//object declared in global scope

var starship = {

    //properties

    name        :   "enterprise",
    registry    :   "1701",
    sovereignty :   "federation",

    //methods

    hail : function(){

        console.log('This is the starship ' + this.name + ' 
        of the United ' + this.sovereignty + ' of planets..');

    }

};

//function declaration in global scope

function omniPresentCommunication(){

    console.log('This sector is full of worm-holes, starships beware!');

}

window.hasOwnProperty('starship'), window.hasOwnProperty('omniPresentCommunication');
true //returns true
````
\
What is the most interesting aspect of what we entered was, when we called the `hasOwnProperty*` method on the window object, first using the `starship` object and then the `omniPresentCommunication` function. We get `true` back. That is because since those entities were declared in the global scope, we have just essentially added them as properties and methods to the big ole global object! Not only that, but if we passed the `window` object to `console.dir(window)`, like so, you'll will find them there, with a ton of other properties and methods.

To me, that makes understanding the `this` keyword, `scope` and the `call` and `apply` methods much easier to understand...That'll be next!

<small>\*The` hasOwnProperty()` method returns a boolean indicating whether the object has the specified property.</small>

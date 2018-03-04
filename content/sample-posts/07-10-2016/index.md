---
title: "Just build something!"
cover: "https://unsplash.it/1280/500/?random?BoldMage"
author: "Antonio Pavicevac-Ortiz"
date: "2016-10-07"
category: "tech"
tags:
    - code newb
---

Since about January of this year, I've really tried to stick with learning things which center around "Vanilla JS". 

<!--more-->

I've have been trying to remain disciplined, and not mess around with any frameworks. That has been tough, as their alure is hard to resist. 

Almost all of them have great abstractions and make working with API's easier. They're especially hard to ignore since a lot of companies have utlized them, making knowing some frameworks as important as knowing JavaScript itself. 

I suppose that's what it was like when jQuery was new to the scene. It helped with cross-browser problems and made working with XHR/AJAX easier. And those animations must have been like Cat-nip! And like I've mentioned previously, folks new to programming want to see results right away.

Well the cool thing is I finally have been able to use some plain ole JavaScript to actually create something useful for work!
  
Behold! Essentially at work we would get these HTML pages which we had to repurpose. Anyway, they had some specific href tags that needed their respective target attributes set to self and all others set to blank.

```javascript
var URLChecker = (function iffe() {
  var publicAPI = {
    getURL: function() {
      for (var i = 0; i < arguments.length; i++) {
        return {
          foo: 'http://foo.rye.foo.com',
          foodev: 'http://foodev.rye.avon.com',
          blargh_sans_w: 'http://blargh.com',
          blargh: 'http://www.blargh.com',
          blargh2: 'http://www2.blargh.com',
        }[arguments[i]];
      }
    },
    searchURL: function(url) {
      for (var i = 0, l = document.links.length; i < l; i++) {
        if (document.links[i].href.indexOf(publicAPI.getURL(url) !== -1)) {
          document.links[i].setAttribute('target', '_blank');
        }
      }
    },
  };
  return publicAPI;
})();
````
\
That was my first crack at it, and after some helpful guidenece from people on stackoverflow it has evolved to this:

```javascript
var MarkUpChecker = (function iffe() {
  'use strict';
  var URLS = {
      foo: 'http://foo.rye.foo.com',
      foodev: 'http://foodev.rye.avon.com',
      blargh_sans_w: 'http://blargh.com',
      blargh: 'http://www.blargh.com',
      blargh2: 'http://www2.blargh.com',
    },
    publicAPI;

  function getURL() {
    for (var i = 0; i < arguments.length; i++) {
      return URLS[arguments[i]];
    }
  }
  publicAPI = {
    addURL: function() {
      for (var i = 0; i < arguments.length; i += 2) {
        URLS[arguments[i]] = arguments[i + 1];
      }
      console.dir(URLS);
      return URLS;
    },
    searchURL: function() {
      var link,
        url,
        parser,
        newPathName = '',
        newstr = '',
        doc = document,
        container,
        container_links,
        documentTableWrapper,
        docBodyFirstChild;

      if (!doc.getElementById('container')) {
        container = doc.createElement('div');
        container.setAttribute('id', 'container');

        container_links = container.getElementsByTagName('a');
        documentTableWrapper = doc.getElementsByTagName('table')[0];
        container.appendChild(documentTableWrapper);
        container.className = 'container-news';
        docBodyFirstChild = doc.body.firstChild;
        doc.body.insertBefore(container, docBodyFirstChild);
      } else {
        container_links = doc.getElementById('container').getElementsByTagName('a');
      }
      for (var i = 0, len = arguments.length; i < len; i++) {
        url = getURL(arguments[i]);
        for (var j = 0, jlen = container_links.length; j < jlen; j++) {
          link = container_links[j];
          if (link.href.indexOf(url) !== -1) {
            parser = document.createElement('a');
            parser.href = link.href;

            link.setAttribute('target', '_self');
            newPathName = parser.pathname;

            if (newPathName.search(/Executive|District|Division|National/) != -1) {
              newPathName = newPathName.split('/').pop();
              newstr = newPathName;
            } else {
              newstr = newPathName;
            }

            link.href = newstr;
          } else {
            link.setAttribute('target', '_blank');
          }
        }
      }
    },
  };
  return publicAPI;
})();
````
\
What I loved about this was I was able to take advantage of some cool design patterns I learned. Like using [object literals](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/) instead of switch statements for evaluating expressions and working with the revealing 
[module pattern.](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md#modules) With the later I was able to actually get it to store URLS too.

I suppose this post was more part pat on the back for myself :) and to get across to just build something so you can get some practice with some problem solving and to most of all have some fun!


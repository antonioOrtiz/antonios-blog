---
title: "The window is an Object (part 2)"
cover: "https://unsplash.it/1280/500/?random?BoldMage"
author: "Antonio Pavicevac-Ortiz"
date: "03/06/2016"
category: "tech"
tags:
    - this keyword, call and apply methods
---

Finally the epic conclusion to this long drawn out post!

<!--more-->
So waaaay back at the end of 'part 1', I said
understanding the `window` was just one big ole object, helped me understand scope, the this keyword and the call/apply methods...

For example, people usually say something like, the function and variable below were declared in the global scope.

{% highlight javascript %}
///what is the global scope?
var bar = 'i am a property on the big ole object';

function foo(){
    return function baz(){
        return bar;
    }
}
foo()(); // returns 'i am a property on the big ole object';
{% endhighlight %}

To me if it was illustrated these declarations are in fact inside a container, an actual thing, it would feel more tangible. It would be like understanding our planet is inside of a solar system, which inside of a galaxy etc...

{% highlight javascript %}

windowObject = {

var bar = 'i am a property on the big ole object';

function foo(){
    return function baz(){
        return bar;
    }
}
foo()(); // returns 'i am a property on the big ole object';

};

{% endhighlight %}

Another arena where this might come in handy is in understanding the 'this' keyword. Most people are perplexed when seeing a function like so return the '[object Window]'.

{% highlight javascript %}
//global scope

function baz(){
  return this;
}
{% endhighlight %}

I'd expect a reference to the function itself.
But you wouldn't if was illustrated differently from the beginning. Like most people can clearly see what's going on in the following.

{% highlight javascript %}
var someObj = {
   someProp : 'some value',
   someObjFn : function (){
        return this.someProp;
   }
}
{% endhighlight %}

Lastly the call and apply methods would make more sense too, because if you were doing some like this:

{% highlight javascript %}

var person1 = { name : 'Antonio'},
      person2 = { name:'Barbara'};

         function getName(){
             return this.name;
         }

   getName.call(person1); // returns 'Antonio'
   getName.call(person2); // returns 'Barbara'

{% endhighlight %}

You'd see immediately why such methods would be helpful because the it would spell out context and see getName is a function on the global scope er I mean't the global Object ;)
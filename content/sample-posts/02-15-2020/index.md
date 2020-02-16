---
title: Hillfinder 2.0!
cover: './images/finn-lost-in-the-desert.jpg'
author: 'Antonio Pavicevac-Ortiz'
date: '2020-02-15'
category: 'tech'
tags:
  - javascript
---

It's back...

<!--more-->

During my time at Full Stack Academy I had the opportunity to work on a few hackathon projects. In case you don’t know what a hackathon is, I think Wikipedia says it best:

> A hackathon (also known as a hack day, hackfest or codefest; a portmanteu of hacking marathon) is a design sprint-like event; often, in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, domain experts, and others collaborate intensively on software projects.

My idea was a web application called Hillfinder; Essentially a progressive web app which takes a starting point and end point and tries to give you a direction to that endpoint input based on a downward elevation. I thought of it after seeing some kids in my neighborhood skateboarding around, and because adjacent blocks to my house are pretty flat and thought it was a cool idea.

To cut to the chase, I really bombed, And naturally disappointed. I couldn’t get anything to work (auth, the geo-locations API etc.); I probably should have _just_ tried to implement the two inputs calling the API's and called it a day.

But in retrospect I believe what made it such a difficult task was just getting started and having some organization!

The following seems really fundamental but I think it's worth mentioning the folder structure really helped me get things going:

<img src="./images/hillfinder-component-folder-structure.jpg">

To start all my components are grouped by what they _do_. I also include their associated CSS file in a folder labeled to be the same as the component itself.

This convention has helped reinforce the [declarative](https://tylermcginnis.com/imperative-vs-declarative-programming/) nature of React for me. I won't go on a tanget about it (...uh so hard, as I love tangents!), because Tyler McGinnis\* really explains it so well. So I would just checkout the link above.

Another great convention (which you get for free with Next.js) is a file-system based router built on the concept of [pages](https://nextjs.org/docs/routing/introduction).

I think that is a great idea\*\*; As you can see from the screenshot below all my routes are nicely organized. This is an idea in development called [convention over configuartion](https://rubyonrails.org/doctrine/#convention-over-configuration).

<img src="./images/hillfinder-next-folder-structure.jpg">

Like I said earlier, in my next post I'll continue the thread in regards to the tools that helped me shape Hillfinder; Libraries for state, databases, CSS and authentication! But today I wanted discuss a little about organizational tools as maybe this is something you've experienced; Maybe you are a person who finds it hard to just get going. Like you get paralyzed as to where to begin?!

Like you're constanly are googling or referencing StackOverFlow posts every step of the way....
And truth be told there is nothing wrong with doing it that way, that's what I usually do untill the light-bulb goes off, And I think "Wait, I'm sure someone has done this before..." :)

Anyway here are some links to some front-end/back-end libraries that do a lot of organization and naming _for_ you:

- [Vuetify](https://vuetifyjs.com/en/getting-started/quick-start)

- [Gatsby](https://www.gatsbyjs.org/starters/?v=2)

* [Express](https://expressjs.com/)

* [Sails](https://sailsjs.com/)

<small>

\* Tyler McGinnis is a phenominal teacher; He has a wonderful way of applying abstractions to the programming concepts he is sharing. You might have noticed I didn't say JavaScript, React etc. That is because IMHO, I feel if you can picture applying abstractions or metaphors to another subject that is a good marker of a great teacher.

\*\* Full disclosure I had to change the routing system and go with [react-router](https://reacttraining.com/react-router/); Only because I couldn't figure out how to get some components from [react-semantic-ui](https://react.semantic-ui.com/) to play nice with the page system of Next.js

</small>

# Hello Siri

[Inspired by something similar on Glitch!](https://medium.com/glitch/creating-super-effective-ios-shortcuts-with-glitch-ca266b3d137e)

## What's actually going on here?

An origin story:

> *Programmer 1:* I can help you troubleshoot that. Can you show me the data for
> that user?
> *Programmer 2:* Yeah, sure _tap tap tap_.
> *Programmer 1:* Now, show me the history for that model belonging to the user.
> *Programmer 1:* Yep! _more typing_
> *Programmer 2:* Ok now can you show me...actually what we really need is "computer, show me this user data"...

Now I'm curious what it would take to Make Star Trek Happen. And it turns out, with Siri shortcuts and a little bit of web app stuff, it is somewhat _feasible_.

## How does it work?

You create a Siri shortcut. You dictate some text, it puts that text into the query string of a URL and then fetches that URL. Siri extracts whatever text is on that page and reads it back.

So you could do stuff like:

> Siri, how many paying customers do we have right now?
> 🤖You have a ton of paying customers, congratulations!

> Siri, how many customers churned out today?
> 🤖 None today, you must be doing something right.

> Siri, is the sync for customer XYZ working?
> 🤖 It failed today, you should look into that.

## Outstanding questions

- can a webpage link to or otherwise help a person create a Siri shortcut (even step by step instructions are _somewhat_ okay)
- how could a user authenticate with an application in Safari and then get some kind of authentication token into a Siri shortcut?
- if you can make all that work, is exposing your application data to a Siri shortcut via API an okay idea?
- could you do something more clever with dictated text besides passing it in a query or POST parameter?
- are Siri shortcuts coming to macOS or can one port them somehow?

## How to run it locally

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

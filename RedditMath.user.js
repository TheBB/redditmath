// ==UserScript==
// @name        RedditMath
// @namespace   http://aligulac.com
// @description Renders LaTeX on /r/math using MathJax.
// @include     http://reddit.com/r/math/*
// @include     http://*.reddit.com/r/math/*
// @version     1
// @grant       none
// ==/UserScript==

var pres = document.getElementsByTagName('pre');
for (var i = 0; i < pres.length; i++)
{
    pres[i].innerHTML = pres[i].innerHTML.replace('[;', '[(;');
    pres[i].innerHTML = pres[i].innerHTML.replace(';]', ';)]');
}

var head = document.getElementsByTagName('head')[0], script;
script = document.createElement('script');
script.type = 'text/x-mathjax-config';
script[(window.opera ? 'innerHTML' : 'text')] =
    "MathJax.Hub.Config({\n" +
    "    tex2jax: {\n" +
    "        inlineMath: [['[;', ';]']],\n" +
    "        displayMath: [['[(;', ';)]']],\n" +
    "        skipTags: ['script', 'noscript', 'style', 'textarea'],\n" +
    "    },\n" +
    "});"
head.appendChild(script);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
head.appendChild(script);
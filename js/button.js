'use strict';
var Velocity;
if ($) {
  Velocity = $.Velocity;
}
else {
  Velocity = Velocity; // change value with jQuery.Velocity
}
var doc = document;
var expanderButtons = Array.from(doc.querySelectorAll('.panel-preview'));
var target;
var content;
expanderButtons.forEach(function (expander) {
    content = doc.getElementById(expander.getAttribute('data-target'));
    content.setAttribute('data-height', content.offsetHeight);
    content.style.height = 0;
    expander.addEventListener('click', expand, false);
});
function expand(e) {
    target = document.getElementById(e.currentTarget.getAttribute('data-target'));
    target.classList.toggle('is-active');
    Velocity(target, { height: target.classList.contains('is-active') ? target.getAttribute('data-height') : 0 }, {
        duration: 500,
        easing: 'ease'
    });
}
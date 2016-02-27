;(function() {

  'use strict';


  var Example = function(){
    var styles, app, header, title, description, picture;

    styles = require('./index.css');

    app = document.querySelector('#app');

    header = document.createElement('div');
    header.classList.add('header');


    title= document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'Seattle Ladies JavaScript';
    header.appendChild(title);
    app.appendChild(header);

    description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = 'JavaScript is the powerful language used to make the internet interactive and as such it comes with hype and competition, which can be confusing and off putting for many. This meetup is an attempt to remove those blockers and empower women to enjoy JavaScript.';
    app.appendChild(description)

    picture = document.createElement('img');
    picture.classList.add('picture');
    picture.src = '/images/adaThefirst.jpg';
    app.appendChild(picture);

  };

  Example();

}());

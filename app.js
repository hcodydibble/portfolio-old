'use strict';
var projectArray = [];

function Projects(name, url){
  this.name = name;
  this.url = url;
  projectArray.push(this);
}

$(document).ready(function(){
  $('.fa-bars').click(function(){
    $('.navi').css('display','block')
  })
})

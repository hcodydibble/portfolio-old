'use strict';
var projectArray = [];

function Projects(name, url){
  this.name = name;
  this.url = url;
  projectArray.push(this);
}

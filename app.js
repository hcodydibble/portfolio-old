'use strict';
var projectArray = [];

function Projects(name, url){
  this.name = name;
  this.url = url;
  projectArray.push(this);
}
new Projects('Bus Mall','https://hcodydibble.github.io/bus-mall/')
new Projects('Tennis Anyone?','https://gabrielx52.github.io/tennis_anyone/')

$(document).ready(function(){
  $('.fa-bars').click(function(){
    $('.navi').css({'display':'block','padding':'2vh'})
  })
})

$(document).ready(function(){
  $('#education').click(function(){
    $('.replace').replaceWith('<h2>Education</h2>','<p>This will be my educational history!</p>')
    $('.delete').remove()
    $('h2').css({'font-size':'5vw','color':'currentColor','-webkit-text-stroke':'1px #cc73cf','text-align':'center'})
  })
})

$(document).ready(function(){
  $('#projects').click(function(){
    $('#stickHere').empty()
    $('#stickHere').append('<a href="' + projectArray[0].url + '">' + projectArray[0].name + '</a>')
    $('#stickHere').append('<p>A project where I had to create a random image generator to cycle through a set number of chosen images and allow the user to click on their favorite to vote for it. At the end it will display the number of votes received in a graph and also save the data to local storage so that it will persist through page refreshes</p>')
    $('#stickHere').append('<a href="' + projectArray[1].url + '">' + projectArray[1].name + '</a>')
    $('#stickHere').append('<p>A project where myself and two others created a site that would allow a user to either create or find a game of tennis at their court of choice in the Seattle area</p>')
    $('p').css({'padding-top':'2vh','margin-bottom':'1vh'})
    $('a').css('font-size','4vh')
  })
})

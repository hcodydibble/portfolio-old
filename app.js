'use strict';
var projectArray = [];

function Projects(projectData){
  this.name = projectData.name;
  this.url = projectData.url;
  this.description = projectData.description;
}
function Education(edData){
  this.name = edData.name;
  this.years = edData.years;
  this.study = edData.study;
}

$('.fa-bars').click(function(){
  $('.navi').css({'display':'block','padding':'2vh'})
})

$('#education').click(function(){
  $('.replace').replaceWith('<h2>Education</h2>','<p>This will be my educational history!</p>')
  $('.delete').remove()
  $('h2').css({'font-size':'5vw','color':'currentColor','-webkit-text-stroke':'1px #cc73cf','text-align':'center'})
})

$('#projects').click(function(){
  $('#stickHere').empty()
  projectArray.forEach(function(project){
    $('#theProjects').append(project.toHtml())
  })
  $('p').css({'padding-top':'1vh','margin-bottom':'1vh'})
  $('a').css('font-size','4vh')
})

Projects.prototype.toHtml = function(){
  var $newProject = $('#template').clone()
  $newProject.attr('id','')
  $newProject.find('.project a').attr('href',this.url).text(this.name)
  $newProject.find('#description').html(this.description)
  return $newProject
}

myProjects.forEach(function(projectData){
  projectArray.push(new Projects(projectData))
})

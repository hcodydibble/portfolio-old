'use strict';
var projectArray = [], educationArray = [];

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
  $('#stickHere').empty()
  educationArray.forEach(function(education){
    $('#theEducation').append(education.toHtml())
  })
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
  var $newProject = $('#projectTemplate').clone()
  $newProject.attr('id','')
  $newProject.find('.project a').attr('href',this.url).text(this.name)
  $newProject.find('#description').html(this.description)
  return $newProject
}
Education.prototype.toHtml = function(){
  var $newEd = $('#edTemplate').clone()
  $newEd.attr('id','')
  $newEd.find('h2').text(this.name)
  $newEd.find('.years').text(this.years)
  $newEd.find('.study').text(this.study)
  return $newEd
}

myProjects.forEach(function(projectData){
  projectArray.push(new Projects(projectData))
})
myEducation.forEach(function(educationData){
  educationArray.push(new Education(educationData))
})

'use strict';
var projectArray = [], educationArray = [];

function Projects(projectData){
  Object.assign(this, projectData)
}

$('.fa-bars').click(function(){
  $('.navi').css({'display':'block','padding':'2vh'})
})

$('#education').click(function(){
  $(this).css('display','none')
  $('#stickHere').empty()
  $('#theProjects').empty()
  educationArray.forEach(function(education){
    $('#theEducation').append(education.toHtml())
  })
  $('#projects').css('display','block')
})

$('#projects').click(function(){
  $(this).css('display','none')
  $('#stickHere').empty()
  $('#theEducation').empty()
  projectArray.forEach(function(project){
    $('#theProjects').append(project.toHtml())
  })
  $('#education').css('display','block')
  $('p').css({'padding-top':'1vh','margin-bottom':'1vh'})
  $('a').css('font-size','4vh')
})

Projects.prototype.toHtml = function(){
  if(this.url){
    var $newProject = $('#projectTemplate').clone()
    $newProject.attr('id','')
    $newProject.find('.project a').attr('href',this.url).text(this.name)
    $newProject.find('#description').html(this.description)
    return $newProject
  }else{
    var $newEd = $('#edTemplate').clone()
    $newEd.attr('id','')
    $newEd.find('h2').text(this.name)
    $newEd.find('.years').text(this.years)
    $newEd.find('.study').text(this.study)
    return $newEd
  }
}

myInfo.forEach(function(info){
  if(info.url){
    projectArray.push(new Projects(info))
  }else{
    educationArray.push(new Projects(info))
  }
})

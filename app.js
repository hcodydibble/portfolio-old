'use strict';
var projectArray = [], educationArray = [];

function Projects(projectData){
  Object.assign(this, projectData)
}

$('.fa-bars').click(function(){
  $('.navi').toggle(500)
})

$('#education').click(function(){
  $('#stickHere').hide()
  $('#theProjects').empty()
  educationArray.forEach(function(education){
    $('#theEducation').append(education.toHtml())
  })
})

$('#projects').click(function(){
  $('#stickHere').hide()
  $('#theEducation').empty()
  projectArray.forEach(function(project){
    $('#theProjects').append(project.toHtml())
  })
  $('#education').css('display','block')
  $('a').css('font-size','4vh')
})

$('#home').click(function(){
  $('#theProjects').empty()
  $('#theEducation').empty()
  $('#stickHere').show()
})

Projects.prototype.toHtml = function(){
  if(this.url){
    var projectTemp = $('#projectTemplate').html();
    var projectBlog = Handlebars.compile(projectTemp);
    var newProject = new Projects(this);
    var projectPost = projectBlog(newProject);
    $('#theProjects').append(projectPost);
  }else{
    var edTemp = $('#edTemplate').html();
    var edBlog = Handlebars.compile(edTemp);
    var newEd = new Projects(this);
    var edPost = edBlog(newEd);
    $('#theEducation').append(edPost);
  }
}

myInfo.forEach(function(info){
  if(info.url){
    projectArray.push(new Projects(info))
  }else{
    educationArray.push(new Projects(info))
  }
})

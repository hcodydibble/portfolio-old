'use strict';
let projectArray = [], educationArray = [];

function Projects(projectData){
  Object.assign(this, projectData)
}

$('.fa-bars').click(function(){
  $('.navi').toggle(500)
})

$('#education').click(function(){
  $('#stickHere').hide()
  $('#theProjects').empty()
  $('#theEducation').empty()
  educationArray.forEach(function(education){
    $('#theEducation').append(education.toHtml())
  })
})

$('#projects').click(function(){
  $('#stickHere').hide()
  $('#theEducation').empty()
  $('#theProjects').empty()
  projectArray.forEach(function(project){
    $('#theProjects').append(project.toHtml())
  })
  $('a').css('font-size','4vh')
})

$('#home').click(function(){
  $('#theProjects').empty()
  $('#theEducation').empty()
  $('#stickHere').show()
})

Projects.prototype.toHtml = function(){
  if(this.url){
    let projectTemp = $('#projectTemplate').html();
    let projectBlog = Handlebars.compile(projectTemp);
    let newProject = new Projects(this);
    let projectPost = projectBlog(newProject);
    $('#theProjects').append(projectPost);
  }else{
    let edTemp = $('#edTemplate').html();
    let edBlog = Handlebars.compile(edTemp);
    let newEd = new Projects(this);
    let edPost = edBlog(newEd);
    $('#theEducation').append(edPost);
  }
}

$.get('public/info.json',function(stuff){
  stuff.forEach(function(info){
    if(info.url){
      projectArray.push(new Projects(info))
    }else{
      educationArray.push(new Projects(info))
    }
  })
})

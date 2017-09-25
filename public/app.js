'use strict';

var app = app || {};
let projectArray = [], educationArray = [];

(function(module){

  function Projects(projectData){
    Object.assign(this, projectData)
  }

  $('.fa-bars').click(function(){
    $('.navi').toggle(500)
  })

  $('#education').click(() => {
    $('#stickHere').hide()
    $('#theProjects').empty()
    $('#theEducation').empty()
    educationArray.forEach(education =>
      $('#theEducation').append(education.toHtml()))
  })

  $('#projects').click(() => {
    $('#stickHere').hide()
    $('#theEducation').empty()
    $('#theProjects').empty()
    projectArray.forEach(project =>
      $('#theProjects').append(project.toHtml()))
    $('a').css('font-size','4vh')
  })

  $('#home').click(() => {
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


  $.get('info.json',stuff => {
    stuff.map(info => info.url ? projectArray.push(new Projects(info)) : educationArray.push(new Projects(info)))

    Projects.numWords = () => {
      return projectArray.map(function(a){
        return a.description.split(' ').length
      }).reduce(function(a,b){
        return a + b
      })
    }
    $('.totals').text(Projects.numWords())
  })
  module.Projects = Projects;
})(app);

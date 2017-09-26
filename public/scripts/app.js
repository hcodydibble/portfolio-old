'use strict';

var app = app || {};

(function(module){
  let projectArray = [], educationArray = [];

  function Projects(projectData){
    Object.assign(this, projectData)
  }

  $('.fa-bars').click(function(){
    $('.navi').toggle(500)
  })

  Projects.myEducation = () =>{
    $('#stickHere').hide()
    $('#theProjects').empty()
    $('#theEducation').empty()
    educationArray.forEach(education =>
      $('#theEducation').append(education.toHtml()))
  }

  Projects.myProjects = () => {
    $('#stickHere').hide()
    $('#theEducation').empty()
    $('#theProjects').empty()
    projectArray.forEach(project =>
      $('#theProjects').append(project.toHtml()))
    $('a').css('font-size','4vh')
  }

  Projects.goHome = () => {
    $('#theProjects').empty()
    $('#theEducation').empty()
    $('#stickHere').show()
  }

  Projects.prototype.toHtml = function(){
    if(this.url){
      let projectBlog = Handlebars.compile($('#projectTemplate').html());
      $('#theProjects').append(projectBlog(new Projects(this)));
    }else{
      let edBlog = Handlebars.compile($('#edTemplate').html());
      $('#theEducation').append(edBlog(new Projects(this)));
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

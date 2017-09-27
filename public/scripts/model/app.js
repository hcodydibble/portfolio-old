'use strict';

var app = app || {};
let projectArray = [], educationArray = [], repoArray = [];

(function(module){

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
    $('#theGithub').empty()
    educationArray.forEach(education =>
      $('#theEducation').append(education.toHtml()))
  }

  Projects.myProjects = () => {
    $('#stickHere').hide()
    $('#theEducation').empty()
    $('#theProjects').empty()
    $('#theGithub').empty()
    projectArray.forEach(project =>
      $('#theProjects').append(project.toHtml()))
    $('a').css('font-size','4vh')
  }

  Projects.myGithub = () => {
    $('#theProjects').empty()
    $('#theEducation').empty()
    $('#stickHere').hide()
    let compiled = Handlebars.compile($('#githubTemplate').html());
    $('#theGithub').append(repoArray.filter(a => a.name !== '').sort().map(compiled))
    repoArray.forEach(a =>
      $('theGithub').append(a))
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

  $.get('/github/user/repos', repos => {
    repos.forEach(ele => repoArray.push(ele))
  })

  module.Projects = Projects;
})(app);

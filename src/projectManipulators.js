import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'
import { ToDo } from './todo.js'
import { Project } from './project.js'
import { projects } from './variables.js'
import { refreshDropDown, renderProject, renderToDo } from './domMethods.js'
import { projects,select, newProjectForm } from './variables.js'

export function findProjectById(id){
  let matchingProject;
  projects.forEach(function(project){
    if (project.id == id){
      matchingProject = project;
    }
  })
  return matchingProject;
}

export function deleteProject(id){
  let matchingProject;
  let index = 0;
  projects.forEach(function(project){
    if (project.id == id){
      projects.splice(index, 1);
    }
    index++;
  })
  renderProject(projects[0].id);
}

export function newProjectId(){
  return projects[projects.length -1].id + 1;
}

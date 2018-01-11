import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'
import { ToDo } from './todo.js'
import { Project } from './project.js'
import { projects } from './variables.js'
import { refreshDropDown, renderProject, renderToDo } from './domMethods.js'
import { findProjectById, deleteProject, newProjectId } from './projectManipulators.js'
import { projects,select, newProjectForm } from './variables.js'


refreshDropDown();
renderProject(0);

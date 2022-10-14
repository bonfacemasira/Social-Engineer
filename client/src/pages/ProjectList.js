import React from 'react'
import ProjectItem from '../components/ProjectItem';

function ProjectList({user}){
    projects = user.projects
    return(
        <div>
            <h1>My Projects</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Desription</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <ProjectItem key={project.id} project={project}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectList;
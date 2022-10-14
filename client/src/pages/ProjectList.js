import React, { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem';

function ProjectList({id}){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => res.json())
        .then(user => setProjects(user.projects))
    }, [])

    function handleNewProjectClick(){
        return <NewProjectForm handleNewProject={data => {
            setProjects(
                ...projects,
                data
            )
        }}/>
    }

    function handleDeleteClick(e){
        id = e.target.id
        fetch(`projects/${id}`, {
            method: "DELETE",
            headers: {"contentType": "application/json"}
        })
        .then(setProjects(
            projects.filter(project => {
                return project.id != id
            })
        ))
    }

    return(
        <div>
            <h1>My Projects</h1>
            <button onClick={handleNewProjectClick}>New Project</button>
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
                        <ProjectItem key={project.id} project={project} handleDeleteClick={handleDeleteClick}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectList;
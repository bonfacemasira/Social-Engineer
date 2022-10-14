import React from "react";

function ProjectItem({project, handleDeleteClick, handleEditClick}){
    const {id, title, description, location, status, image} = project

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{status}</td>
            <td>
                <button id={id} onClick={handleEditClick}>Edit</button>
                <button id={id} onClick={handleDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}

export default ProjectItem
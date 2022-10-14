import React from "react";

function ProjectItem({project, handleDeleteClick}){
    const {id, title, description, location, status, image} = project

    function handleEditClick(){
        console.log("Edit clicked")
    }

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{image}</td>
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
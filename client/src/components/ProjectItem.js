import React from "react";

function ProjectItem({project}){
    const {id, title, description, location, status, image} = project

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{image}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{status}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default ProjectItem
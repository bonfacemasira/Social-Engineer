import React from "react";

function ProjectItem({project}){
    const {id, title, description, location, status, image} = project

    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{status}</td>
        </tr>
    )
}

export default ProjectItem
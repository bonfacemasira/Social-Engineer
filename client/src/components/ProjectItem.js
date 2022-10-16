import React, {useState} from "react";
import { Modal } from "react-bootstrap";

function ProjectItem({ project, handleDeleteClick, handleEditClick }) {
    const { id, title, description, location, status, image } = project

    const [formData, setFormData] = useState({
        "title": title,
        "image": image,
        "description": description,
        "location": location,
        "status": status
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setFormData({
            "title": title,
            "image": image,
            "description": description,
            "location": location,
            "status": status 
        })
    }

    function handleSubmit() {
        fetch(`/api/projects/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => handleEditClick(data))
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>{location}</td>
                <td>{status}</td>
                <td>
                    <button className="btn btn-primary" id={id} onClick={handleShow}>Edit</button> | 
                    <button className="btn btn-primary" id={id} onClick={handleDeleteClick}>Delete</button>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Title</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={formData.title} onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword1" name="description" value={formData.description} onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputLocation" class="form-label">Location</label>
                            <input type="text" class="form-control" id="exampleInputLocation" name="location" value={formData.location} onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputImage" class="form-label">Image URL</label>
                            <input type="text" class="form-control" id="exampleInputImage" name="image" value={formData.image} onChange={handleChange} />
                        </div>
                        <div class="mb-3 form-check">
                            <label class="form-label" for="exampleInputselect">Project Status</label>
                            <select class="form-select" aria-label="Default select example" name="status" value={formData.status} onChange={handleChange}>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                            </select>

                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default ProjectItem
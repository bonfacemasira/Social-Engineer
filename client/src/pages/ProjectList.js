import React, { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem';
// import { Modal } from 'bootstrap';
import { Modal } from 'react-bootstrap';

function ProjectList({ user }) {
    const [projects, setProjects] = useState([])
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        user = window.localStorage.getItem('user')
        const id = user.id
        // setProjects(user.projects)
        fetch(`/api/users/${id}`)
        .then(res => res.json())
        .then(data => setProjects(data.projects))
    }, [])


    // function handleNewProject() {
    //         setProjects(
    //             ...projects,
    //             data
    //         )
    //     }
    // }

    function handleDeleteClick(e) {
        let id = e.target.id
        fetch(`/api/projects/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        .then(() => setProjects(
            projects.filter(project => {
                return project.id !== id
            })
        )) 
    }

    function handleEditClick(data) {
        let id = data.id

        setProjects(
            projects.map(project => {
                if (project.id === id) {
                    return project = data
                } else {
                    return project
                }
            })
        )
    }

    function handleSubmit(e){
        //e.preventDefault()

        fetch('/api/projects', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setProjects(
            ...projects, data
        ))
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    // function openModal() {
    //     setModalIsOpen(true)
    // }

    // function closeModal() {
    //     setModalIsOpen(false)
    // }

    return (
        <div id="projectList">
            <h1>My Projects</h1>
            {/* <button onClick={handleNewProjectClick}>New Project</button> */}
            <button className="btn btn-primary" onClick={handleShow}>New Project</button>
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
                        <ProjectItem key={project.id} project={project} handleDeleteClick={handleDeleteClick} handleEditClick={() => handleEditClick} />
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Projects</Modal.Title>
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default ProjectList;
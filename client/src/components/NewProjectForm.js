import React, { useState } from "react";

function NewProjectForm({handleNewProject}){

    const [formData, setFormData] = useState({})

    function handleSubmit(e){
        e.preventDefault()

        fetch('/projects', {
            method:"POST",
            headers: {
                'contentType': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => handleNewProject(data))
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={formData.title} onChange={handleChange}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="exampleInputPassword1" name="description" value={formData.description} onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputLocation" class="form-label">Location</label>
                <input type="text" class="form-control" id="exampleInputLocation" name="location" value={formData.location} onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputImage" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="exampleInputImage" name="image" value={formData.image} onChange={handleChange}/>
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
    )
}

export default NewProjectForm
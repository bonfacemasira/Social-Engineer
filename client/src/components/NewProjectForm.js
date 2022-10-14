import React from "react";

function NewProjectForm(){
    return(
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <textarea type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <label class="form-label" for="exampleInputEmail1">Choose one option</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Ongoing</option>
                    <option value="2">Completed</option>
                </select>

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewProjectForm
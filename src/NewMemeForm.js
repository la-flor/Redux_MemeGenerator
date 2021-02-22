import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewMemeForm.css"

const NewMemeForm = ({addMeme}) => {
    const INITIAL_FORMDATA = {
        image: "",
        firstLine: "",
        secondLine: ""
    }

    const [formData, setFormData] = useState(INITIAL_FORMDATA);
    
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addMeme({...formData, id: uuidv4()});
        setFormData(INITIAL_FORMDATA);
    }


    return (
        <div className="NewMemeForm-container p-4">
            <form onSubmit={handleSubmit} className="NewMemeForm">
                <label for="image">
                    Image URL:
                </label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    value={formData.image}
                    onChange={handleChange}
                    className="form-control text-center"
                    />
                <label for="firstLine">
                    First Line:
                </label>
                <input
                    id="firstLine"
                    name="firstLine"
                    type="text"
                    value={formData.firstLine}
                    onChange={handleChange}
                    className="form-control text-center"
                    />
                <label for="secondLine">
                    Second Line:
                </label>
                <input
                    id="secondLine"
                    name="secondLine"
                    type="text"
                    value={formData.secondLine}
                    onChange={handleChange}
                    className="form-control text-center"
                    />
                <button className="btn btn-success">Create Meme!</button>
            </form>
        </div>
    )
}

export default NewMemeForm;
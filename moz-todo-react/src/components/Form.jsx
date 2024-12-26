import { useState } from "react";

function Form(props){

    const [name, setName] = useState("");

     // Handle typing event
     function handleChange(event){
        setName(event.target.value);
     }

    // Handle form submission event
    function handleSubmit(event){
        event.preventDefault();
        name.length >=1 ? props.addTask(name) : 0;
        setName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
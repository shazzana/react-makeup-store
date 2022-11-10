import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ItemSearchForm.css';

function ItemSearchForm(props) {
    const [formInput, setFormInput] = useState("");

    
    const handleInput = (event) => {
        console.log(event.target.value)
        setFormInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const val = formInput; //Getting the value from the state
        console.log('STATE: formInput:', val)
        props.onHandleSubmit(val)
        setFormInput("");
    }

    const handleSelectChange = (e) => {        
        props.setCategory(e.target.value);
    }

    return (
        <Form className="d-flex">
            <Form.Label>Search</Form.Label>
            <Form.Select className="search-dropdown" onChange={handleSelectChange} aria-label="Default select example">
                <option>Choose a category</option>
                <option value="name">Product name</option>
                <option value="brand">Product brand</option>
            </Form.Select>
            <Form.Control
            value={formInput}
            onChange={handleInput}
            type="search"
            placeholder="e.g. Colourpop"
            className="me-2"
            aria-label="Search"
            />
        <Button onClick={handleSubmit} variant="outline-light">Search
        </Button>
        </Form>
    )
}

export default ItemSearchForm;
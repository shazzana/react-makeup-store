import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

    return (
        <Form className="d-flex">
            <Form.Control
            value={formInput}
            onChange={handleInput}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
        <Button onClick={handleSubmit} variant="outline-light">Search
        </Button>
        </Form>
    )
}

export default ItemSearchForm;
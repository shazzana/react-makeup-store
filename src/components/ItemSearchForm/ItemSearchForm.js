import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ItemSearchForm.css';
import { useHistory } from 'react-router';

function ItemSearchForm() {
    const [formInput, setFormInput] = useState("");
    const [cat, setCat] = useState("name");
    const history = useHistory();
    const inputRef = useRef();

    const handleSubmit = (event) => {

        event.preventDefault();
        const val = formInput; //Getting the value from the state
        setFormInput("");
        history.push(`/searchresults/${cat}/${inputRef.current.value}`);
    }

    const handleSelectChange = (e) => {
        setCat(e.target.value);
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
                type="search"
                placeholder="e.g. Colourpop"
                className="me-2"
                aria-label="Search"
                ref={inputRef}
            />
            <Button onClick={handleSubmit} variant="outline-light">Search
            </Button>
        </Form>
    )
}

export default ItemSearchForm;
import React, { useState } from 'react';
import LordService from '../../services/lord-service';

export default function LordAdd({ updateLords }) {

    const lordService = new LordService();
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);

    const onNameInputChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const onAgeInputChange = (e) => {
        console.log(e.target.value);
        setAge(e.target.value)
    }

    const addItem = () => {

        if (name !== null && age !== null) {
            lordService.createLord(name, age).then((json) => {
                updateLords(json)
                console.log(json)

            });
        }
    }

    const onItemAdd = (event) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={onItemAdd} className="form-row align-items-center">

            <div className="d-flex">
                <input
                    type="text"
                    className="form-control"
                    onChange={onNameInputChange}
                    required />
                <input
                    type="text"
                    className="form-control"
                    onChange={onAgeInputChange}
                    required />

                <button
                    className="btn btn-success"
                    onClick={addItem}>
                    Add
                </button>

            </div>


        </form>
    );
}
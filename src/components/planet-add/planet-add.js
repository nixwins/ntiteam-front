import React, { useState } from 'react';
import LordService from '../../services/lord-service';

export default function PlanetAdd({ updatePlanets }) {

    const lordService = new LordService();
    const [name, setName] = useState(null);
    const [lordId, setLordId] = useState(0);

    const onItemAdd = (event) => event.preventDefault();
    const onNameInputChange = (e) => setName(e.target.value);
    const onLordIdInputChange = (e) => setLordId(e.target.value);

    const addItem = () => {

        console.log(lordId)
        if (name !== null) {
            lordService.createPlanet(name, lordId).then((json) => {
                updatePlanets(json)
                console.log(json)

            });
        }
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
                    onChange={onLordIdInputChange}
                />
                <button
                    className="btn btn-success"
                    onClick={addItem}>
                    Add
                </button>

            </div>


        </form>
    );
}
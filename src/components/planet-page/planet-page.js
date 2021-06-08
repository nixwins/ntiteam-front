import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import LordService from '../../services/lord-service';
import PlanetAdd from '../planet-add';

export default function PlanetPage() {

    const lordService = new LordService();

    const [planets, setPlanets] = useState([]);


    useEffect(() => {

        let mounted = true;
        lordService.getAllPlanets().then((planet) => {
            setPlanets(planet)
        });
        return () => mounted = false;
    }, []);


    const updatePlanet = (planet,) => setPlanets([...planets, planet]);
    const resizePlanets = (id) => planets.filter(item => item.id !== id);

    const onEditItem = (id) => {
        console.log(id);
    }

    const onDeleteItem = (id) => {
        console.log("Delete id", id);
        lordService.deletePlanet(id).then(() => {
            setPlanets(resizePlanets(id));
        });

    }

    const planetItems = planets.map((item) => {
        return <li
            className="list-group-item"
            key={item.id}>
            <Item
                onDeleteItem={onDeleteItem}
                item={item}
                renderItem={
                    () => <>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <span>{item.lordName}</span>
                        <button className="btn btn-outline-secondary" onClick={() => onEditItem(item.id)}>
                            Set lord
                       </button>
                        <button className="btn btn-danger" onClick={() => onDeleteItem(item.id)}>
                            Delete
                       </button>
                    </>
                } />
        </li>
    });


    return (
        <>
            <PlanetAdd updatePlanets={updatePlanet} />
            <ul className="list-group">
                {planetItems}
            </ul>
        </>

    );
}
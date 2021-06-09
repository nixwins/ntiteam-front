import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import LordService from '../../services/lord-service';
import PlanetAdd from '../planet-add';
import LordListModal from '../lord-list-modal';

export default function PlanetPage() {

    const lordService = new LordService();

    const [planets, setPlanets] = useState([]);
    const [isOpenLordsList, setIsOpenLordsList] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {

        lordService.getAllPlanets().then((planets) => {
            setPlanets(planets)
        });
        return () => false;
    });


    const updateLocalPlanets = (planet) => {
        setPlanets([...planets, planet]);
        console.log("Planet without Lord", planet);
    };
    const resizePlanets = (id) => planets.filter(item => item.id !== id);
    const closeModal = () => setIsOpenLordsList(false);

    const onEditItem = (id) => {
        // console.log(id);
        setIsOpenLordsList(true);
        setSelectedPlanet(id);
    }

    const onDeleteItem = (id) => {

        lordService.deletePlanet(id).then(() => {
            setPlanets(resizePlanets(id));
        });

    }

    const selectedLord = (selectedLordId, lordName) => {

        lordService.setPlanetLord(selectedPlanet, selectedLordId).then(() => {

            const newPlanets = planets.map((planet) => {
                if (planet.id === selectedPlanet) {
                    planet.lordName = lordName;
                }
                return planet;
            });
            setPlanets(newPlanets);
        });
    }

    const planetItems = planets.map((item) => {

        const lordName = item.lord !== null ? item.lord.name : 'нет Повелителя';
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
                        <span>{lordName}</span>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => onEditItem(item.id)}>
                            set  lord
                       </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => onDeleteItem(item.id)}>
                            Delete
                       </button>
                    </>
                } />
        </li>
    });

    const modal = isOpenLordsList ? <LordListModal isOpenLordsList closeModal={closeModal} selectedLord={selectedLord} /> : null;

    return (
        <>
            {modal}
            <PlanetAdd updateLocalPlanets={updateLocalPlanets} />
            <ul className="list-group">
                {planetItems}
            </ul>
        </>

    );
}
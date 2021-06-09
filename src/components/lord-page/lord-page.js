import React, { useEffect, useState } from 'react';
import LordService from '../../services/lord-service';
import Item from '../item/item';
import './lord-page.css';
import LordFilter from '../lord-filter/lord-filter';
import LordAdd from '../lord-add';

export default function LordPage() {

    const lordService = new LordService();

    const [lords, setLords] = useState([]);
    const [freeLordsChecked, setFreeLordsChecked] = useState(false);
    const [topYongLordsChecked, setTopYongLordsChecked] = useState(false);

    const updateLords = () => {

        if (freeLordsChecked) {
            lordService.getAllFreeLords().then((freeLords) => {
                setLords(freeLords);
            })
        } else if (topYongLordsChecked) {

            lordService.getAllYongLords().then((yongLords) => {
                setLords(yongLords);
            })
        } else {
            lordService.getAllLords().then((lords) => {
                setLords(lords)
            });
        }

    }

    useEffect(() => {

        updateLords();

        return () => false;
    }, [freeLordsChecked, topYongLordsChecked]);



    const lordItems = lords.map((item) => {
        return <li
            className="list-group-item"
            key={item.id}>
            <Item

                item={item}
                renderItem={
                    () => <>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <span>Age {item.age}</span>
                    </>
                } />
        </li>
    });

    const showFreeLords = () => {
        setTopYongLordsChecked(false);
        setFreeLordsChecked(!freeLordsChecked);
    }
    const showTopYongLords = () => {
        setFreeLordsChecked(false);
        setTopYongLordsChecked(!topYongLordsChecked);
    }
    const showAllLords = () => {
        setFreeLordsChecked(false);
        setTopYongLordsChecked(false);
    }

    const localLordsChange = (lord) => {
        setLords([...lords, lord]);
    }

    return (
        <>
            <LordFilter
                showAllLords={showAllLords}
                showFreeLords={showFreeLords}
                showTopYongLords={showTopYongLords} />

            <LordAdd updateLords={localLordsChange} />

            <ul className="list-group">
                {lordItems}
            </ul>
        </>

    );
}


import React, { useEffect, useState } from 'react';
import LordService from '../../services/lord-service';
import Item from '../item/item';

export default function LordPage() {

    const lordService = new LordService();

    const [lords, setLords] = useState([]);

    useEffect(() => {

        let mouted = true;
        lordService.getAllLords().then((lords) => {
            setLords(lords)
        });
        return () => mouted = false;
    }, []);

    const lordItems = lords.map((item) => {
        return <Item lord={item} />
    });

    console.log(lordItems)
    return (
        <ul className="list-group">
            {lordItems}
        </ul>
    );
}
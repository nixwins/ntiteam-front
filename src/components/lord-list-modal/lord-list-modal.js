import React, { useState, useEffect } from 'react';
import LordService from '../../services/lord-service';
import './lord-list-modal.css'

const LordListModal = ({ isOpenLordsList, closeModal, selectedLord }) => {

    const clazzList = isOpenLordsList ? "lord-list-modal-container isOpen" : "lord-list-modal";
    const [lordsList, setLordsList] = useState([]);
    const lordService = new LordService();

    useEffect(() => {
        lordService.getAllLords().then((lords) => {
            setLordsList(lords)
        });
    }, [isOpenLordsList]);

    const onSelectItem = (id, name) => {
        closeModal();
        selectedLord(id, name);
    }
    const lordListItems = lordsList.map((item) => {
        return (
            <li
                className="list-group-item"
                onClick={() => onSelectItem(item.id, item.name)}>
                {item.name}
            </li>
        );
    })
    return (
        <div className={clazzList}>

            <div className="lord-list-modal-content">
                <div className="lord-list-modal-caption">
                    <h3>Select lord</h3>
                    <button className="btn btn-danger close-modal" onClick={closeModal}>x</button>
                </div>
                <ul className="list-group lord-list-group">
                    {lordListItems}
                </ul>
            </div>
        </div>
    )
}



export default LordListModal;
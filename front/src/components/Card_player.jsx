
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { BsFlagFill } from 'react-icons/bs';
import { MdSportsEsports } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const Card_player = () => {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get("http://localhost:3000/ath")
            .then((response) => setData(response.data));

    }, []);

    /*alert(JSON.stringify(data))*/

    return (
        <>
            <div className='container_card'>

                <div className="d-flex flex-wrap gap-3 justify-content-evenly">
                    {data.map((card_data) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card_data.photo} alt="photo athlete not load" />
                            <Card.Body>
                                <Card.Title>{card_data.name}</Card.Title>
                                <Card.Body><BsFlagFill /> | {card_data.nationalite}</Card.Body>
                                <Card.Body><MdSportsEsports /> | {card_data.sport}</Card.Body>
                                <Card.Body><FaUser /> | {card_data.genre}</Card.Body>
                                <div className="button_card">
                                    <Button variant="outline-secondary" onClick={handleShow} id='about'>En savoir plus</Button>
                                    <Button variant='success'>Like</Button>
                                    <Button variant='danger'>Dislike</Button>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{card_data.name}</Modal.Title>

                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>{card_data.description}</p>
                                    </Modal.Body>
                                </Modal>
                            </Card.Body >
                        </Card >
                    ))}
                </div >
            </div>
        </>
    );
};

export default Card_player;
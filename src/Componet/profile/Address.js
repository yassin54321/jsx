import React from 'react'
import { ListGroup } from 'react-bootstrap'
const Address = () => {
    return (
        <div>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ width: '290px', marginLeft: '40%' }}>Adress : Paris</ListGroup.Item>
                <br />
                <ListGroup.Item style={{ width: '290px', marginLeft: '40%' }}>numero : +33 6 11 22 33 44</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Address
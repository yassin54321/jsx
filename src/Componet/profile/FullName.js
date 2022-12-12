import React from 'react'
import { ListGroup } from 'react-bootstrap'

const FullName = () => {
    return (
        <div>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ width: '500px', marginLeft: '33%' }}>
                    Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin évoluant au poste d'attaquant au Paris Saint-Germain.
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default FullName
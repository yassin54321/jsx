import React from 'react'
import { Card } from 'react-bootstrap'

const ProfilePhoto = () => {
    return (
        <div>
            <Card style={{ width: '18rem', marginLeft: '40%' }}>
                <Card.Img variant="top" src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" />
                <Card.Body>
                    <Card.Title>lionel andres messi</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfilePhoto

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {
  return (
    <Card style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/02/25/14/12/rinnegan-6049194_1280.png" style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Proyecto React</Card.Title>
        <Card.Text>
         Diferentes ojos Naruto
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;

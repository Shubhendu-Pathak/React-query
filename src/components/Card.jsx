import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function MyCard({ele}) {
  return (
<Link to={`/product/${ele.id}`}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ele.image} />
      <Card.Body>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text>
    {ele.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
</Link>
  )
}

export default MyCard
import React from 'react'
import { Card , Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import DataOne from '../../orderDataOne';
import DataTwo from '../../orderDataTwo';
const Dashboard=()=> {
  const location = useLocation();
  const locationHash = location.hash
  var Data=DataOne
  if(locationHash=="#pending") Data=DataOne;
  else if(locationHash=="#completed") Data=DataTwo;
 
  return (
    <div>
      <Card>
      <Card.Header>
       <Nav variant="tabs" defaultActiveKey="#pending">
        <Nav.Item>
        <Nav.Link href="#pending">Orders Pending</Nav.Link>
         </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#completed">Orders Completed</Nav.Link>
        </Nav.Item>
       
        </Nav>
      </Card.Header>
      <Card.Body>
       
        
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default Dashboard

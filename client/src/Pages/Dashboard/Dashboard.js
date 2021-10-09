import React from "react";
import { Card, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardList from "../../Components/CardList/CardList";
import DataOne from "../../orderDataOne";
import DataTwo from "../../orderDataTwo";
import axios from "axios";

const Dashboard = () => {
  const location = useLocation();
  const locationHash = location.hash;
  const [orders, setOrders] = React.useState("");
  const getOrders = () => {
    var obj = {};
    obj["restaurant_id"] = 1;
    axios({
      method: "get",
      url: "http://localhost:5000/getorder",
    }).then((response) => {
      setOrders(response.data);
      console.log(response);
    });
  };
  React.useEffect(() => {
    getOrders();
  }, []);

  var data = DataOne;
  if (locationHash === "#pending") data = DataOne;
  else if (locationHash === "#completed") data = DataTwo;
  // const orders = JSON.parse(data);
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
          <CardList orders={orders} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Card, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardList from "../../Components/CardList/CompleteCardlist";
import DataOne from "../../orderDataOne";
import DataTwo from "../../orderDataTwo";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrder } from "../../actions/invent";
const Dashboard = () => {
  const orderRedux = useSelector((state) => state.invent);
  console.log("ok", orderRedux);
  const location = useLocation();
  const locationHash = location.hash;
  const [orders, setOrders] = React.useState("");
  // const getOrders = () => {
  //   var obj = {};
  //   obj["restaurant_id"] = 1;
  //   axios({
  //     method: "get",
  //     url: "http://localhost:5000/getorder",
  //   }).then((response) => {
  //     setOrders(response.data);
  //     console.log(response);
  //   });
  // };
  // React.useEffect(() => {
  //   getOrders();
  // }, []);
  // orderRedux.map((item, index) => {
  //   if (!item.status) {
  //     orderRedux.splice(index, 1);
  //   }
  // });
  console.log("completed", orderRedux);
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
              <Nav.Link href="/dashboard">Orders Pending</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/completeddash">Orders Completed</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <CardList orders={orderRedux} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

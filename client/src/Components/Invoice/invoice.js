import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./invoice.css";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Invoice = (props) => {
  const params = useParams();
  const ind = params.index;

  const [orders, setOrders] = React.useState("");
  const getOrders = () => {
    var obj = {};
    obj["restaurant_id"] = 1;
    axios({
      method: "get",
      url: "http://localhost:5000/getorder",
    }).then((response) => {
      setOrders(response.data[ind]);
      console.log(response.data[ind]);
    });
  };
  React.useEffect(() => {
    getOrders();
  }, []);
  if (orders) {
    const printDocument = () => {
      const doc = new jsPDF();

      //get html
      const pdfTable = document.getElementById("divToPrint");
      //html to pdf format
      var html = htmlToPdfmake(pdfTable.innerHTML);

      const documentDefinition = { content: html };
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.createPdf(documentDefinition).open();
    };
    const mapItems = () => {
      return orders.order.map((item, index) => {
        return (
          <tr class="content">
            <td>{Object.keys(item)[0]}</td>
            <td>{Object.values(item)[0][1]} </td>
          </tr>
        );
      });
    };
    return (
      <div className="App container mt-5">
        <button class="btn btn-primary" onClick={printDocument}>
          Export To PDF
        </button>
        <div id="divToPrint" className="m-3">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="d-flex flex-row p-2">
                  <div class="d-flex flex-column">
                    {" "}
                    <span class="font-weight-bold">Tax Invoice</span>{" "}
                    <small>{orders._id}</small>{" "}
                  </div>
                </div>

                <hr />
                <div class="table-responsive p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td>To</td>
                        <td>From</td>
                      </tr>
                      <tr class="content">
                        <td class="font-weight-bold">
                          Hotel Abhishek <br />
                          Pune
                        </td>
                        <td class="font-weight-bold">
                          {orders.source} <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="products p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td>Item Nmae</td>
                        <td>Quantity</td>
                      </tr>
                      {mapItems()}
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="products p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td class="text-center">Total</td>
                      </tr>
                      <tr class="content">
                        <td class="text-center">₹1780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};
export default Invoice;

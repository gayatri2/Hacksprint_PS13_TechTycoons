import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
class Invoice extends React.Component {
    printDocument() {
     
    
          const doc = new jsPDF();
         
          //get html
          const pdfTable = document.getElementById('divToPrint');
          //html to pdf format
          var html = htmlToPdfmake(pdfTable.innerHTML);
        
          const documentDefinition = { content: html };
          pdfMake.vfs = pdfFonts.pdfMake.vfs;
          pdfMake.createPdf(documentDefinition).open();
        
    }
 
  render() {
   
    return (
    <div className="container mt-5">
     <button class="btn btn-primary" onClick={this.printDocument}>Export To PDF</button>
    <div id="divToPrint" className="m-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
          <div class="card">
              <div class="d-flex flex-row p-2">
                  <div class="d-flex flex-column"> <span class="font-weight-bold">Tax Invoice</span> <small>INV-001</small> </div>
                  
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
                              <td class="font-weight-bold">Google <br />Attn: Jassa Smith Pymont <br />Australia</td>
                              <td class="font-weight-bold">Facebook <br /> Attn: Jassa Right Polymont <br /> USA</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              <div class="products p-2">
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                              <td>Description</td>
                              <td>Days</td>
                              <td>Price</td>
                              <td class="text-center">Total</td>
                          </tr>
                          <tr class="content">
                              <td>Website Redesign</td>
                              <td>15</td>
                              <td>$1,500</td>
                              <td class="text-center">$22,500</td>
                          </tr>
                          <tr class="content">
                              <td>Logo & Identity</td>
                              <td>10</td>
                              <td>$1,500</td>
                              <td class="text-center">$15,000</td>
                          </tr>
                          <tr class="content">
                              <td>Marketing Collateral</td>
                              <td>3</td>
                              <td>$1,500</td>
                              <td class="text-center">$4,500</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              <div class="products p-2">
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                              <td></td>
                              <td>Subtotal</td>
                              <td>GST(10%)</td>
                              <td class="text-center">Total</td>
                          </tr>
                          <tr class="content">
                              <td></td>
                              <td>$40,000</td>
                              <td>2,500</td>
                              <td class="text-center">$42,500</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <hr />
              <div class="address p-2">
                  <table class="table table-borderless">
                      <tbody>
                          <tr class="add">
                              <td>Bank Details</td>
                          </tr>
                          <tr class="content">
                              <td> Bank Name : ADS BANK <br /> Swift Code : 00220022 <br /> Account Holder : Jassa Pepper <br /> Account Number : 6953PO789 <br /> </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
      </div>
      
      
    </div>
 )
};
}
export default Invoice;
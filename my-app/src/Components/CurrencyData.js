import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

const CurrencyData = () => {
    
        // const[graph,setGraph]=useState([]);
         
        // const[getdata,setGetData]=useState([]);
       
       
        // const countryDetail = async () => {
        //   axios.get("http://localhost:5000/currency")
          
        //    .then(response => {
        //       setGetData(response.data);
        //    });
           
        //  }
        //  useEffect(() => {
        //   countryDetail();
        // }, []);
       
        
        // const selectChart = (e) =>
        // {   
        //   axios.get(`http://localhost:5000/currency`)
        //    .then(res => {
        //     const countryData = res.data;
        //     let countryName = [];
        //     let currencyName = [];
        //     countryData?.forEach(element => {
        //       countryName.push(element.country);
        //       currencyName.push(element.rate);
        //      });
        //       setGraph({
        //           labels: countryName,
        //           datasets: [
        //             {
        //               label: 'Currency Exchange Rates',
        //               backgroundColor:[
        //                   'green',
        //                   'red',
        //                   'blue',
        //                   '#FFBF00',
        //                   '#DE3163',
        //                   'orange',
        //                   '#40E0D0',
        //                   '#6495ED',
        //                   '#CCCCFF',
        //                   '#FFBF00',
        //                   '#DE3163',
        //                   '#9FE2BF',
        //                   '#CD5C5C'
        //                ],
        //               borderWidth:0,
        //               data: currencyName
        //             }
        //            ]
        //       });
        //     });
            
        // }
        // useEffect(() => {
        //   selectChart();
        // }, []);
      
        return(
           <div className="container">
            <h2>Bar Chat</h2>
              {/* <h4 className="text-center text-primary mt-2 mb-3">Graph Chart in ReactJS</h4> 
              <h6 className="text-center text-success mt-2 mb-3">Country Currency Exchange Rates</h6> 
              <div className="row mt-3">
                 <div className="col-sm-3">
                  
                    <div className=""> 
                     <table className=" table-bordered graphTable ">
                      
                      <tr>
                          <th>Country</th>
                          <th>Rates</th>
                      </tr> 
                        { getdata && getdata?.forEach((name)=>
                          <tr>
                            <td>{name.country}</td>
                            <td>${name.rate}</td>
                          </tr>                  
                       )}   
                     </table>     
                   </div>
                 </div>     
                 <div className="col-sm-9">
                 <Bar
                   data={graph}
                      options={{
                          title:{
                            display:true,
                            text:'Currency Rates',
                            fontSize:20
                          },
                          legend:{
                            display:true,
                            position:'right'
                          }
                      }}
                      />
                  </div>
                   
              </div>      */}
           </div>    
          )
      }

export default CurrencyData
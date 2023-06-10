import React from "react";
import randomArray from "../data/patient";

const Header = () => {
  const title = [
    "Id",
    "Name",
    "Ailment",
    "SLA",
    "P-TAT",
    "Stage",
    "Status",
    "Approved amount",
    "Hospital",
  ];

  return (
    //creating a header for the data
    <table class="table table-striped">
      <thead class="th-dark">
        <tr>
          {title.map((item, index) => {
            return (
            
                <th key={index} scope="col" class="text-black">{item}</th>
            
            );
          })}
        </tr>
      </thead>
      <tbody>
        {randomArray.map((item, index) => {
          return (
              <tr>
                <th scope="row" key={index}>
                  {item.id}
                </th>
                <td key={index}>{item.Name}</td>
                <td key={index}>{item.Ailment}</td>
                <td key={index}>{item.SLA}</td>
                <td key={index}>{item.pTAT}</td>
                <td key={index}>{item.Stage}</td>
                <td key={index}>{item.Status}</td>
                <td key={index}>{item.approvedAmount}</td>
                <td key={index}>{item.Hospital}</td>
              </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Header;

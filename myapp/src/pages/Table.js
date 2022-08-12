import React from "react";


function Tables() {
  return (
    <div>
          <table>
          <tr>
            <th>Name</th>
            <th>Nick Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>John.S</td>
            <td>Smith</td>
            <td>29-jun-1987</td>
            <td>12-Aug-2021</td>
            <td>Male</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Joseph</td>
            <td>John</td>
            <td>30-jun-1985</td>
            <td>10-Aug-2021</td>
            <td>Male</td>
            <td>InActive</td>
          </tr>
          <tr>
            <td>Smitha S</td>
            <td>Joy</td>
            <td>24-jun-1999</td>
            <td>09-Aug-2021</td>
            <td>Female</td>
            <td>Active</td>
          </tr>
          
        </table>
    </div>
  );
}

export default Tables;
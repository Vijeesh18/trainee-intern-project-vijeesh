
import React,{useEffect,useState} from 'react';

function Tables({users}){


 
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
            <th>Blood Grp</th>
            <th>Ph.Number</th>
            <th>Address</th>
          </tr>
          {users&&users.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.birthDate}</td>
                        <td>{data.age}</td>
                        <td>{data.gender}</td>
                        <td>{data.email}</td>
                        <td>{data.bloodGroup}</td>
                        <td>{data.phone}</td>
                        <td>{data.address.address}</td>

                       
                    </tr>
                ))}
          
        </table>
    </div>
  );
}

export default Tables;
import React, { useState } from "react";
import { Button } from "@material-ui/core";

function GridEdit() {
  

  return (
    <>

<style jsx>{`
        .wrap {
          background-color: white;
          width:500px;
          height:500px;
          display:flex;
          align-items:center;
          margin:auto;
          margin-top:40px
        }

        @media(max-width:767px)
        {
          .wrap {
            width:328px
          }
        }
        .edit_wrap{
          background-color:white;
          padding:50px;
          width:100%;
          display:flex;
          justify-content:center;
          flex-direction:column;
        }
        
      `}</style>
    <div className="wrap" >
   <div className="edit_wrap" >

<h2>EDIT</h2>

<form action="/action_page.php"/>
  <label for="fname">Billing Name:</label>
  <input type="text" id="fname" name="fname" placeholder="Billing Name" style={{ padding: '10px', border: '1px solid lightgrey' }}/><br/>
  <label for="lname">Total:</label>
  <input type="text" id="lname" name="lname" placeholder="Total" style={{ padding: '10px', border: '1px solid lightgrey' }}/><br/>
  <label for="lname">Status:</label>
  <input type="text" id="lname" name="lname" placeholder="Status" style={{ padding: '10px', border: '1px solid lightgrey' }}/><br/><br/>
  <div className="btn-wrap" style={{ display: 'flex', justifyContent: 'center', }}>
            <Button variant="primary" style={{ backgroundColor: 'lightgrey', margin: '10px' }}>
              Update
            </Button>
          </div>


   </div>
   </div>
  
   </>
  );
}

export default GridEdit;

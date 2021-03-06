import React, { useState, } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Image from "../../assets/images/edit.png";
import "./Grid.module.scss";
import { Modal } from "react-bootstrap";
import { FormGroup } from "@mui/material";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "none",
    "& .paxton-table--row": {
      border: "none",
      marginTop: "15px",
      marginBottom: theme.spacing(1),
      backgroundColor: "white",
    },
    "& .paxton-table--cell": {
      border: "none",
    },
  },
}));
const columns = [
  { field: "id", headerName: "Order ID", width: 150 },
  { field: "firstName", headerName: "Date", width: 150 },
  { field: "lastName", headerName: "Billing Name", width: 250 },
  { field: "total", headerName: "Total", width: 150 },
  {
    field: "Payment Status", width: 150,
    renderCell: (cellValues) => {
      return (
        <Button
          className="status_paid"
          variant="contained"
          style={{
            background: "lightgreen",
            fontSize: "13px",
            color: "green",
            height: "30px",
          }}
        >
          Paid
        </Button>
      );
    },
  },
  {
    field: "Action",width: 150,
    renderCell: (cellValues) => {
      return (
        <a href="/GridEdit">
          <img src={Image} alt="edit" width="18px" height="18px" />
        </a>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11 },
];

export default function DataTable() {
  const classes = useStyles();

  const [showModal, setShow] = useState();
  return (
    <>

<style jsx>{`
      
        @media(max-width:767px)
        {
          .modal-content {
            top:44px
          }
        }
        
      `}</style>

      <div className="page-heading">
        <h1>Manage PO </h1>
        <Button
          className="btn_upload"
          variant="primary"
          style={{ backgroundColor: "lightgrey", margin: "10px" }}
          onClick={() => setShow(true)}
        >
          Upload PO
        </Button>
      </div>
      <DataGrid
      rowHeight={44}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        className={classes.root}
        getRowClassName={() => "paxton-table--row"}
      />

      <Modal
        show={showModal}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <label>Upload PO</label>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup
            className="text_wrap mb-3"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <label for="fname">Order Title</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              style={{ padding: "10px", border: "1px solid lightgrey" }}
              placeholder="Order Title.."
            />
          </FormGroup>
          <FormGroup
            className="text_wrap mb-3"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <label for="fname">Order No</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              style={{ padding: "10px", border: "1px solid lightgrey" }}
              placeholder="Order Title.."
            />
          </FormGroup>

          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div
            className="btn-wrap"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="primary"
              style={{ backgroundColor: "lightgrey", margin: "10px" }}
            >
              Upload
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

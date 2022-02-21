import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Image from "../../assets/images/edit.png";
import Image1 from "../../assets/images/validTick.svg";
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
  { field: "id", headerName: "Order ID", width: 250 },
  { field: "firstName", headerName: "Date", width: 250 },
  { field: "lastName", headerName: "Billing Name", width: 250 },
  { field: "total", headerName: "Total", width: 250 },
  {
    field: "Print",
    renderCell: (cellValues) => {
      return (
        <Button className="status_paid" variant="contained" style={{ background: 'lightgreen', fontSize:'13px', color: 'green', height: '30px' }} >
          Paid
        </Button>
        
      );
    },
  },
  {
    field: "Action",
    renderCell: (cellValues) => {
      return (
<img src={Image}  alt="edit" width="30px" height="30px"/>
        
      );
    },
  },

  
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11, },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11,},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11, },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11, },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11, },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11, },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11, },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11, },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11, },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11, },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11,},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11, },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11, },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11, },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11, },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11, },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11, },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11, },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11, },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11,},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11, },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11, },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11, },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11, },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11, },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11, },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11, },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, total: 11, },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, total: 11,},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, total: 11, },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, total: 11, },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, total: 11, },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, total: 11, },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, total: 11, },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, total: 11, },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, total: 11, },
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <div style={{ height: '100vh', width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        className={classes.root}
        getRowClassName={() => "paxton-table--row"}
      />
    </div>
  );
}

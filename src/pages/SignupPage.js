import React from "react";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { style } from "dom-helpers";

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];


function SignupPage() {
  return (
    <div>
  SignupPage
  </div>
  );
}

export default () => (
  <Paper>
    <Grid
      rows={rows}
      columns={columns}
    >
      <Table />
      <TableHeaderRow />
    </Grid>
  </Paper>
);

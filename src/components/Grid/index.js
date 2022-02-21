import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";


export default () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows, setRows] = useState([
    {
      name: "ajay",
      gender: "male",
      city: "sby",
      car: "polo",
    },
    {
      name: "james",
      gender: "male",
      city: "any",
      car: "audi",
    }
  ]);

  console.log("");
  const [selection, setSelection] = useState([]);

  return (
    <div>
      <span>Total rows selected: {selection.length}</span>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <PagingState defaultCurrentPage={0} pageSize={6} />
          <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <IntegratedPaging />
          <IntegratedSelection />
          <Table />
          <TableHeaderRow />
          <TableSelection showSelectAll />

          <PagingPanel />
        </Grid>
      </Paper>
    </div>
  );
};

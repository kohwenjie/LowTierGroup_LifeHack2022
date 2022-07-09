import * as React from "react";
import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MKButton from "components/MKButton";
import { useNavigate } from "react-router-dom";
import { getBinsLocation } from "api/Api";

export default function RecyclingPointsTable() {
  const [binList, setBinList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBinsLocation(setBinList);
  }, []);

  const onEditClicked = (e, record) => {
    e.preventDefault();
    console.log("Delete", record);
    navigate(`edit/${record.id}`);
  };

  const onDeleteClicked = (e, record) => {
    e.preventDefault();
    console.log("Edit", record);
  };

  return (
    <Paper sx={{ padding: "5vh" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableRow>
            <TableCell>
              <b>Location Name</b>
            </TableCell>
            <TableCell>
              <b>Longtitude</b>
            </TableCell>
            <TableCell>
              <b>Latitude</b>
            </TableCell>
            <TableCell>
              <b>Type</b>
            </TableCell>
          </TableRow>
          <TableBody>
            {binList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.data.Location._long}</TableCell>
                <TableCell>{row.data.Location._lat}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <MKButton onClick={(e) => onEditClicked(e, row)}>
                    Edit
                  </MKButton>
                </TableCell>
                <TableCell>
                  <MKButton onClick={(e) => onDeleteClicked(e, row)}>
                    Delete
                  </MKButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

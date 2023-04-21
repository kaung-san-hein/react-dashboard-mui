import React, { useState } from "react";
import TableRow from '@mui/material/TableRow'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CustomTextField from "../components/input/CustomTextField";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable, { StyledTableCell, StyledTableRow } from "../components/table/CustomTable";
import { accounts } from "../mock/accounts";
import CustomPagination from "../components/pagination/CustomPagination";

const AccountList = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return (
        <Box>
            <Button
                variant="outlined"
                startIcon={<ArrowBackIosNewIcon />}
                sx={{
                    borderColor: "var(--primary-color)",
                    color: "var(--primary-color)",
                }}
            >
                Back
            </Button>
            <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{
                    fontWeight: "bold",
                    color: "var(--primary-color)",
                    marginTop: "10px",
                }}
            >
                Accounts
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid alignItems="center" container spacing={2}>
                    <Grid item sm={4}>
                        <CustomTextField
                            label="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <CustomTextField
                            label="Enter Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Button
                            variant="contained"
                            endIcon={<SearchIcon />}
                            sx={{
                                bgcolor: "var(--primary-color)",
                            }}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <CustomTable
                header={
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Plain Password</StyledTableCell>
                        <StyledTableCell>Role</StyledTableCell>
                        <StyledTableCell>Township</StyledTableCell>
                        <StyledTableCell>Project</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                }
                body={
                    accounts.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.email}</StyledTableCell>
                            <StyledTableCell>{row.plain_password}</StyledTableCell>
                            <StyledTableCell>{row.role}</StyledTableCell>
                            <StyledTableCell>{row.township}</StyledTableCell>
                            <StyledTableCell>{row.project}</StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" color="info" sx={{ marginRight: '3px' }}>Update</Button>
                                <Button variant="contained" color="error">Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            />
            <CustomPagination />
        </Box>
    );
};

export default AccountList;

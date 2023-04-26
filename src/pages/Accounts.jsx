import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CustomTextField from "../components/input/CustomTextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import CustomTable, {
    StyledTableCell,
    StyledTableRow,
} from "../components/table/CustomTable";
import { accounts } from "../mock/accounts";
import CustomPagination from "../components/pagination/CustomPagination";
import { roles } from "../mock/roles";
import CustomSelectBox from "../components/selectbox/CustomSelectBox";
import AddIcon from '@mui/icons-material/Add';
import CustomModal from "../components/modal/CustomModal";

const AccountList = () => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [open, setOpen] = useState(false)

    const [data, setData] = useState({
        email: '',
        role: ''
    })

    const options = roles.map((element) => ({
        value: element.id,
        label: element.name,
    }));

    const handleSearch = () => {
        console.log(email, role);
    };

    return (
        <>
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
                <Box sx={{ flexGrow: 1, mb: 2 }}>
                    <Grid alignItems="center" container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <CustomTextField
                                label="Enter Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CustomSelectBox
                                label="Role"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                                options={options}
                                onClear={() => setRole("")}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                variant="contained"
                                endIcon={<SearchIcon />}
                                sx={{
                                    bgcolor: "var(--primary-color)",
                                }}
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                variant="contained"
                                endIcon={<AddIcon />}
                                color="success"
                                onClick={() => setOpen(true)}
                            >
                                New
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
                    body={accounts.map((row) => (
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
                                <Button variant="contained" color="info" sx={{ m: 1 }}>
                                    Update
                                </Button>
                                <Button variant="contained" color="error" sx={{ m: 1 }}>
                                    Delete
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                />
                <CustomPagination />
            </Box>
            <CustomModal title="New Account" isOpen={open} onClick={(prev) => setOpen(!prev)}>
                <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomTextField
                            label="Enter Email"
                            value={data.email}
                            onChange={(event) => setData({ ...data, email: event.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomSelectBox
                            label="Select Role"
                            value={data.role}
                            onChange={(event) => setData({ ...data, role: event.target.value })}
                            options={options}
                            onClear={() => setData({ ...data, role: "" })}
                        />
                    </Grid>
                </Grid>
                <Grid mt={3} justifyContent="end" alignItems="center" container spacing={2}>
                    <Grid item>
                        <Button variant="contained" color="secondary">
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="success">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </CustomModal>
        </>
    );
};

export default AccountList;

import { Typography, Box, AppBar, IconButton, Button, ThemeProvider } from "@mui/material"
import { currentUser } from "./atoms/user"
import { useRecoilValue } from "recoil";
import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { LoadingOverlay } from "./isLoading";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography1 from '@mui/joy/Typography';


function Dashboard() {

    return (
        <GreyTopper/>
    )
}

function GreyTopper() {

    const loggedInUser = useRecoilValue(currentUser);

    return (
        <div style={{
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            height: 100,
            padding: 100
        }}>
            <Typography variant="h6">
                Welcome {loggedInUser.user}
            </Typography>
        </div>
    )
}

export default Dashboard;
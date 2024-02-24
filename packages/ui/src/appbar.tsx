import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentUser } from "./atoms/user";
import React from "react";
import { usefetchUser } from "../src/api/api";
import  { LoadingOverlay } from "./isLoading";
import { Stack, Box, Divider, Button } from '@mui/joy';


function Appbar() {

    const navigate = useNavigate();
    const [user, setuser] = useRecoilState(currentUser);
    const fetchuser = usefetchUser();

    useEffect(() => {
        fetchuser() 
    }, []);
       
    if(user.isLoading) {
        <LoadingOverlay/>
    }
        if(user.user) {  
        return (
            <div style={{
                backgroundColor: "#363636",
                display: "flex",
                justifyContent: "space-between",
                padding: 5
            }}>
                <Typography variant={"h6"} style={{
                    color: "white",
                    marginLeft: 5,
                }}>
                    {user.user}
                </Typography>

                <div>
                <button
                    onClick = {() => {navigate("/dashboard");}}
                    style={{marginRight: 5}}> DASHBOARD
                </button>

                <button
                    onClick = {() => {navigate("/admin/courses");}}
                    style={{marginRight: 5}}> COURSES
                </button>

                <button
                    onClick = {() => {navigate("/admin/addcourse");}}
                    style={{marginRight: 5}}> ADD COURSE
                </button>

                <button
                    onClick = {() => {navigate("/counter")}}
                    style={{marginRight: 5}}> COUNTER
                </button>
                <button 
                    onClick = {() => {
                        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        setuser((ex) => ({
                            ...ex,
                            user: ""
                        }));
                        navigate("/signin");
                    }}>
                        LOG OUT
                </button>
                </div>
            </div>
        );
        } else {
        return (
        <div style={{ 
            display: "flex",
            justifyContent: "flex-end"
        }}>
            <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" />}
        spacing={1}
        justifyContent="flex-end"
      > 
                <Button size="sm" variant="soft"
                    onClick = {() => {navigate("/Signup");}} 
                    style={{marginTop: "4px"}}> SIGN UP
                </Button>
                <Button size="sm" variant="soft"
                    onClick = {() => {navigate("/Signin");}}
                    style = {{marginRight: "4px", marginTop: "4px"}}> SIGN IN
                </Button>
      </Stack>
    </Box>
        </div>
        )
        }
}



export default Appbar;

// FOR PARSING THE COOKIE 
// () => {
    //     const cookies = document.cookie.split(';');
    //     for (let i = 0; i < cookies.length; i++) {
    //         const cookie = cookies[i].trim();
    //         if (cookie.startsWith(`token=`)) {
    //             return cookie.substring("token".length + 1);
    //         }
    //     }
    //     return null;
    // };

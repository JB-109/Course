import Signup from "./signup";
import Signin from "./signin";
import AddCourse from "./addCourse";
import Courses from "./Courses";
import Counter from "./Counter";
import Dashboard from "./dashboard";
import React from "react";

export const routes = [
    { path: "/Signup", element: <Signup/>},
    { path: "/admin/Courses", element: <Courses/>},
    { path: "/Signin", element: <Signin/>},
    { path: "/admin/addcourse", element: <AddCourse/>},
    { path: "/counter", element: <Counter/>},
    { path: "/dashboard", element: <Dashboard/>}
];

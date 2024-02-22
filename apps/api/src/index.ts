import { log } from "@repo/logger";

import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import cookieParser from "cookie-parser";
import endPoints from "@repo/ui/endPoints/endPoints.js";
import { requests } from "@repo/ui/middleware/api/api";

app.use(express.json());
app.use(cookieParser());
app.use(requests);
app.use(cors({ credentials: true, origin: "http://localhost:3001", maxAge: 86400}));

//SERVER
const server = app.listen(port, () => {
  log(`Server Started at Port ${port}`);
});

//ADMIN END-POINTS
app.use("/admin", endPoints);

// //USER END-POINTS
// app.use("/user", userEndPoints);
// Testing
// Testing

import { CssBaseline } from "@mui/material";
// import React from "react";
// import { ReactNode } from "react";
import { Paper } from "@mui/material";
import React, { FC, ReactNode } from "react"

const Wrapper: FC<{ children: ReactNode }> = (props: any) => {
  return (
    <>
      <CssBaseline />
      <div>
        <Paper>{props.children}</Paper>
      </div>
    </>
  );
};

export default Wrapper;

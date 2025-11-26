"use client";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { aaa } from "./theme";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ThemeProvider theme={aaa}>{children}</ThemeProvider>;
}

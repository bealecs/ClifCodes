"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import Header from "../components/Header";

const Schedule = () => {
  return (
    <div>
      <Header />
      <InlineWidget url="https://calendly.com/clifcodes/consult" />
    </div>
  );
};

export default Schedule;

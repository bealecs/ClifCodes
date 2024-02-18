"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Schedule() {
  return (
    <div>
      <Header />
      <InlineWidget url="https://calendly.com/clifcodes/consult" />
      <Footer />
    </div>
  );
};


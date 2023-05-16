"use client";
import { LanType } from "@/types";
import React, { useState } from "react";

const lanSlice = () => {
  const [selectedLan, setLan] = useState<LanType>({
    tag: "bn",
    label: "Bangla",
  });

  const selectLan = (lan: LanType) => {
    setLan(lan);
  };

  return {
    selectLan,
    selectedLan,
  };
};

export default lanSlice;

"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePicker({ className, onChange }) {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <Datepicker
        inputClassName={`bg-white rounded-[10px] border-[#E2E8F0] border-[1px] ${className}`}
        startFrom="2024-03-01"
        displayFormat="DD MMMM, YYYY"
        value={value}
        onChange={handleValueChange}
        asSingle={true}
        useRange={false}
        primaryColor={"blue"}
      />
    </div>
  );
}

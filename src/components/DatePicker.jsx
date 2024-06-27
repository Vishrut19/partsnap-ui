"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePicker() {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Datepicker
        inputClassName="bg-white rounded-[10px] w-[271px] border-[#E2E8F0] border-[1px]"
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

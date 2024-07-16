"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePicker({ className, onChange }) {
  const [value, setValue] = useState(null);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue ? new Date(newValue.startDate) : null);
    }
  };

  const formatTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      <Datepicker
        inputClassName={`bg-white rounded-[10px] border-[#E2E8F0] border-[1px] ${className}`}
        startFrom={new Date().toISOString().split("T")[0]}
        displayFormat="DD MMMM, YYYY"
        value={value}
        onChange={handleValueChange}
        asSingle={true}
        useRange={false}
        primaryColor={"blue"}
        placeholder={formatTodayDate()}
      />
    </div>
  );
}

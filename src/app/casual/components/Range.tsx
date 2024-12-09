"use client"
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

export default function Range() {
  const [range, setRange] = useState([200, 350]);

  const handleChange = (newRange: any) => {
    setRange(newRange);
  };

  return (
    <div className="w-full max-w-[247px] mx-auto">
      <Slider
        range
        min={100}
        max={500}
        defaultValue={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: "black", height: 4 }]}
        handleStyle={[
          { backgroundColor: "black", borderColor: "black" },
          { backgroundColor: "black", borderColor: "black" },
        ]}
      />
      <div className="ml-[30px] w-[165px] flex justify-between mt-2 text-sm font-medium">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
}
import React from "react";

function EmployeeCard({ name, desig, src, current }) {
  return (
    <div
      className={`rounded-xl px-2 py-4 hover:bg-[#323fdd]/20 ${
        name === "Nitish Kumar" ? "bg-[#323fdd]/20" : ""
      } bg-gray-100 flex flex-row gap-x-4 items-center cursor-pointer`}
    >
      <div>
        <img
          src={src}
          width={0}
          height={0}
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="font-semibold line-clamp-1">{name}</div>
        <div className="text-xs text-gray-600 line-clamp-1">{desig}</div>
      </div>
    </div>
  );
}

export default EmployeeCard;

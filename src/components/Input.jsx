import React from "react";

export const Input = ({
  placeholder,
  value = "",
  label = "",
  onChange,
  name,
  disabled = false,
  required = false,
  type = "text",
}) => {
  return (
    <label className="w-full flex flex-col gap-y-1">
      {label != "" && (
        <span className="text-start block text-sm font-medium text-gray-400">{label}</span>
      )}
      <input
        autoComplete="off"
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-3 h-[3rem] block w-full rounded-lg sm:text-md bg-[#F7FAFC] text-black border
                     border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 
                     focus:ring-sky-500 focus:ring-1  disabled:text-gray-500"
      />
    </label>
  );
};

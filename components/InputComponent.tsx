// import React from 'react'

// export const InputComponent = ({type,placeholder}:{type:string, placeholder:string}) => {
//   return (
//     <input className="w-full p-2 border border-gray-300 rounded-md mt-1" name={type} type={type} placeholder={placeholder} />
//   )
// }

// import React from 'react';

type InputProps = {
  type: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  error?: string;
};

export const InputComponent = ({
  type,
  name,
  placeholder,
  required = false,
  value,
  onChange,
  minLength,
  maxLength,
  pattern,
  error,
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        className={`w-full p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-blue-300'
        }`}
        name={name || type}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

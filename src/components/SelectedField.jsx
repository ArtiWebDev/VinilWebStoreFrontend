import React from 'react'

const SelectedField = ({ label, name, options, register }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-bold text-gray-700">{label}</label>
      <select
        {...register(name, { required: true })}
        className="w-full font-semibold p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectedField

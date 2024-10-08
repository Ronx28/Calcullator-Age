import React, { useState } from "react";
import './Calculator.css'

const calculateAge = (day, month, year) => {
    const today = new Date();
    const birth = new Date(year, month - 1, day);
  
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return { years, months, days };
  };
  
  const AgeCalculator = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  
    const handleCalculate = () => {
      setAge(calculateAge(day, month, year));
    };
  
    return (
      <div className="flex flex-col items-center justify-center mt-20 p-10 bg-gray-100 rounded-xl shadow-md max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-700">Age Calculator</h1>
        
        <div className="flex space-x-4 mb-8">
          <div className="flex flex-col items-center">
            <label htmlFor="day" className="text-sm font-medium text-gray-500 mb-2">DAY</label>
            <input
              id="day"
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-20 p-2 border-2 border-gray-300 rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="DD"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <label htmlFor="month" className="text-sm font-medium text-gray-500 mb-2">MONTH</label>
            <input
              id="month"
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-20 p-2 border-2 border-gray-300 rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="MM"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <label htmlFor="year" className="text-sm font-medium text-gray-500 mb-2">YEAR</label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-28 p-2 border-2 border-gray-300 rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="YYYY"
            />
          </div>
        </div>
  
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={handleCalculate}
          className="w-full p-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-8"
        >
          Calculate Age
        </button>
  
        <div className="text-center ">
          <div className="text-5xl font-extrabold mb-2">
            <span className="text-purple-600">{age.years}</span> <span className="text-gray-700">years</span>
          </div>
          <div className="text-4xl font-extrabold mb-2">
            <span className="text-purple-600">{age.months}</span> <span className="text-gray-700">months</span>
          </div>
          <div className="text-4xl font-extrabold">
            <span className="text-purple-600">{age.days}</span> <span className="text-gray-700">days</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default AgeCalculator;
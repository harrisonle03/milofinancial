import React, { useState } from 'react';
import Papa from 'papaparse';
import { Card } from "@material-tailwind/react"

export default function Transactions() {
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (result) {
        const valuesArray = result.data.map((d) => Object.values(d));

        // Example: Provide your own column headers
        const providedHeaders = ["Date", "Purchase", "Expense", "Income", "Balance"];
        
        // Use provided headers if they match the number of columns
        const columnArray = providedHeaders.length === valuesArray[0].length
          ? providedHeaders
          : Array.from({ length: valuesArray[0].length }, (_, i) => `Column ${i + 1}`);
        setData(result.data);
        setColumn(columnArray);
        setValues(valuesArray);
      },
    });
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[96rem] bg-[#1F2833]">
      <h1>Full Transaction History</h1>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFile}
        className="block m-10"
      />

      {data.length > 0 && (
        <table className="border-round">
          <thead>
            <tr>
              {columnArray.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((v, i) => (
              <tr key={i}>
                {v.map((value, j) => (
                  <td key={j}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
}

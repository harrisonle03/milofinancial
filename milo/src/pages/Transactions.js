import React, { useState } from 'react';
import Papa from 'papaparse';

export default function Transactions() {
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const columnArray = Object.keys(result.data[0]);
        const valuesArray = result.data.map((d) => Object.values(d));

        setData(result.data);
        setColumn(columnArray);
        setValues(valuesArray);
      },
    });
  };

  return (
    <div>
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
    </div>
  );
}

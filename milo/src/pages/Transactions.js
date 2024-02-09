import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import React, { createContext, useState, useContext } from "react";
import Papa from "papaparse"
 
export default function Transaction() {
  const [values, setValues] = useState([]);
  const [thirdColumnTotal, setThirdColumnTotal] = useState(0);
  const [fourthColumnTotal, setFourthColumnTotal] = useState(0);

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (result) {
        const valuesArray = result.data.map((d) => Object.values(d));
        setValues(valuesArray);

        // Sum up values in the third and fourth columns
        const thirdColumnSum = valuesArray.reduce(
          (acc, row) => acc + parseFloat(row[2] || 0),
          0
        );
        const fourthColumnSum = valuesArray.reduce(
          (acc, row) => acc + parseFloat(row[3] || 0),
          0
        );

        // Set state variables and log them
        setThirdColumnTotal(thirdColumnSum);
        setFourthColumnTotal(fourthColumnSum);
        console.log("Total Expenses:", thirdColumnSum);
        console.log("Total Income:", fourthColumnSum);
      },
    });
  };

  const TABLE_HEAD = ["Date", "Name", "Expense", "Income", "Balance"]

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[96rem] bg-[#1F2833] overflow-hidden">
      <div className="p-4 rounded-none bg-[#1F2833]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h1 className="text-cyan-200 text-2xl font-bold">
              Recent Transactions
            </h1>
            <h1 className="text-white">
              These are details about the last transactions
            </h1>
          </div>
          <div>
            <h1 className="text-cyan-200 text-2xl font-bold">Please insert a file to get started.</h1>
            <input
            type="file"
            name="file"
            accept=".csv"
            onChange={handleFile}
            className="text-white"
            />
          </div>
        </div>
      </div>
      <CardBody className="overflow-y-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="border-y border-blue-gray-100">
                  <p className="font-normal text-white">{head}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={
                      colIndex === rowData.length - 1
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50"
                    }
                  >
                    <h1
                      className="font-normal text-white"
                    >
                      {value}
                    </h1>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
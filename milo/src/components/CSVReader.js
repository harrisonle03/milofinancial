import React from 'react';
import { CSVReader } from 'react-papaparse';

class CSVReaderComponent extends React.Component {
    handleFileUpload = (data) => {
        const jsonData = data.map((row) => {
            return {
                column1: row.data[0],
                column2: row.data[1],
                // Add more columns as needed
            };
        });

        const jsonFile = JSON.stringify(jsonData);
        // You can save the jsonFile to a JSON file using FileSaver.js or any other method
        console.log(jsonData);
    };

    render() {
        return (
            <CSVReader
                onFileLoad={this.handleFileUpload}
                onError={() => console.log('Error reading CSV file')}
            />
        );
    }
}

export default CSVReaderComponent;

import React from 'react'; // Import React library for building UI components 
import axios from 'axios'; // Import axios for retrieving data from Backend
import { AgGridReact } from 'ag-grid-react'; // Import AG Grid React wrapper.
import 'ag-grid-community/styles/ag-grid.css'; // Import AG Grid base styles.
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Import AG Grid theme styles.

const GridComponent = () => {
  // Define state variables using useState hook
  // rowData stores the fetched data from the backend
  // setRowData is a function to update the value of rowData
  const [rowData, setRowData] = useState([]);

  // Fetch the data from the backend when the component mounts
  useEffect(() => {
    // Replace 'api-endpoint' with the actual URL to fetch the data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('api-endpoint');
        // Set the row data to the data from backend
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
      }
    };

    fetchData();
  }, []);

  // Define the column headers and their properties
  // Allow sorting, show sorting icon, and let column size be resizable
  const columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, unSortIcon: true, resizable: true},
    { headerName: 'Age', field: 'age', sortable: true,  unSortIcon: true: resizable: true},
  ];

  return (
    // The container div for the AG Grid component with specified height and width
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      {/* The AgGridReact component is used to render the grid */}
      <AgGridReact
        // Pass the column definitions to the grid
        columnDefs={columnDefs}
        // Pass the fetched row data to be displayed in the grid
        rowData={rowData}
      />
    </div>
  );
};

export default GridComponent;

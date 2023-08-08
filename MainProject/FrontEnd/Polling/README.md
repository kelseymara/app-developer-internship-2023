# Polling Functionality using `useEffect` and `setInterval`

This example demonstrates the utilization of the `useEffect` hook in a React component to implement polling behavior for fetching data from an API at regular intervals.


## Functionality

The fetches data from an API at regular intervals using the `useEffect` hook and `setInterval`. 
It demonstrates how to perform polling for data updates and display the fetched data in the UI. 
The component also handles cleaning up the interval when the component unmounts.

## Code 
``` Typescript
// Snippet of Polling: setting an interval of 10 seconds and calling fetchData every 10 seconds
useEffect(() => {
    fetchData(); // Initial Call of fetch Data function (not implemented here)

    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

```

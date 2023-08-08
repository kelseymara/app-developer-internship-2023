// Snippet of Polling: setting an interval of 10 seconds and calling fetchData every 10 seconds
useEffect(() => {
    fetchData(); // Initial Call of fetch Data function (not implemented here)

    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

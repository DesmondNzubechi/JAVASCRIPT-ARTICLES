// Basic Fetch Syntax
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Customizing Fetch Requests
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => {
    console.log('Fetched and processed data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

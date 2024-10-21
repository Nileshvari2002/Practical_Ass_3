const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 5000;

app.use(express.json());

app.get('/fetch-students', async (req, res) => {
    try {
        const response = await axios.get('http://localhost/student.php');
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from PHP API:', error);
        res.status(500).send('Error fetching data from PHP API');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/profile', (req, res) => {
    const profileData = req.body;
    console.log('Received Profile Data:', profileData);
    // You can save the profile data to a database or perform other actions here
    res.json({ success: true });
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

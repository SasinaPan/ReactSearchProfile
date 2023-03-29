const express = require('express');
const app = express();

// mock data
const profile = [
    {
        "id": 1,
        "name": "Diamond Gamer",
        "rossy": "(Developer)",
        "email": "Diamond@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 2,
        "name": "Dancing Madman",
        "rossy": "(Developer)",
        "email": "Dancing@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 3,
        "name": "Final Fantasy",
        "rossy": "(Developer)",
        "email": "Final.Fantasy@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 4,
        "name": "Shining Diamond",
        "rossy": "(Developer)",
        "email": "Shining@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 5,
        "name": "Benjamin",
        "rossy": "(Developer)",
        "email": "Benjamin@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 6,
        "name": "Malika Sakulwong",
        "rossy": "(Developer)",
        "email": "Malika@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 7,
        "name": "Abigail Bruce",
        "rossy": "(Developer)",
        "email": "Abigail.Bruce@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 8,
        "name": "Michael Mike Wheeler",
        "rossy": "(Developer)",
        "email": "Mike.Wheeler@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 9,
        "name": "Jane Ives",
        "rossy": "(Developer)",
        "email": "Jane.Ives@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 10,
        "name": "Will Byers",
        "rossy": "(Developer)",
        "email": "Will.Byers@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 11,
        "name": "Dustin Henderson",
        "rossy": "(Developer)",
        "email": "Dustin.Henderson@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 12,
        "name": "Lucas Sinclair",
        "rossy": "(Developer)",
        "email": "Lucas.Sinclair@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 13,
        "name": "Nancy Wheeler",
        "rossy": "(Developer)",
        "email": "Nancy.Wheeler@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 14,
        "name": "Jonathan Byers",
        "rossy": "(Developer)",
        "email": "Jonathan.Byers@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 15,
        "name": "Steve Harrington",
        "rossy": "(Developer)",
        "email": "Steve.Harrington@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 16,
        "name": "Maxine Max Mayfield",
        "rossy": "(Developer)",
        "email": "Max.Mayfield@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 17,
        "name": "Eddie.Munson",
        "rossy": "(Developer)",
        "email": "Eddie.Munson@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 18,
        "name": "Billy Hargrove",
        "rossy": "(Developer)",
        "email": "Billy.Hargrove@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 19,
        "name": "Joyce Byers",
        "rossy": "(Developer)",
        "email": "Joyce.Byers@gmail.com",
        "starDate": "1 may 2023 "
    },
    {
        "id": 20,
        "name": "Jim Hopper",
        "rossy": "(Developer)",
        "email": "Jim.Hopper@gmail.com",
        "starDate": "1 may 2023 "
    }
];

app.get('/profile', (req, res) => {
    res.json(profile);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const result = profile.find((product) => profile.id === id);
    res.json(result);
});

app.post('/profile', (req, res) => {
    const payload = req.body;
    res.json(payload);
});

app.put('/profile/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});

app.listen(9000, () => {
    console.log('Application is running on port 9000');
});
const express = require('express');
const bodyParser = require('body-parser');
const { User, Address } = require('./models');

const app = express();
app.use(bodyParser.json());

// POST endpoint to register user and address
app.post('/register', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Create the user
    const user = await User.create({ name });

    // Create the address linked to the user
    await Address.create({ address, userId: user.id });

    res.status(201).send('User and address registered successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

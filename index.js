import express from 'express';
import cors from 'cors';

import todos from './controllers/todos.js';
import user from './controllers/user.js';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running...')
});

app.get('/todos', todos);
app.get('/user/:id', user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
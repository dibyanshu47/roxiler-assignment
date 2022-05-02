import axios from 'axios';

const user = async (req, res) => {
    const id = req.params.id;
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const todos = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data.filter(item => item.userId == id);
        const result = { ...data, todos };
        res.status(200).json(result);
    } catch (error) {
        res.status(error.response.status).send(error.message);
    }
};

export default user;
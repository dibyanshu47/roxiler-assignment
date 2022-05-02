import axios from 'axios';

const todos = async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        data.map(item => {
            delete item.userId;
            return item;
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(error.response.status).send(error.message);
    }
};

export default todos;
const app = require('./app');
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('running on port 4000'));

//This will be the actual API file
const express = require('express');

//Now set up the API
const api = express();
api.listen(3000, () => {
	console.log('API up and running!')
});

//Now let's set up the routes
api.get('/', (req, res) => {
	console.log(req);
	res.send('Hello, world!');
});
// function axios
const axios = require("axios");

exports.Post = async (token, endpoint, body) => {
	var config = {
		method: "post",
		url: endpoint,
		body: body,
		headers: {
			"x-auth-token": token,
		},
	};
	axios(config)
		.then(async (res) => {
			//handle response
			//check status code
		})
		.catch(async (error) => {
			//handle error
			console.log(error);
		});
};

exports.Get = async (token, endpoint, body) => {
	var config = {
		method: "get",
		url: endpoint,
		headers: {
			"x-auth-token": token,
		},
		body: body,
	};
	axios(config)
		.then(async (res) => {
			//handle response
			//check status code
		})
		.catch(async (error) => {
			//handle error
			console.log(error);
		});
};

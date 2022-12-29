// information about cookies and requests
const { Endpoints } = require("./Endpoints");
const { Get, Post } = require("./http");

//get token
var getToken = async () => {
	//get token from cookie
};

var Login = async (phonenumber) => {
	return await sendPost(Endpoints.Login, {
		phonenumber: phonenumber,
	})
		.then((res) => {
			//handle res
			// res.data.ok
			// res.data.msg
		})
		.catch((err) => {
			//handle err
		});
};

/////////////////////////////////////////////
var sendPost = async (endpoint, body) => {
	return await Post(getToken(), endpoint, body).then((res) => res);
};

var sendGet = async (endpoint, body) => {
	return await Get(getToken(), endpoint, body).then((res) => res);
};
"use strict";

const Data = require("../models/Schemas");

//LIVROS
exports.get = (req, res, next) => {
	Data.Books.find({}).then(function (books) {
		res.status(200).send(books);
	});
};

exports.put = (req, res, next) => {
	const name = req.body.name;

	Data.Books.findOne({ name: name }).then(function (client) {
		if (client != null) {
			Data.Books.findByIdAndDelete(client._id).then(() => {
				Data.Books(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			Data.Books(req.body).save();
			res.status(201).send(req.body);
		}
	});
};


exports.getById = (req, res, next) => {
	const _id = req.params._id;

	Data.Books.findOne({ _id: _id }).then(function (book) {
		if (book) {
			res.status(200).send(book);
		} else {
			res.status(404).send();
		}
	});
};

exports.deleteBook = (req, res, next) => {
	const _id = req.params._id;
	Data.Books.findOneAndDelete({ _id: _id }).then(function (book) {
		if (book) {
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	});
};

//USERS
exports.getUser = (req, res, next) => {
	Data.Users.find({}).then(function (client) {
		res.status(200).send(client);
	});
};

exports.getUserByEmail = (req, res, next) => {
	const email = req.params.email;

	Data.Users.findOne({ email: email }).then(function (client) {
		if (client != null) {
			res.status(200).send(client);
		}
	});
};

exports.putUser = (req, res, next) => {
	const email = req.body.email;

	Data.Users.findOne({ email: email }).then(function (client) {
		if (client != null) {
			Data.Users.findByIdAndDelete(client._id).then(() => {
				Data.Users(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			Data.Users(req.body).save();
			res.status(201).send(req.body);
		}
	});
};

exports.deleteUser = (req, res, next) => {
	const email = req.params.email;
	Data.Users.findOneAndDelete({ email: email }).then(function (client) {
		if (client) {
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	});
};
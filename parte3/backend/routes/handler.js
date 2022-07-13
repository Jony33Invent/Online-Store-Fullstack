"use strict";

const Data = require("../models/Schemas");

//LIVROS
exports.get = (req, res, next) => {
	Data.Books.find({}).then(function (books) {
		res.status(200).send(books);
	});
};

exports.put = (req, res, next) => {
	const id = req.params.id;

	Data.Books.findOne({ id: id }).then(function (product) {
		if (product != null) {
			Data.findByIdAndDelete(product._id).then(() => {
				Data.Books(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			Data.Books(req.body).save();
			res.status(201).send(req.body);
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
			console.log("1")
			Data.Users.findByIdAndDelete(client._id).then(() => {
				Data.Users(req.body).save();
				res.status(201).send(req.body);
			});
		} else {
			console.log("2")
			Data.Users(req.body).save();
			res.status(201).send(req.body);
		}
	});
};

/*
router.post('/addBook', async (req, res) => {
    const userTweet = req.body.bookInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'eaglefang'}).exec();

    const newBook = new Schemas.Books({
        book: userBook,
        user: userId._id
    });

    try {
        await newBook.save( (err, newBookResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/books');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/books');
        res.end();
    }
});
*/
/*

// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser

router.get('/addUser', async (req, res) => {
    const user = {username: 'eaglefang', fullname: 'Sensei Johnny'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    adress: {type:String, required:true},
    admin: {type:Number, required:true}
});

const bookSchema = new Schema({
    name: {type:String, required:true},
    author: {type:String, required:true},
    img: {type:String, required:true},
    price: {type:Number, required:true},
    quantity: {type:Number, required:true},
    genre: {type:String, required:true},
    descriptionTitle: {type:String, required:false},
    descriptionText: {type:String, required:true}
});

const Users = mongoose.model('users', userSchema, 'users');
const Books = mongoose.model('books', bookSchema, 'books');
const mySchemas = {'Users':Users, 'Books':Books};

module.exports = mySchemas;

/*
{
    "name": "teste",
    "author": "autor",
    "img": "url",
    "price": 10.50,
    "quantity": 1,
    "genre": "fiction",
    "descriptionTitle": "dritle",
    "descriptionText": "dtext"
}

{
    "name": "Admin",
    "email": "admin@email.com",
    "password": "123",
    "adress": "Cidade X, Bairro Y, Rua X, Número 1",
    "admin": 1
}
*/
const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Devandev:A8NmtwDYAf0d8PYm@cluster0.bmwjt.mongodb.net/Article?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true});
        
    } catch(err) {
        console.log("hello hi");
        console.log(err);
        process.exit();
    }
}


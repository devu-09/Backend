const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Devandev:q8X76zZR8yBb7P72@cluster0.bmwjt.mongodb.net/Article?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true});
        
    } catch(err) {
        console.log("hello hi");
        console.log(err);
        process.exit();
    }
}


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Acamica:querty1234@cluster0.lv0fg.mongodb.net/acamica-jere ',
    {useNewUrlParser: true, useUnifiedTopology: true
});
// ORM
//  generamo la colexxion
const Cat = mongoose.model('Cat', { name: String ,  type : String});
const kitty = new Cat({ name: 'lñkfhasdñlhfñkjsadh' , type :  "admin" });

kitty.save().then(() => {
    console.log('meow')
}).catch(e => console.log(e));


Cat.find({ name: 'Zildjian' }).then(function (resultado) {
    console.log(resultado);
});




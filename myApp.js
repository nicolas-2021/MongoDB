require('dotenv').config();
var mongoose = require('mongoose');

let Person;


const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name : {type : String, requiered : true},
  age : Number,
  favoriteFoods : [String]
});

Person = mongoose.model('Person',personSchema);

const createAndSavePerson = (done) => {
  var Roberto = new Person ({
   name :'Roberto', age : 38, favoriteFoods :['Hamburguesas', 'Fideos'] 
  });

Roberto.save((err,data) => {
   if (err) return console.error(err);
   done(null, data)
});
};

const arrayOfPeople = [{name :'Alejo', age : 33, favoriteFoods :['Tallarines', 'Tomate']},{name : 'Bertrelo', age : 04, favoriteFoods : ['Asado', 'sorrentinos']}];

const createManyPeople = (arrayOfPeople,done) => {
Person.create(arrayOfPeople,(err,data) => {
  if (err) return console.log(err);
  done(null, data);
});
};

const personName = 'Alejo';
const findPeopleByName = (personName, done) => {
  Person.find({name : personName}, (err,data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//==>Este ultima linea de código es para conectar con el cluster de BDmongo importante es cambiar <password> y <myFirstDataBase> en el .env por sus valores que di al crearlas.
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

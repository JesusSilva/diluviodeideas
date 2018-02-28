const mongoose = require('mongoose');
const {dbURL} = require('../config');
const Idea = require('../models/Idea');

mongoose.connect(dbURL).then(() => console.log("Creando seed!"));

const ideas = [
    {
        title: 'Lorem Ipsum 1',
        mensaje: 'Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo... Jarl!!',
        imagen: 'https://image.prntscr.com/image/DRPtCSUTTD_q5M85F27xGw.png',
        privacy: true,
        user_id: '5a957a344c6e5d407ffce160',
    },
    {
        title: 'Lorem Ipsum 2',
        mensaje: 'Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo... Jarl!!',
        imagen: 'https://image.prntscr.com/image/DRPtCSUTTD_q5M85F27xGw.png',
        privacy: true,
        user_id: '5a957a344c6e5d407ffce160',
    },
    {
        title: 'Lorem Ipsum 3',
        mensaje: 'Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo... Jarl!!',
        imagen: 'https://image.prntscr.com/image/DRPtCSUTTD_q5M85F27xGw.png',
        privacy: false,
        user_id: '5a957a344c6e5d407ffce160',
    }
];

Idea.collection.drop();

const promiseArray = ideas.map(idea => {
    let newIdea = new Idea(idea);
    return newIdea.save();
  });
  //mongoose.disconnect();
  Promise.all(promiseArray)
    .then(ideaArray=> {
      console.log(ideaArray.length)
      mongoose.disconnect()
  });
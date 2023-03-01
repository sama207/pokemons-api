const express = require('express');
const app = express();
const path = require('path');
//const path = require('path');

const axios = require("axios");
async function makeRequest() {
  app.get('/', (req, res) => {
    res.send("<h1>write the pokemon name to show its information</h1>")
  });
  const Pikachu_config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  };
  let Pikachu_res = await axios(Pikachu_config);

  app.get('/pikachu', (req, res) => {
    res.send(`<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDHkFDIY0--JHxrL6-o_dFaByfr-USAtk0Q&usqp=CAU" class="img-fluid rounded-start" alt="pikachu">
      </div>
      <div class="col-md-8">
        <div class="card-body">
  <h3 class="card-title">pikachu</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"> Name: ${Pikachu_res.data.name}</li>
  <li class="list-group-item"> Order: ${Pikachu_res.data.order}</li>
  <li class="list-group-item">Ability Name: ${Pikachu_res.data.abilities[0].ability.name}</li>
  <li class="list-group-item">Ability URL: ${Pikachu_res.data.abilities[0].ability.url}</li>
</ul>
</div>
</div>`
    )

  })
  const ditto_config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/ditto",
  };
  let ditto_res = await axios(ditto_config);

  app.get('/ditto', (req, res) => {
    res.send(`<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://pbs.twimg.com/profile_images/1350449030/Ditto_reasonably_small.gif" class="img-fluid rounded-start" alt="ditto">
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <h3 class="card-title">ditto</h3>
      <ul class="list-group list-group-flush">
      <li class="list-group-item"> Name: ${ditto_res.data.name}</li>
      <li class="list-group-item"> Order: ${ditto_res.data.order}</li>
      <li class="list-group-item">Ability Name: ${ditto_res.data.abilities[0].ability.name}</li>
      <li class="list-group-item">Ability URL: ${ditto_res.data.abilities[0].ability.url}</li>
    </ul>
      </div>
    </div>`
    )
  });
  const bulbasaur_config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  };
  let bulbasaur_res = await axios(bulbasaur_config);

  app.get('/bulbasaur', (req, res) => {
    res.send(`<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://pokestop.io/img/pokemon/bulbasaur-256x256.png" class="img-fluid rounded-start" alt="bulbasaur">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">bulbasaur</h3>
          <ul class="list-group list-group-flush">
    <li class="list-group-item"> Name: ${bulbasaur_res.data.name}</li>
    <li class="list-group-item"> Order: ${bulbasaur_res.data.order}</li>
    <li class="list-group-item">Ability Name: ${bulbasaur_res.data.abilities[0].ability.name}</li>
    <li class="list-group-item">Ability URL: ${bulbasaur_res.data.abilities[0].ability.url}</li>
  </ul>
  </div>
        </div>`
    )
  });
  app.get('/*', (req, res) => {
    res.send("<h1>Page not found</h1>")
  });
}

makeRequest();


app.listen(3207, () => {
  console.log('server started on port 3207')
  console.log('http://localhost:3207')

})
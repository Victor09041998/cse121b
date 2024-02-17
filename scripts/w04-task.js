/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Godspower Uduma",
  photo: "images/profile.png",
  favoriteFoods: [
    'Rice',
    'Pasta',
    'Beans',
    'Chicken',
    'Banana Cream Pie'
  ],
  hobbies: ['Reading', 'Playing soccer', 'Playing videogames', 'Music', 'Watching movies'],
  placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Lagos, Nigeria',
    length: '2 year'
  },
  {
    place: 'Aba, Nigeria',
    length: '24 years'
  }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  
  let dl = document.querySelector('#places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});


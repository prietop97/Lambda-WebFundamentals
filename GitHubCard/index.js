/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
let CreateACard = (obj)=> {
  /// CREATING ELEMENTS
  let cardWith = document.createElement("div");
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let username = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let profileLink = document.createElement('a');
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");
  let pullcontainer = document.createElement("div");
  let btn = document.createElement("button");
  let btnClose = document.createElement("button")

  //// ADDING CLASSES
  card.classList.add("newContainer");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");
  cardWith.classList.add("card");
  pullcontainer.style.width ="95%";
  pullcontainer.classList.add("toggleOff");
  btn.classList.add("btn");
  btnClose.classList.add("btn");
  btnClose.classList.add("toggleOff");


  //// GIVING CONTEXT
  img.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = "Profile: ";
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;
  btn.textContent = "CHECK GITHUB COMMITS";
  btnClose.textContent = "HIDE GITHUB COMMITS";
  GitHubCalendar(pullcontainer, username.textContent, {
    responsive: true,
  })


  /// APPENDING CHILDS
  card.appendChild(cardWith);
  card.appendChild(btn);
  card.appendChild(pullcontainer);

  cardWith.appendChild(img);
  cardWith.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileLink);



  //// EVENTS
  btn.addEventListener("click",(e)=>{
    pullcontainer.classList.toggle("toggleOff");
    btn.classList.toggle("toggleOff");
    btnClose.classList.toggle("toggleOff");
  })

  btnClose.addEventListener("click",(e)=>{
    pullcontainer.classList.toggle("toggleOff");
    btn.classList.toggle("toggleOff");
    btnClose.classList.toggle("toggleOff");
  })
  card.appendChild(btnClose);



  return card;
};
let cardContainer = document.querySelector(".cards")
axios.get('https://api.github.com/users/prietop97')
  .then(response => {
    console.log(response.data)
    cardContainer.appendChild(CreateACard(response.data))
  })
  .catch(err => {
    console.log(err)
  })



  //folloowers dynamic
  axios.get("https://api.github.com/users/prietop97/followers")
  .then(response=>{
    response.data.forEach(user=>{
    axios.get(`https://api.github.com/users/${user.login}`)
    .then(response => {
      console.log(response.data)
      cardContainer.appendChild(CreateACard(response.data))
      })
    })
  })


  //array
  const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
  followersArray.forEach(value=>{
    axios.get(`https://api.github.com/users/${value}`)
  .then(response => {
    console.log(response)
    cardContainer.appendChild(CreateACard(response.data))
  })
  .catch(err => {
    console.log(err)
  })
  })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

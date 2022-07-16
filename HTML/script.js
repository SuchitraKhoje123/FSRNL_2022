const allUsers=document.getElementsByClassName('users')[0];


for (var i=56597888; i<=56597890; i++)
{
   
    

   fetch (`https://hapi-books.p.rapidapi.com/book/${i}`,{
    "method":"GET",
    headers:
    {'X-RapidAPI-Key': 'e14d56b923msh643172f45679370p176b0ajsn1d9c102b18f1',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    
     }})
.then(response=>response.json())
.then(data=>{
    loadusers(data)})


}
    function loadusers(users)
    {

     // users.forEach(user => {
        const userCard=createUserCard(users);
        allUsers.appendChild(userCard);
      //        }
    // );
    }


    
function createUserCard(user)
{
    const userDiv=document.createElement('div');
    userDiv.className="user";
    const userImageDiv=document.createElement('div');
    userImageDiv.className="user-image";
    //userImageDiv.id=user.id;

    const imageElement=document.createElement('img');
    imageElement.setAttribute("src",user.cover);
    userImageDiv.appendChild(imageElement);

    const userDetailsDiv=document.createElement('div');
    userDetailsDiv.className="user-detils";
    const heading1=document.createElement('h4');
    heading1.textContent=user.url;

    heading1.textContent=` ${user.book_id} ${user.name} ${user.authors}`;
    const heading=document.createElement('h4');
    
    heading.textContent=` ${user.aqi} ${user.pm10} ${user.co} `;
    userDetailsDiv.appendChild(heading1);
    userDetailsDiv.appendChild(heading);

    const button=document.createElement('button');
    button.textContent="See Completet Details";

    userDiv.appendChild(userImageDiv);
    userDiv.appendChild(userDetailsDiv);
    userDiv.appendChild(button);

    return userDiv;



}
const allUsers=document.getElementsByClassName('users')[0];



fetch ("https://dummyapi.io/data/v1/user?app",{
    headers:
    {"app-id":"62cfbb76662c4237bb3a328c"
     }})
.then(response=>response.json())
.then(data=>{
    loadusers(data.data)})
    function loadusers(users)
    {

       users.forEach(user => {
        const userCard=createUserCard(user);
        allUsers.appendChild(userCard);
        
       });
    }

function createUserCard(user)
{
    const userDiv=document.createElement('div');
    userDiv.className="user";
    const userImageDiv=document.createElement('div');
    userImageDiv.className="user-image";
    userImageDiv.id=user.id;

    const imageElement=document.createElement('img');
    imageElement.setAttribute("src",user.picture);
    userImageDiv.appendChild(imageElement);

    const userDetailsDiv=document.createElement('div');
    userDetailsDiv.className="user-detils";
    const heading=document.createElement('h4');
    //heading.textContent=user.firstName;
    heading.textContent=` ${user.title} ${user.firstName} ${user.lastName} `;
    
    userDetailsDiv.appendChild(heading);

    const button=document.createElement('button');
    button.textContent="See Completet Details";

    userDiv.appendChild(userImageDiv);
    userDiv.appendChild(userDetailsDiv);
    userDiv.appendChild(button);

    return userDiv;



}
import User from './user';
const users=[{name:"Dhanu",age:16},{name:"Sara",age:10}];
function Users(){



    return(
        <div>
          <h3>Hey!!This is users card</h3>
          
          {
          users.map((user)=>{ 
            return <User name={user.name} age={user.age}/>
          })

          }
          
          
        </div>
        
    )
}
export default Users;
function User(props){

  console.log(props);

    return(


        <h4>I am {props.name} and I am {props.age} years old</h4>
    )
}

export default User;
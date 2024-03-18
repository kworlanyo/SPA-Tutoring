import { useParams } from "react-router-dom";

function User({ loggedInUser, usersLength, onClick }) {
  const { id } = useParams();
  
  return (
    <>
    { loggedInUser 
        ? <>
          <p>Welcome {loggedInUser.name}</p>
          <p> You are user {id} of {usersLength}</p>
          <button onClick={onClick}>Logout</button>
        </>
        : <p>Unauthorized</p> }
    </>
  );
}

export default User;
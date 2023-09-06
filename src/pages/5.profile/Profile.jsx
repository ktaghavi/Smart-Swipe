
const Profile = ({currentUser}) => {
    console.log(currentUser);
  return (
    <div>{currentUser.username}</div>
  )
}

export default Profile
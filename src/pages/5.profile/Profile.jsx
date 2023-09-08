import SmartCards from "../../components/SmartCards/SmartCards";
import CardFooter from "../../components/SmartCards/CardFooter";

const Profile = ({currentUser}) => {
    console.log(currentUser);
  return (
    <div>
      <SmartCards />
      {/* <CardFooter /> */}
    </div>
  )
}

export default Profile
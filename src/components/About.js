import UserContext from '../utils/UserContext';
import User from './User';
import UserContext from '../utils/UserContext';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>Created by : Prince Chaudhary</h2>
      <User />
    </div>
  );
};

export default About;

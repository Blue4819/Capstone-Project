import Navbar from './Navbar';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Signup = () => {
    return (
        <div className="App">
          <Navbar />
          <div className="container">
            <LeftSection />
            <RightSection />
          </div>
        </div>
  
    );
  }
  
  export default Signup;
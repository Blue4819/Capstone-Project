import Form from "./form";
import logoImage from "../photos/Group 14.png";
import RightImage from "../photos/imageligin.jpg";
import RightImage2 from "../photos/light.png";
import RightImage3 from "../photos/Rectangle 35.jpg";
import RightImage4 from "../photos/img2.png";
const LoginPage = () => {
  return (
    <div>
      {/* Header */}
      <div>
      <header className="bg-[#EBDFCE] py-4 px-9 flex items-center justify-between rounded-full">
        {/* Logo */}
        <a href="/" className="flex items-center">
        <img src={logoImage} alt="Holidate" className="h-20 w-50 rounded-l" />
        </a>
        {/* Navigation */}
        <nav className="flex items-center text-semi-bold text-lg">
          <a href="/signup" className="hover:underline">Sign Up!</a>
        </nav>
      </header>
      </div>
      {/* Main Content */}
      <div className="flex w-full h-screen">
        <div className="w-1/2 bg-[#FFF6ED] rounded-lg p-4 mt-8">
          {/* Text Content */}
          <h1 className="text-4xl text-gray-800 mb-4">Connect to new people and places!</h1>
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Row */}
            <div className="flex justify-center items-center flex-col">
              <p className="text-lg text-gray-600 mb-2"></p>
              <img src={RightImage} alt="Additional Image" className="w-60 h-50 rounded-xl mb-3" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={RightImage2} alt="Additional Image" className="w-60 h-50 rounded-xl mb-3" />
            </div>
            {/* Second Row */}
            <div className="flex justify-center items-center flex-col">
              <img src={RightImage3} alt="Additional Image" className="w-60 h-50 rounded-xl mb-3" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={RightImage4} alt="Additional Image" className="w-60 h-50 rounded-xl mb-3" />
            </div>
          </div>
          {/* More Text */}
          <h1 className="text-3xl text-gray-600 mt-4"><bold>See and share what you're up to!</bold></h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Form className="mt-16 mb-8" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
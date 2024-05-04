import logoImage from "../photos/Group 14.png"; 

const Dashboard = () => {
    return (
      <div>
        {/* Header */}
        <header className="bg-[#EBDFCE] py-4 px-9 flex items-center justify-between rounded-full">
          {/* Logo */}
          <img src={logoImage} alt="Holidate" className="h-20 rounded-xl" />
          {/* Navigation */}
          <nav className="flex items-center text-semi-bold text-lg">
            <a href="#" className="hover:underline">Dashboard</a>
          </nav>
        </header>
        {/* Main Content */}
        <div className="flex w-full h-screen">
          <div></div>
          <div className="w-full flex items-center justify-center lg:w-1/2">
          </div>
          <div className="hidden relative lg:flex flex-col justify-center items-center w-1/2 bg-[#FFF6ED] rounded-lg p-4">
            {/* Text Content */}
            <h1 className="text-4xl text-gray-800 mb-4">Connect to new people and places!</h1>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Row */}
              <div className="flex justify-center items-center flex-col">
                <p className="text-lg text-gray-600 mb-2"></p>
              </div>
              <div className="flex justify-center items-center flex-col">
              </div>
              {/* Second Row */}
              <div className="flex justify-center items-center flex-col">
              </div>
              <div className="flex justify-center items-center flex-col">
              </div>
            </div>
            {/* More Text */}
            <h1 className="text-3xl text-gray-600 mt-4"><bold>See and share what you're up to!</bold></h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
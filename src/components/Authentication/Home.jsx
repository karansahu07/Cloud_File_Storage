// import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Box } from '@mui/material';
import ContentArea from './Content';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("User logged out");
//     navigate("/login"); // Navigate to login page
//   };

//   return (
//     <div className="w-full grid grid-cols-1 lg:grid-cols-2">
//       {/* Message Section */}
//       <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6 p-6 sm:p-10 justify-center">
//         <div className="flex flex-col gap-2 font-medium text-black">
//           <h1 className="text-2xl sm:text-3xl">Welcome!</h1>
//           <h2 className="text-base">Login successfully</h2>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="p-3 font-bold text-white bg-green-700 border border-green-700 text-sm rounded-lg"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className="hidden lg:block w-full h-[50vh] lg:h-auto">
//         <img
//           src="/images/authImg.jpeg"
//           className="w-full h-full object-cover rounded-lg"
//           alt="authimg"
//         />
//       </div>
//     </div>
//   );
// };

const Home=()=>{
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} />
      <Box sx={{ flex: 1 }}>
        <Header sidebarOpen={sidebarOpen} />
        <ContentArea sidebarOpen={sidebarOpen}/>
      </Box>
    </Box>
  );
}

export default Home;

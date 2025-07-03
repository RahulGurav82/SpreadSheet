// import React from 'react'
import "remixicon/fonts/remixicon.css";
const Header = () => {
  return (
    <div className="header flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-white">
      {/* leftside */}
      <div className="flex gap-2 items-center text-sm text-gray-600 space-x-1">
        <i className="ri-file-list-line text-xl text-green-700 font-semibold"></i>
        <span className="font-normal text-gray-500">Workspace</span>
        <i className="ri-arrow-right-s-line"></i>
        <span>Folder 2</span>
        <i className="ri-arrow-right-s-line"></i>
        <span className="font-semibold text-gray-900">Spreadsheet 3 ...</span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-3 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="ri-search-line absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
        <div className="relative">
          <i className="ri-notification-2-line text-2xl"></i>
          <sup className="absolute -top-2 -right-2 h-5 w-5 bg-green-700 text-white text-xs rounded-full flex items-center justify-center">
            2
          </sup>
        </div>{" "}
        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://cdn.dribbble.com/userupload/27341424/file/original-7526e60193cff69cba7dc1cf48a696d6.png?resize=400x300"
            alt="User"
            className="w-10 h-8 rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <p className="text-sm text-gray-500">jon doe...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

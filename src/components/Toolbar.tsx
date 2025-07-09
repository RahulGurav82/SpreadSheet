export default function Toolbar() {
  return (
    <div className="flex items-center justify-between w-full p-2 px-4 border-b border-gray-300 bg-white">
   
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700">Tool bar</span>
        <i className="ri-arrow-right-double-line"></i>

        <button className="flex items-center text-sm text-gray-600 hover:text-black">
          <i className="ri-eye-off-line text-lg mr-1"></i>
          Hide fields
        </button>

        <button className="flex items-center text-sm  text-gray-600 hover:text-black">
          <i className="ri-sort-desc text-lg mr-1"></i>
          Sort
        </button>

        <button className="flex items-center text-sm text-gray-600 hover:text-black">
          <i className="ri-filter-3-line text-lg mr-1"></i>
          Filter
        </button>

        <button className="flex items-center text-sm text-gray-600 hover:text-black">
          <i className="ri-layout-grid-line text-lg mr-1"></i>
          Cell view
        </button>
      </div>

      
      <div className="flex items-center space-x-2">
        <button className="flex items-center border px-2 py-1 rounded text-sm text-gray-600 hover:text-black">
          <i className="ri-download-line text-lg mr-1"></i>
          Import
        </button>

        <button className="flex items-center border px-2 py-1 rounded text-sm text-gray-600 hover:text-black">
          <i className="ri-upload-line text-lg mr-1"></i>
          Export
        </button>

        <button className="flex items-center border px-2 py-1 rounded text-sm text-gray-600 hover:text-black">
          <i className="ri-share-line text-lg mr-1"></i>
          Share
        </button>

        <button className="flex items-center bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-green-800">
          <i className="ri-add-line text-lg mr-1"></i>
          New Action
        </button>
      </div>
    </div>
  );
}

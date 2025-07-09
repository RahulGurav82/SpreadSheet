export default function Footer() {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

  return (
    <div className="flex items-center space-x-4 pb-4 mt-4 px-2 w-full sticky bottom-0  z-10">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`text-sm px-3 py-1 rounded ${idx === 0 ? "bg-green-100 text-green-800 font-medium" : "text-gray-600 hover:text-black"}`}
        >
          {tab}
        </button>
      ))}
      <button className="text-xl text-gray-500 hover:text-black">+</button>
    </div>
  );
}

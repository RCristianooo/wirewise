import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({ isOpen, toggleSidebar} ) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 p-4 transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button className="md:hidden p2 mb-4 bg-gray-700 rounded text-2xl" onClick={toggleSidebar}>
            <IoIosCloseCircle/>
        </button>

        <div className="text-2xl font-semibold mb-6">Wirewise</div>
        <div className="mb-4">
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded">New Chat +</button>
        </div>
        <div>
            <p className="text-sm text-gray-400 mb-2">Recent</p>

            <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
                <button className="w-full text-left py-2 px-2 bg-gray-700 hover:bg-gray-600 rounded mt-2 flex justify-center items-center">Hello, how are you?</button>
            </div>
        </div>

        <div className="absolute bottom-0 mb-6 w-full ">
            <button className="bg-red-600 text-white text-xl px-3 py-2 rounded-md hover:bg-red-700">Logout</button>
        </div>
    </div>
  )
}

export default Sidebar
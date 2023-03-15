import { IoReorderThreeOutline } from "react-icons/io5"
import { BsBell } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"

const Header = () => {
  return (
    <div className="h-16 border-b border-gray-200">
      <header className="mx-auto flex h-full w-full max-w-7xl flex-row items-center items-center justify-between bg-white px-4 sm:px-6 lg:px-8">
        <div>
          <IoReorderThreeOutline className="h-7 w-7" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog App</div>
        <div className="flex items-center gap-x-2">
          <div>
            <BsBell className="h-5 w-5" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center gap-x-2 rounded-md border border-gray-200 px-4 py-1.5 text-gray-600 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FaEdit className="h-5 w-5" />
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
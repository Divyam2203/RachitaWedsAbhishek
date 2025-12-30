import ScrollIntoView from "react-scroll-into-view";
import logo from "../assets/ganesha.png";

const Navbar = ({ onDarkMode }: any) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full border-b dark:border-slate-700 bg-white dark:bg-slate-600 bg-opacity-80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <ScrollIntoView selector="#header">
              <div className="flex flex-1 items-stretch justify-start p-2">
                <button className="flex shrink-0 items-center">
                  <img className="block h-12 w-auto" src={logo} />
                </button>
              </div>
            </ScrollIntoView>
            <div className="flex shrink-0 items-center space-x-8 px-2 py-3">
              <button
                onClick={() => onDarkMode()}
                className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="block fill-violet-700 dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

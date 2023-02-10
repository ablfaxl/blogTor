import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="relative p-4 py-6 text-white bg-blue-400 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <img
            className="absolute h-full object-cover"
            src="https://images.unsplash.com/photo-1555517743-e79e2b19004a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />
          <div className="bg-slate-300 z-20 p-10 opacity-80">
            <div className="my-3 text-4xl font-bold tracking-wider text-center z-10">
              <p className="text-[#fff]  border-black">BLOG-TOR</p>
            </div>
            <p className="mt-6 font-normal text-center md:mt-0 text-[#b3b3b3] z-10">
              blogTor is a media for professionals and writers to have a more
              effective presence in the virtual space of the Internet by
              creating a professional blog.
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center z-10">
              <span>Don't have an account?</span>
              <Link href="sing-up" className="underline">
                Get Started!
              </Link>
            </p>
            <p className="mt-6 text-sm text-center text-black-500 z-10">
              Read our{' '}
              <a href="#" className="underline">
                terms
              </a>{' '}
              and{' '}
              <a href="#" className="underline">
                conditions
              </a>
            </p>
          </div>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-500">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label className="text-sm font-semibold text-gray-500">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                    <BsTwitter color="#0044ff" size={25} />
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                    Twitter
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <FcGoogle size={25} />
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Google
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

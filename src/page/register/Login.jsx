import { Link } from "react-router-dom";
import Input from "../../Components/common/Input";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const forms = useRef();
  const [heightForms, setHeightForms] = useState(255);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setHeightForms(forms.current.clientHeight);
    document.addEventListener("resize", () => {
      setHeightForms(forms.current.clientHeight);
    });
  }, []);

  return (
    <section className="p-4">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px]">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          ref={forms}
          className="col-span-1 flex flex-col items-start"
        >
          <div className="w-full max-w-[512px] mx-auto">
            <div>
              <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl">
                Login
              </h2>
              <p className="text-sm md:text-base mt-2 text-gray-400">
                Login to access your Golobe account
              </p>
            </div>
            <form className="w-full mt-8">
              <Input
                className="w-full mt-4"
                placeholder="john.doe@gmail.com"
                label="Email"
              />
              <Input
                className="w-full mt-4"
                placeholder="**********"
                label="Password"
                type="password"
              />
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input className="block" type="checkbox" id="Remember" />
                  <label htmlFor="Remember">Remember me</label>
                </div>
                <Link to="/" className="text-sm md:text-base text-secend">
                  Forgot Password !
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-sm md:text-base py-3 rounded mt-8"
              >
                Login
              </button>
            </form>
            <div className="w-full flex justify-center text-sm md:text-base mt-3">
              <p>Don’t have an account?</p>
              <Link to="/" className="text-secend ml-2">
                Sign up
              </Link>
            </div>
            <div className="flex gap-4 items-center my-8">
              <span className="h-[1px] flex-1 bg-gray-300"></span>
              <p className="text-gray-400">Or login with</p>
              <span className="h-[1px] flex-1 bg-gray-300"></span>
            </div>
            <div className="flex gap-4">
              <Link
                to="/"
                className="p-4 flex-1 flex justify-center rounded border-2 border-primary"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
                    fill="#1877F2"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                className="p-4 flex-1 flex justify-center rounded border-2 border-primary"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#1976D2"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                className="p-4 flex-1 flex justify-center rounded border-2 border-primary"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5172 12.5555C17.5078 10.957 18.232 9.75234 19.6945 8.86406C18.8766 7.69219 17.6391 7.04766 16.0078 6.92344C14.4633 6.80156 12.7734 7.82344 12.1547 7.82344C11.5008 7.82344 10.0055 6.96563 8.82891 6.96563C6.40078 7.00313 3.82031 8.90156 3.82031 12.7641C3.82031 13.9055 4.02891 15.0844 4.44609 16.2984C5.00391 17.8969 7.01484 21.8133 9.1125 21.75C10.2094 21.7242 10.9852 20.9719 12.4125 20.9719C13.7977 20.9719 14.5148 21.75 15.7383 21.75C17.8547 21.7195 19.6734 18.1594 20.2031 16.5563C17.3648 15.218 17.5172 12.6375 17.5172 12.5555ZM15.0539 5.40703C16.2422 3.99609 16.1344 2.71172 16.0992 2.25C15.0492 2.31094 13.8352 2.96484 13.1437 3.76875C12.382 4.63125 11.9344 5.69766 12.0305 6.9C13.1648 6.98672 14.2008 6.40313 15.0539 5.40703Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ height: heightForms }}
          className="col-span-1 hidden md:block rounded-2xl overflow-hidden"
        >
          <img
            className="mx-auto h-full object-cover"
            src="/image/register.svg"
            loading="lazy"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Login;

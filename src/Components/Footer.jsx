import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [socialMediaData, setSocialMediaData] = useState([
    {
      id: 1,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 9.05025C0 13.5248 3.24975 17.2455 7.5 18V11.4998H5.25V9H7.5V6.99975C7.5 4.74975 8.94975 3.50025 11.0002 3.50025C11.6497 3.50025 12.3503 3.6 12.9998 3.69975V6H11.85C10.7498 6 10.5 6.54975 10.5 7.25025V9H12.9L12.5002 11.4998H10.5V18C14.7502 17.2455 18 13.5255 18 9.05025C18 4.0725 13.95 0 9 0C4.05 0 0 4.0725 0 9.05025Z"
            fill="#112211"
          />
        </svg>
      ),
      url: "/",
    },
    {
      id: 2,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7029 4.26137C19.0071 4.5697 18.2596 4.77803 17.4737 4.8722C18.2846 4.38703 18.8912 3.62342 19.1804 2.72387C18.4186 3.17636 17.5849 3.49486 16.7154 3.66553C16.1307 3.04125 15.3563 2.62747 14.5124 2.48843C13.6684 2.34938 12.8022 2.49286 12.0481 2.89658C11.2941 3.30029 10.6944 3.94167 10.3422 4.72112C9.99003 5.50057 9.90503 6.37449 10.1004 7.2072C8.55682 7.1297 7.04677 6.72849 5.66827 6.02962C4.28977 5.33075 3.07362 4.34983 2.09875 3.15053C1.76542 3.72553 1.57375 4.3922 1.57375 5.1022C1.57338 5.74136 1.73078 6.37073 2.03198 6.93448C2.33319 7.49822 2.76888 7.9789 3.30042 8.33387C2.68398 8.31425 2.08114 8.14769 1.54208 7.84803V7.89803C1.54202 8.79448 1.85211 9.66335 2.41974 10.3572C2.98736 11.051 3.77756 11.5271 4.65625 11.7047C4.0844 11.8595 3.48486 11.8823 2.90292 11.7714C3.15083 12.5427 3.63375 13.2172 4.28406 13.7005C4.93437 14.1837 5.71951 14.4515 6.52958 14.4664C5.15444 15.5459 3.45616 16.1314 1.70792 16.1289C1.39823 16.129 1.08881 16.1109 0.78125 16.0747C2.55581 17.2157 4.62153 17.8212 6.73125 17.8189C13.8729 17.8189 17.7771 11.9039 17.7771 6.77387C17.7771 6.6072 17.7729 6.43887 17.7654 6.2722C18.5248 5.72301 19.1803 5.04295 19.7013 4.26387L19.7029 4.26137Z"
            fill="#112211"
          />
        </svg>
      ),
      url: "/",
    },
    {
      id: 3,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_321_3502)">
            <path
              d="M19.5829 5.56962C19.4696 5.16564 19.249 4.79991 18.9445 4.51128C18.6314 4.21379 18.2477 4.00098 17.8295 3.89295C16.2645 3.48045 9.99454 3.48045 9.99454 3.48045C7.38065 3.45071 4.7674 3.58151 2.16954 3.87212C1.75136 3.98813 1.36834 4.20569 1.05454 4.50545C0.746204 4.80212 0.522871 5.16795 0.406204 5.56878C0.125949 7.07857 -0.0102189 8.61157 -0.000462243 10.1471C-0.0104622 11.6813 0.125371 13.2138 0.406204 14.7255C0.520371 15.1246 0.742871 15.4888 1.05204 15.783C1.3612 16.0771 1.7462 16.2896 2.16954 16.4021C3.75537 16.8138 9.99454 16.8138 9.99454 16.8138C12.6118 16.8436 15.2283 16.7128 17.8295 16.4221C18.2477 16.3141 18.6314 16.1013 18.9445 15.8038C19.2489 15.5152 19.4693 15.1494 19.582 14.7455C19.8696 13.2362 20.0094 11.7026 19.9995 10.1663C20.0212 8.62345 19.8815 7.08259 19.5829 5.56878V5.56962ZM8.0012 13.0005V7.29462L13.2179 10.148L8.0012 13.0005Z"
              fill="#112211"
            />
          </g>
          <defs>
            <clipPath id="clip0_321_3502">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.147217)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      url: "/",
    },
    {
      id: 4,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.49787 7.66546C7.93707 7.66546 6.66333 8.9392 6.66333 10.5C6.66333 12.0608 7.93707 13.3345 9.49787 13.3345C11.0587 13.3345 12.3324 12.0608 12.3324 10.5C12.3324 8.9392 11.0587 7.66546 9.49787 7.66546ZM17.9994 10.5C17.9994 9.32621 18.01 8.16305 17.9441 6.99138C17.8782 5.63046 17.5677 4.42264 16.5725 3.42747C15.5752 2.43017 14.3695 2.12184 13.0086 2.05592C11.8348 1.99 10.6717 2.00063 9.5 2.00063C8.32621 2.00063 7.16305 1.99 5.99138 2.05592C4.63046 2.12184 3.42264 2.4323 2.42747 3.42747C1.43017 4.42477 1.12184 5.63046 1.05592 6.99138C0.99 8.16517 1.00063 9.32833 1.00063 10.5C1.00063 11.6717 0.99 12.837 1.05592 14.0086C1.12184 15.3695 1.4323 16.5774 2.42747 17.5725C3.42477 18.5698 4.63046 18.8782 5.99138 18.9441C7.16517 19.01 8.32833 18.9994 9.5 18.9994C10.6738 18.9994 11.837 19.01 13.0086 18.9441C14.3695 18.8782 15.5774 18.5677 16.5725 17.5725C17.5698 16.5752 17.8782 15.3695 17.9441 14.0086C18.0121 12.837 17.9994 11.6738 17.9994 10.5ZM9.49787 14.8613C7.08437 14.8613 5.13655 12.9135 5.13655 10.5C5.13655 8.08649 7.08437 6.13868 9.49787 6.13868C11.9114 6.13868 13.8592 8.08649 13.8592 10.5C13.8592 12.9135 11.9114 14.8613 9.49787 14.8613ZM14.0378 6.97862C13.4743 6.97862 13.0193 6.52356 13.0193 5.96006C13.0193 5.39655 13.4743 4.94149 14.0378 4.94149C14.6013 4.94149 15.0564 5.39655 15.0564 5.96006C15.0565 6.09386 15.0303 6.22639 14.9792 6.35004C14.9281 6.4737 14.853 6.58605 14.7584 6.68067C14.6638 6.77528 14.5515 6.8503 14.4278 6.90143C14.3041 6.95256 14.1716 6.97879 14.0378 6.97862Z"
            fill="#112211"
          />
        </svg>
      ),
      url: "/",
    },
  ]);
  const [footerData, setFooterData] = useState([
    {
      id: 1,
      title: "Our Destinations",
      children: [
        { id: 1, title: "Canada", url: "/" },
        { id: 2, title: "Alaksa", url: "/" },
        { id: 3, title: "France", url: "/" },
        { id: 4, title: "Iceland", url: "/" },
      ],
    },
    {
      id: 2,
      title: "Our Activities",
      children: [
        { id: 1, title: "Northern Lights", url: "/" },
        { id: 2, title: "Cruising & sailing", url: "/" },
        { id: 3, title: "Multi-activities", url: "/" },
        { id: 4, title: "Kayaing", url: "/" },
      ],
    },
    {
      id: 3,
      title: "Travel Blogs",
      children: [
        { id: 1, title: "Bali Travel Guide", url: "/" },
        { id: 2, title: "Sri Lanks Travel Guide", url: "/" },
        { id: 3, title: "Peru Travel Guide", url: "/" },
        { id: 4, title: "Bali Travel Guide", url: "/" },
      ],
    },
    {
      id: 4,
      title: "About Us",
      children: [
        { id: 1, title: "Our Story", url: "/" },
        { id: 2, title: "Work with us", url: "/" },
      ],
    },
    {
      id: 5,
      title: "Contact Us",
      children: [
        { id: 1, title: "Our Story", url: "/" },
        { id: 2, title: "Work with us", url: "/" },
      ],
    },
  ]);

  return (
    <footer className="px-4 bg-primary pb-16 lg:pb-20 mt-32 md:mt-40">
      <div className="container flex flex-wrap gap-4 pt-36 lg:pt-40 relative">
        <div className="absolute -top-28 md:-top-36 left-1/2 -translate-x-1/2 max-w-[1300px] rounded-xl bg-[#cdeae1] w-[90%] flex">
          <div className="flex-1 p-4">
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:mb-2">
              Subscribe <br />
              Newsletter
            </h3>
            <span className="text-sm md:text-lg">The Travel</span>
            <p className="text-xs md:text-sm text-gray-500">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <form className="flex items-stretch gap-2 text-sm md:text-white mt-4">
              <input
                className="p-4 md:w-full max-w-[350px] outline-none border-none bg-white rounded-md text-slate-800"
                type="text"
                placeholder="Your email address"
              />
              <button className="p-2 text-white bg-zinc-950 rounded-md duration-200 active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
          <svg
            className="w-[300px] lg:w-[350px] md:block hidden"
            viewBox="0 0 400 305"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_321_3471)">
              <path
                d="M157.25 376.763H239.462C240.137 376.763 240.706 374.956 240.706 372.856V121.256C240.706 119.144 240.137 117.35 239.462 117.35H157.25C156.875 117.35 156.6 117.756 156.394 118.4L156.381 118.531C156.381 118.531 156.356 118.544 156.344 118.663C156.094 119.508 155.982 120.388 156.012 121.269V372.869C156.012 374.956 156.569 376.763 157.25 376.763Z"
                fill="#DFAD92"
              />
              <path
                d="M194.438 376.763H239.994C240.381 376.763 240.688 374.956 240.688 372.856V121.256C240.688 119.144 240.375 117.35 239.994 117.35H194.444C194.238 117.35 194.081 117.756 193.981 118.4L193.969 118.531C193.969 118.531 193.956 118.544 193.944 118.663C193.803 119.524 193.742 120.396 193.763 121.269V372.869C193.763 374.956 194.063 376.763 194.438 376.763Z"
                fill="#A4806D"
              />
              <path
                d="M157.25 268.231H239.438C240.125 268.231 240.694 267.844 240.694 267.388V212.438C240.694 211.975 240.125 211.575 239.438 211.575H157.238C156.943 211.567 156.654 211.647 156.406 211.806L156.369 211.831L156.319 211.869C156.223 211.928 156.143 212.011 156.088 212.109C156.032 212.208 156.002 212.318 156 212.431V267.381C156 267.85 156.544 268.231 157.238 268.231"
                fill="#A4806D"
              />
              <path
                d="M133.688 47H63.0188C28.225 47 0 85.575 0 133.144V238.156H70.6688V133.144C70.6688 85.575 98.875 47 133.688 47Z"
                fill="#7C9C9F"
              />
              <path
                d="M298.269 47H133.687C98.875 47 70.6875 85.575 70.6875 133.144V238.156H361.294V133.144C361.294 85.575 333.081 47 298.294 47"
                fill="#112211"
              />
              <path
                d="M145.312 47H63.0312C28.2313 47 0.03125 85.575 0.03125 133.144V238.156H208.356V133.144C208.356 85.575 180.144 47 145.356 47"
                fill="#65B599"
              />
              <path
                d="M399.394 154.987C399.419 155.025 399.569 155.037 399.569 155.075V230.469C399.578 230.736 399.518 231.001 399.394 231.237C399.394 231.237 399.369 231.237 399.369 231.25H399.344C399.262 231.406 399.112 231.544 398.937 231.544H358.119C357.756 231.544 357.475 231.031 357.475 230.4V189.356H233.5C232.144 189.356 230.969 189.112 230.969 188.844V155.006C230.969 154.712 232.144 154.481 233.5 154.481H398.937C399.125 154.481 399.294 154.669 399.394 154.925"
                fill="#FF8682"
              />
              <path
                d="M140.426 59H66.5675C35.3409 59 10 95.1164 10 139.668V238H197V139.668C197 95.1164 171.683 59 140.426 59Z"
                fill="#546869"
              />
            </g>
            <defs>
              <clipPath id="clip0_321_3471">
                <rect width="400" height="305" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-1">
          <div className="w-fit">
            <svg
              className="w-[120px]"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_321_3484)">
                <path
                  d="M16.0157 6.06421L19.5155 8.70821L17.3775 11.4284C18.8536 13.0987 19.3976 15.0046 19.3976 17.1046C19.3976 19.4748 18.5037 22.8188 15.3539 24.2569C18.5418 25.8509 19.318 28.1449 19.318 30.5948C19.318 35.8828 15.2742 39.1471 9.71615 39.1471C4.15812 39.1471 0 35.765 0 30.5948H4.70215C4.70215 33.0829 6.99604 34.715 9.71615 34.715C12.4363 34.715 14.5742 33.2388 14.5742 30.5948C14.5742 27.9508 12.0863 26.7449 9.71615 26.7449C3.73192 26.7449 0 23.0925 0 17.1046C0 11.1166 4.35217 7.38448 9.71961 7.38448C11.2373 7.38448 12.7897 7.57853 14.1134 8.47257L16.0157 6.06421ZM4.70215 17.1046C4.70215 20.4485 6.95793 22.4307 9.71615 22.4307C12.4363 22.4307 14.692 20.4104 14.692 17.1046C14.692 13.7987 12.4397 11.7022 9.71961 11.7022C6.95793 11.7022 4.70215 13.7606 4.70215 17.1046Z"
                  fill="#112211"
                />
                <path
                  d="M54.9878 0V27.1746H50.2856V0H54.9878Z"
                  fill="#112211"
                />
                <path
                  d="M76.1179 17.6105C76.1179 23.1307 72.3479 27.6008 66.128 27.6008C59.9082 27.6008 56.1763 23.1307 56.1763 17.6105C56.1763 12.1284 59.9844 7.62012 66.0899 7.62012C72.1954 7.62012 76.1179 12.1284 76.1179 17.6105ZM60.9165 17.6105C60.9165 20.5248 62.6664 23.2485 66.1246 23.2485C69.5828 23.2485 71.3326 20.5282 71.3326 17.6105C71.3326 14.7343 69.3125 11.9344 66.1246 11.9344C62.7045 11.9344 60.9165 14.7343 60.9165 17.6105Z"
                  fill="#112211"
                />
                <path
                  d="M82.0469 0V10.6141C83.1731 8.63198 86.3229 7.54389 88.343 7.54389C93.9392 7.54389 98.1008 10.9641 98.1008 17.5724C98.1008 23.8688 93.863 27.6009 88.2287 27.6009C85.8967 27.6009 83.5265 26.8246 82.0469 24.5306L81.7351 27.1746H77.3032V0H82.0469ZM82.3553 17.5724C82.3553 21.0307 84.9195 23.2104 87.9134 23.2104C90.9453 23.2104 93.3571 20.9163 93.3571 17.5724C93.3571 14.114 90.9453 11.976 87.9134 11.976C84.923 11.9725 82.3553 14.2284 82.3553 17.5724Z"
                  fill="#112211"
                />
                <path
                  d="M105.152 20.9129C106.254 23.0336 108.777 23.9381 111.919 22.7945C113.562 22.195 115.492 20.7916 116.13 19.3604L120.004 21.1347C118.822 23.7994 116.064 25.8786 113.323 26.8766C107.113 29.136 102.027 26.6444 99.9268 20.8713C97.9309 15.3927 100.221 10.0908 106.067 7.96318C112.093 5.76966 117.214 8.12604 119.217 15.7947L105.152 20.9129ZM113.6 13.6601C112.457 11.4284 110.204 10.926 107.647 11.8547C105.235 12.7314 103.69 14.62 103.884 17.1946L113.6 13.6601Z"
                  fill="#112211"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.2386 13.0379C41.7013 9.83054 38.4964 7.62012 34.2213 7.62012C28.1158 7.62012 24.3076 12.1284 24.3076 17.6105C24.3076 21.1103 25.8077 24.1881 28.491 25.9722C28.6439 25.8578 28.7359 25.7835 28.7359 25.7835C30.0743 24.9103 31.3799 23.991 32.6506 23.0277C30.2567 22.3233 29.0479 20.0327 29.0479 17.6105C29.0479 14.7343 30.8393 11.9344 34.2559 11.9344C37.2647 11.9344 39.2333 14.4285 39.445 17.1269C40.7639 15.818 42.0295 14.454 43.2386 13.0379ZM33.7754 27.5917C37.5614 24.9081 41.0621 21.8426 44.2201 18.4459C43.8586 23.5747 40.1622 27.6008 34.2594 27.6008C34.0963 27.6008 33.935 27.5978 33.7754 27.5917Z"
                  fill="white"
                />
                <path
                  d="M47.1044 4.93451C42.2601 3.15336 38.7777 6.98594 38.7777 6.98594L42.08 8.9057C43.317 8.19532 43.868 8.88491 44.01 9.26262C44.1105 9.52945 43.9754 9.82053 43.868 9.97993L43.064 10.9953C38.7257 16.2278 33.6251 20.7742 27.9319 24.489C27.9319 24.489 26.2133 25.8751 25.2985 25.8959C24.5292 25.9132 24.1862 25.2652 24.8341 24.3365L23.2402 20.7396C23.2402 20.7396 19.0925 23.4564 19.8964 28.2315C20.2359 30.2483 22.1314 31.6829 24.1446 31.319C25.1737 31.1354 26.4454 30.6329 28.0012 29.6037L30.8634 27.7325C36.5566 24.0108 41.6607 19.4505 45.9955 14.211L46.9796 13.0224C48.4627 11.3349 49.128 9.94528 49.3532 8.84679C49.6997 7.16614 48.7052 5.5236 47.1044 4.93451Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_321_3484">
                  <rect width="120" height="39.1471" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex items-center justify-between mt-2">
              {socialMediaData.map((link) => (
                <Link key={link.id} t={link.url}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex"></div>
        </div>
        {footerData.map((line) => {
          return (
            <div key={line.id} className="flex-1 whitespace-nowrap">
              <span className="md:text-lg lg:text-xl font-semibold">
                {line.title}
              </span>
              <ul className="text-sm md:text-base lg:text-base leading-6 md:leading-7 text-gray-600">
                {line.children.map((item) => (
                  <li key={item.id}>
                    <Link className="block" to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

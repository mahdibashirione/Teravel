import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [socialMediaData, setSocialMediaData] = useState([
    {
      id: 1,
      icon: (
        <svg
          width="24"
          height="24"
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
          width="24"
          height="25"
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
          width="24"
          height="25"
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
      title: "Menu",
      children: [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "Tours", url: "/" },
        { id: 3, title: "Category", url: "/" },
        { id: 4, title: "About Us", url: "/" },
      ],
    },
    {
      id: 2,
      title: "Booking Plan",
      children: [
        { id: 1, title: "Personal Trip", url: "/" },
        { id: 2, title: "Group Trip", url: "/" },
      ],
    },
    {
      id: 3,
      title: "Support",
      children: [
        { id: 1, title: "FAQ", url: "/" },
        { id: 2, title: "Terms & Conditions", url: "/" },
        { id: 3, title: "Privacy Policy", url: "/" },
      ],
    },
    {
      id: 4,
      title: "Get App",
      children: [
        { id: 1, title: "Google Play Store", url: "/" },
        { id: 2, title: "App Store", url: "/" },
        { id: 3, title: "Other Stores", url: "/" },
      ],
    },
  ]);

  return (
    <footer className="px-4 bg-white">
      <div className="container max-w-6xl flex flex-wrap gap-y-6 pb-20">
        <div className="w-1/2 md:w-auto md:flex-1">
          <div className="w-fit">
            <img
              className="w-[120px]"
              src="/image/TravelInt.svg"
              loading="lazy"
              alt=""
            />
            <div className="flex items-center justify-between mt-3">
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
            <div
              key={line.id}
              className="w-1/2 md:w-auto md:flex-1 whitespace-nowrap"
            >
              <span className="md:text-lg lg:text-xl font-semibold">
                {line.title}
              </span>
              <ul className="text-sm md:text-base lg:text-base leading-6 md:leading-7 text-gray-600">
                {line.children.map((item) => (
                  <li key={item.id} className="mt-1 md:mt-2.5 text-[#AEAEAE]">
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

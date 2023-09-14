import { useState } from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([
    {
      id: 1,
      title: "A real sense of community, nurtured",
      description:
        " Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Olga",
      star: 5,
      cover: "/image/review1.svg",
      url: "/",
    },
    {
      id: 2,
      title: "A real sense of community, nurtured",
      description:
        " Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Olga",
      star: 5,
      cover: "/image/review1.svg",
      url: "/",
    },
    {
      id: 3,
      title: "A real sense of community, nurtured",
      description:
        " Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Olga",
      star: 5,
      cover: "/image/review1.svg",
      url: "/",
    },
    {
      id: 4,
      title: "A real sense of community, nurtured",
      description:
        " Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Olga",
      star: 5,
      cover: "/image/review1.svg",
      url: "/",
    },
    {
      id: 5,
      title: "A real sense of community, nurtured",
      description:
        " Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      writer: "Olga",
      star: 5,
      cover: "/image/review1.svg",
      url: "/",
    },
  ]);

  return (
    <section className="p-4">
      <div className="container">
        {/* header */}
        <div className="flex items-center justify-between md:mt-4 md:mb-2">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Reviews
            </h2>
            <span className="text-sm xl:text-base">
              What people says about Golobe facilities
            </span>
          </div>
          <button className="duration-200">
            <Link
              className="text-sm py-2 px-3 hover:bg-primary block duration-200 rounded md:text-base border border-primary active:scale-95 lg:text-lg whitespace-nowrap"
              to="/"
            >
              See All
            </Link>
          </button>
        </div>
        {/* content */}
        <div className="flex gap-x-8 overflow-x-auto py-4 px-2 scrollbar-none">
          {reviewsData.map((review) => {
            let stars = [];
            for (let i = 1; i <= 5; i++) {
              stars = [...stars, i];
            }
            return (
              <Link
                key={review.id}
                to={review.url}
                className="bg-white rounded-2xl p-4 border shadow-[0.75rem_0.75rem_0_0_rgba(0,0,0,0.3)] shadow-primary/50 
                w-[350px] block min-w-[350px]"
              >
                {/* title */}
                <h3 className="font-bold text-xl">“{review.title}”</h3>
                {/* description */}
                <p className="text-sm text-gray-400 line-clamp-2 mt-4 mb-2">
                  {review.description}
                </p>
                <span className="text-sm text-right block">View more</span>
                {/* stars */}
                <div className="flex items-center gap-2 md:gap-1">
                  {stars.map((start, index) => {
                    return (
                      <svg
                        key={index}
                        className="w-4 md:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9887L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5022C5.36921 22.5017 5.21441 22.4505 5.08629 22.3561C4.95818 22.2618 4.86339 22.1291 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5476L1.07811 10.3687C0.946113 10.2783 0.846491 10.1481 0.793797 9.99699C0.741103 9.84593 0.7381 9.68197 0.785225 9.52907C0.83235 9.37618 0.927135 9.24236 1.05573 9.14717C1.18432 9.05198 1.33999 9.0004 1.49998 8.99998H9.0178L11.2865 2.01795C11.3354 1.86721 11.4308 1.73583 11.559 1.64264C11.6871 1.54946 11.8415 1.49927 12 1.49927C12.1584 1.49927 12.3128 1.54946 12.441 1.64264C12.5692 1.73583 12.6645 1.86721 12.7134 2.01795L14.9822 9.00233H22.5C22.6602 9.00225 22.8162 9.05346 22.9452 9.14847C23.0741 9.24348 23.1693 9.37729 23.2167 9.5303C23.2642 9.68331 23.2613 9.84749 23.2087 9.99878C23.1561 10.1501 23.0564 10.2805 22.9242 10.3711L16.8281 14.5476L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8605C19.1917 21.9782 19.1464 22.09 19.0771 22.1868C19.0078 22.2835 18.9165 22.3623 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z"
                          fill="#FFC107"
                        />
                      </svg>
                    );
                  })}
                </div>
                {/* writer */}
                <div className="mt-4 mb-2">
                  <span className="font-semibold text-lg">{review.writer}</span>
                  <p className="text-sm text-gray-400">
                    Weave Studios – Kai Tak
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
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
                      d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
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
                  Google
                </div>
                {/* cover */}
                <div className="rounded-xl overflow-hidden mt-4">
                  <img
                    className="w-full"
                    src={review.cover}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

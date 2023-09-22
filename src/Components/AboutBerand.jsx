import { FiFlag, FiSend, FiSmile } from "react-icons/fi";

const AboutBerand = () => {
  return (
    <section className="p-4 my-16 md:my-32">
      <div className="container max-w-6xl flex flex-col md:flex-row gap-x-[166px]">
        {/* Cover */}
        <div className="w-full md:min-w-fit md:w-[385px]">
          <div className="md:pl-[100px] h-full relative">
            <img
              src="/image/aboutBerand.svg"
              className="mx-auto"
              loading="lazy"
              alt=""
            />
            <div className="absolute md:left-5 left-0 bottom-[160px] flex bg-white/50 backdrop-blur-xl py-3 pl-4 shadow-main border rounded-br-full pr-[59px]">
              <div className="p-1 w-8 h-8 rounded bg-[rgba(66.30,0,255,0.05)] flex items-center justify-center text-primary">
                <FiSend className="text-xl" />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl block text-center">
                  400+
                </span>
                <p className="text-xl text-[#5F5F5F]">Destination</p>
              </div>
            </div>
            <div className="absolute right-0 md:right-auto md:left-[353px] -bottom-4 flex bg-white/50 backdrop-blur-xl py-3 pr-4 shadow-main border rounded-tl-full pl-[59px]">
              <div className="p-1 w-8 h-8 rounded bg-[rgba(66.30,0,255,0.05)] flex items-center justify-center text-primary mr-5">
                <FiFlag className="text-xl" />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl block text-center">
                  70+
                </span>
                <p className="text-xl text-[#5F5F5F]">Tours</p>
              </div>
            </div>
            <div className="absolute right-0 md:right-auto md:left-[390px] bottom-[287px] flex bg-white/50 backdrop-blur-xl py-3 pr-4 shadow-main border rounded-bl-full pl-[59px]">
              <div className="p-1 w-8 h-8 rounded bg-[rgba(66.30,0,255,0.05)] flex items-center justify-center text-primary mr-4">
                <FiSmile className="text-xl" />
              </div>
              <div>
                <span className="font-bold text-xl md:text-2xl block text-center">
                  3300+
                </span>
                <p className="text-xl text-[#5F5F5F]">Customers</p>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-full md:flex-1 flex flex-col justify-end px-4 md:px-0 mt-16 md:mt-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Why Choose <span className="text-primary">Travel</span>.int?
          </h2>
          <p className="text-base lg:text-lg text-[#AEAEAE] md:mt-10 mt-6 max-w-[342px]">
            There are always undoubted leaders, professionals in their field,
            experts of their product - that's us! Travel agency Verona-tour does
            not stand still, we work for you! We are developing our network,
            opening new offices, inspecting hotels and discovering new
            countries, and most importantly, we provide our tourists with the
            best service in Ukraine!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBerand;

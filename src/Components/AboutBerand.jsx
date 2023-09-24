import { FiFlag, FiSend, FiSmile } from "react-icons/fi";

const AboutBerand = () => {
  return (
    <section className="p-4 mb-16 lg:my-24">
      <div className="container max-w-6xl flex flex-col md:flex-row xl:gap-x-[166px] gap-x-16">
        {/* Cover */}
        <div className="w-full md:w-1/2  hidden md:block">
          <div className="md:pl-[100px] h-full">
            <div className="relative max-w-[485px]">
              <img
                src="/image/aboutBerand.svg"
                className="mx-auto"
                loading="lazy"
                alt=""
              />
              <div className="absolute -left-16 lg:bottom-[160px] flex bg-white/50 top-44 backdrop-blur-xl lg:top-auto py-3 pl-4 shadow-main border rounded-br-full pr-[59px] scale-[0.8] lg:scale-100">
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
              <div className="absolute -right-8 -bottom-4 flex bg-white/50 backdrop-blur-xl py-3 pr-4 shadow-main border rounded-tl-full pl-[59px] scale-[0.8] lg:scale-100 delay-300 ">
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
              <div className="absolute -right-10 lg:bottom-[287px] top-16 lg:top-auto flex bg-white/50 delay-500 backdrop-blur-xl py-3 pr-4 shadow-main border rounded-bl-full pl-[59px] scale-[0.8] lg:scale-100">
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
        </div>
        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-end px-4 md:px-0 mt-16 md:mt-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold relative w-fit">
            Why Choose <span className="text-primary">Travel</span>.int?
            <span className="block rounded-full bg-[#E1FFDA] w-4 h-4 absolute -top-8 right-8 shadow"></span>
            <span className="block rounded-full bg-[#FFE0E0] w-4 h-4 absolute -top-16 left-2 shadow"></span>
            <span className="block rounded-full bg-[#E1FFDA] w-3 h-3 absolute -top-2 -left-8 shadow"></span>
          </h2>
          <p className="text-base lg:text-lg text-[#AEAEAE] md:mt-10 mt-6 max-w-[342px] relative">
            There are always undoubted leaders, professionals in their field,
            experts of their product - that's us! Travel agency Verona-tour does
            not stand still, we work for you! We are developing our network,
            opening new offices, inspecting hotels and discovering new
            countries, and most importantly, we provide our tourists with the
            best service in Ukraine!
            <span className="block rounded-full bg-[#FFE0E0] w-4 h-4 absolute top-0 -right-4 shadow"></span>
            <span className="block rounded-full bg-[#FFE0E0] w-4 h-4 absolute top-16 -left-10 shadow"></span>
            <span className="block rounded-full bg-[#D3E5FF] w-4 h-4 absolute bottom-8 -right-12 shadow"></span>
            <span className="block rounded-full bg-[#D3E5FF] w-4 h-4 absolute -bottom-4 -left-12 shadow"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBerand;

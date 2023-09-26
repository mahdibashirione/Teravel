import { QRCodeSVG } from "qrcode.react";

const QRCodeDiscount = () => {
  return (
    <section className="p-4 my-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center rounded-3xl  bg-gradient-to-tr from-[#C1D6EE] to-primary/60 py-14 gap-y-6 xl:gap-y-10">
          <h2 className="font-black text-[#313131] text-xl text-center md:text-3xl lg:text-5xl xl:text-6xl">
            Scan QR-code and take discount
          </h2>
          <QRCodeSVG size={140} value="https://teravel.netlify.app" />
        </div>
      </div>
    </section>
  );
};

export default QRCodeDiscount;

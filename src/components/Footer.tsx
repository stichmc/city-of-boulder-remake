import socialPic from "@/assets/social.png";

const Footer = () => {
  return (
    <div className="flex flex-row h-[15vh] w-full items-center justify-center gap-8 border-t-black border-t-2 pb-4 pt-4">
      <div className="flex flex-col gap-4 font-semibold text-xl">
        <p className="underline">Calendar</p>
        <p>Services</p>
        <p>Government</p>
      </div>
      <div className="flex flex-col gap-4 font-semibold text-xl">
        <p>Locations</p>
        <p>News</p>
        <p>Accessibility</p>
      </div>
      <div className="flex flex-col gap-4 font-semibold text-xl">
        <p>1777 Broadway</p>
        <p>Boulder, CO 80302</p>
        <p className="text-amber-700 underline">Contact</p>
      </div>
      <img src={socialPic} className="h-24 ml-24" />
    </div>
  );
};

export default Footer;

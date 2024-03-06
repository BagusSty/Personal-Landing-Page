import Job from "./Job";
import Name from "./Name";

const Overview = () => {
  return (
    <div id="home" className="w-full h-screen flex justify-center items-center p-24 gap-8">
      <div className="w-2/3 h-full flex flex-col justify-center items-start space-y-8">
        <Name />
        <Job/>
      </div>
      <div className="w-1/3 h-full"></div>
    </div>
  );
};

export default Overview;

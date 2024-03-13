import Job from "./Job";
import Name from "./Name";

const Overview = () => {
  return (
    <div id="home" className="w-full h-screen flex sm:flex-row flex-col justify-center items-center sm:p-24 p-8 gap-8">
      <div className="sm:w-2/3 w-full h-full flex flex-col justify-center sm:items-start items-center sm:space-y-8 space-y-4">
        <Name />
        <Job/>
      </div>
      <div className="sm:flex hidden sm:w-1/3 h-full"></div>
    </div>
  );
};

export default Overview;

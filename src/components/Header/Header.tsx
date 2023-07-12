import logoPactia from "../../assets/logoPactia.svg";
import iconSearch from "../../assets/search.svg";

export default function Header() {
  return (
    <div className="h-16 w-full flex flex-nowrap items-center bg-ssTheme-blackBlue py-2 px-5  text-ssTheme-whiteBlue">
      <div className=" bg-ssTheme-blue h-full rounded-full flex-none">
        <img src={logoPactia} alt="logo Pactia.com" className="h-full" />
      </div>
      <h1 className="text-ssTheme-whiteBlue font-bold text-3xl mx-3 pb-2">
        Pactia
      </h1>
      <div className="w-full h-full flex-grow flex justify-center items-center ">
        <input
          type="search"
          name="a"
          id=""
          className="w-2/5 h-3/4 rounded-s-md bg-ssTheme-whiteBlue/90 hover:bg-ssTheme-whiteBlue text-black p-3  focus:bg-white focus:outline-none focus:border-b-2  focus:border-b-ssTheme-blue "
        />
        <button className="h-3/4 bg-ssTheme-blue hover:bg-ssTheme-blue2 rounded-e-md actionButton ">
          <img src={iconSearch} alt="buscar" className="h-full py-2 px-3" />
        </button>
      </div>
    </div>
  );
}

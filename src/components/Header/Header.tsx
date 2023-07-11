import logoPactia from "../../assets/logoPactia.svg";

export default function Header() {
  return (
    <div className="h-16 w-full flex flex-nowrap items-center bg-ssTheme-blackBlue py-2 px-5  text-ssTheme-whiteBlue">
      <div className=" bg-ssTheme-blue h-full rounded-full">
        <img src={logoPactia} alt="logo Pactia.com" className="h-full" />
      </div>
    </div>
  );
}

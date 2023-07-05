import "./headerStyle.css";
//utilities
import useWindowDimension from "../../utilities/useWindowDimension";

export default function Header() {
  const { width } = useWindowDimension();
  const windowWidth = width.toString() + "px";
  return (
    <div className="main" style={{ maxWidth: windowWidth, width: windowWidth }}>
      Header
    </div>
  );
}

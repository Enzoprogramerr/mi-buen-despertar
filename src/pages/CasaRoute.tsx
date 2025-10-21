import Casa from "../components/Casa";
import Layout from "../components/Layout";
import "../Styles.css";

function CasaRoute() {
  return <Layout>{({ menu }) => <Casa menu={menu} />}</Layout>;
}
export default CasaRoute;

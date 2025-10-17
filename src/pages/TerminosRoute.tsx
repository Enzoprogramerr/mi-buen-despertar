import Layout from "../components/Layout";
import { Terminos } from "../components/Terminos";
import "../Styles.css";

function TerminosRoute() {
  return <Layout>{({ menu }) => <Terminos menu={menu}></Terminos>}</Layout>;
}
export default TerminosRoute;

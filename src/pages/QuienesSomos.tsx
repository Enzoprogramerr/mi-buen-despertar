import Layout from "../components/Layout";
import { QuienesSomos } from "../components/QuienesSomos";
import "../Styles.css";

function SomosRoute() {
  return (
    <Layout>{({ menu }) => <QuienesSomos menu={menu}></QuienesSomos>}</Layout>
  );
}
export default SomosRoute;

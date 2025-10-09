import { Duplex } from "../components/Duplex";
import Layout from "../components/Layout";
import "../Styles.css";

function DuplexRoute() {
  return <Layout>{({ menu }) => <Duplex menu={menu}></Duplex>}</Layout>;
}

export default DuplexRoute;

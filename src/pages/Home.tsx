import Inicio from "../components/Inicio";
import Layout from "../components/Layout";
import "../Styles.css";

function Home() {
  return <Layout>{({ menu }) => <Inicio menu={menu} />}</Layout>;
}
export default Home;

import { Space } from "antd";
import "./App.css";
import AppFooter from "./commponets/AppFooter/AppFooter";
import AppHeader from "./commponets/AppHeader/AppHeader";
import PageContent from "./commponets/PageContent/PageContent";
import SideMenu from "./commponets/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPagecontent">
        <SideMenu />
        <PageContent />
      </Space>

      <AppFooter />
    </div>
  );
}

export default App;

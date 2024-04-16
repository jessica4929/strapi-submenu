import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { useGlobalContext } from "./context";

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      {isSidebarOpen && <Sidebar />}
      <Submenu />
    </main>
  );
};
export default App;

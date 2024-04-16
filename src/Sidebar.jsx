import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        {sublinks.map((link) => {
          const { page, pageId, links } = link;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((sublink) => {
                  const { id, label, icon, url } = sublink;
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
      <button onClick={closeSidebar} className="close-btn">
        <FaTimes />
      </button>
    </aside>
  );
};
export default Sidebar;

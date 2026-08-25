import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import ScrollManager from "./ScrollManager.jsx";

function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default WebsiteLayout;

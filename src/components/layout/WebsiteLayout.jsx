import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";

function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default WebsiteLayout;

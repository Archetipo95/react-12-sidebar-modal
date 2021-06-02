import React from "react";
import { FaBars } from "react-icons/fa";
import { useMyHook } from "./context";
const Home = () => {
  // const data = useContext(AppContex)
  // const data = useMyHook();

  const { openSidebar, openModal } = useMyHook();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;

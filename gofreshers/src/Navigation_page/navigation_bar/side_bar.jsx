import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import MenuItem from "./Menu_item";
import menuItems from "./menu.js";
import Headerex from "./headerex";
import "./side_bar.css";

const SideBar = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <>
      <Headerex />
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section ">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div onClick={() => setInactive(!inactive)} className="toggle-btn">
            {inactive ? <FiChevronsRight /> : <FiChevronsLeft />}
          </div>
        </div>

        {/* search section */}

        <div className="search-controller">
          <div className="search-btn">
            <BsSearch />
          </div>
          <input type="text" placeholder="Type here to search Menu..." />
        </div>

        {/* divider to different sections */}
        <div className="divider"></div>

        <div className="main-menu">
          <ul className="list-items">
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                heading={menuItem.heading}
                name={menuItem.name}
                to={menuItem.to}
                icon={menuItem.iconname}
                subMenus={menuItem.subMenus || []}
                onClick={() => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

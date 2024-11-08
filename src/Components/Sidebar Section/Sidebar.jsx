import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import { IoMdSpeedometer, IoMdTrendingUp } from "react-icons/io";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import {
  BsTrophy,
  BsCreditCard2FrontFill,
  BsQuestionCircle,
} from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <div className="divTitle">
          <h3>QUICK MENU</h3>
          <ul className="menuLists grid">
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <IoMdSpeedometer className="icon" />{" "}
                <span className="smallText">Dashboard</span>
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdDeliveryDining className="icon" />{" "}
                <span className="smallText">My orders</span>
              </a>
            </li>{" "}
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdOutlineExplore className="icon" />{" "}
                <span className="smallText">Explore</span>
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <BsTrophy className="icon" />{" "}
                <span className="smallText">Products</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="settingsDiv">
        <div className="divTitle">
          <h3>SETTINGS</h3>
          <ul className="menuLists grid">
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <AiOutlinePieChart className="icon" />{" "}
                <span className="smallText">Charts</span>
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <IoMdTrendingUp className="icon" />{" "}
                <span className="smallText">Trends</span>
              </a>
            </li>{" "}
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdOutlinePermContactCalendar className="icon" />{" "}
                <span className="smallText">Contact</span>
              </a>
            </li>
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <BsCreditCard2FrontFill className="icon" />{" "}
                <span className="smallText">Billing</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Planti, please contact us for more information
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

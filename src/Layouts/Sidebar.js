import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../ThemeContext";
export default function Sidebar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`${isDarkMode ? "main-menu menu-fixed menu-light menu-accordion menu-shadow--dark":"main-menu menu-fixed menu-light menu-accordion menu-shadow"}`}
        data-scroll-to-active="true"
      >
         
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item me-auto">
              <h2 className="brand-text">Vuexy</h2>
            </li>
            <li className="nav-item nav-toggle">
              <a
                className="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
              >
                <i
                  className="d-block d-xl-none text-primary toggle-icon font-medium-4"
                  data-feather="x"
                />
                <i
                  className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                  data-feather="disc"
                  data-ticon="disc"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom" />
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className=" nav-item">
              <Link className="d-flex align-items-center" to="/">
                <i data-feather="home" />
                <span className="menu-title text-truncate" data-i18n="Dashboards">
                  Dashboards
                </span>
              </Link>

            </li>
            <li className=" navigation-header">
              <span data-i18n="Apps & Pages">Apps &amp; Pages</span>
              <i data-feather="more-horizontal" />
            </li>
            <li className="nav-item">
              <Link className="d-flex align-items-center" to="/table">
                <i data-feather="mail" />
                <span className="menu-title text-truncate" data-i18n="Email">
                  Email
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}

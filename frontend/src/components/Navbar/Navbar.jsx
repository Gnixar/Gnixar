import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePrograms } from "../../context/ProgramContext";
import Login from "../Login/Login";
import "./Navbar.css";

const Navbar = () => {
  const { programs = [] } = usePrograms();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);

  const [activeCategory, setActiveCategory] = useState(null);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  /* ---------- AUTH ---------- */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  /* ---------- DEFAULT CATEGORY ---------- */
  useEffect(() => {
    if (programs.length && !activeCategory) {
      setActiveCategory(programs[0].category);
    }
  }, [programs, activeCategory]);

  const toggleMobile = () => {
    setMobileOpen(prev => !prev);
    setMobileProgramsOpen(false);
    setOpenMobileCategory(null);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  /* ---------- DESKTOP MEGA MENU ---------- */
  const activeDetails = useMemo(
    () => programs.find(p => p.category === activeCategory),
    [programs, activeCategory]
  );

  const renderDesktopMegaMenu = () => (
    <div className="dropdown-menu-container">
      <div className="program-categories">
        {programs.map(program => (
          <button
            key={program.category}
            className={`category-button ${
              activeCategory === program.category ? "active" : ""
            }`}
            onMouseEnter={() => setActiveCategory(program.category)}
          >
            {program.category}
          </button>
        ))}
      </div>

      <div className="course-details">
        <h4 className="details-header">
          Courses in {activeCategory}
        </h4>

        {activeDetails?.details?.map(course => (
          <a key={course.name} href={course.link} className="detail-link">
            {course.name}
          </a>
        ))}
      </div>
    </div>
  );

  /* ---------- MOBILE PROGRAMS ---------- */
  const renderMobilePrograms = () => (
    <div className="mobile-programs">
      {programs.map(program => (
        <div key={program.category}>
          <button
            className="mobile-category-btn"
            onClick={() =>
              setOpenMobileCategory(prev =>
                prev === program.category ? null : program.category
              )
            }
          >
            {program.category}
            <span>
              {openMobileCategory === program.category ? "−" : "+"}
            </span>
          </button>

          {openMobileCategory === program.category && (
            <div className="mobile-course-list">
              {program.details?.map(course => (
                <a
                  key={course.name}
                  href={course.link}
                  className="mobile-course-link"
                >
                  {course.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <nav className="desktop-nav">
          <div className="nav-item mega-dropdown">
            <span className="dropdown-toggle">
              Programs <span className="chevron">▼</span>
            </span>
            {renderDesktopMegaMenu()}
          </div>

          <Link to="/mockinterview" className="nav-item">Mock Interview</Link>
          <Link to="/aboutus" className="nav-item">About</Link>
          <Link to="/contactus" className="nav-item">Contact</Link>
        </nav>

        {/* ---------- DESKTOP RIGHT ---------- */}
        <div className="navbar-right">
          <form className="desktop-search">
            <input type="text" placeholder="Search..." />
          </form>

          {user ? (
            <>
              <span className="navbar-user">
                Hi, {user.username || user.email}
              </span>
              <button
                className="btn-login-desktop"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="btn-login-desktop"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          )}

          <button className="mobile-menu-btn" onClick={toggleMobile}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <button
            className="mobile-main-btn"
            onClick={() => setMobileProgramsOpen(prev => !prev)}
          >
            Programs {mobileProgramsOpen ? "▲" : "▼"}
          </button>

          {mobileProgramsOpen && renderMobilePrograms()}

          <Link to="/mockinterview" className="mobile-link">Mock Interview</Link>
          <Link to="/aboutus" className="mobile-link">About</Link>
          <Link to="/contactus" className="mobile-link">Contact</Link>

          <div className="mobile-auth">
            {user ? (
              <button className="btn-mobile" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn-mobile"
                onClick={() => {
                  setShowLogin(true);
                  setMobileOpen(false);
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={setUser}
        />
      )}
    </header>
  );
};

export default Navbar;

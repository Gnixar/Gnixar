import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePrograms } from "../../context/ProgramContext";
import Login from "../Login/Login";
import "./Navbar.css";

const Navbar = () => {
  const { programs = [] } = usePrograms();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Initialize to null
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Set initial category after programs load
  useEffect(() => {
    if (programs.length > 0 && activeCategory === null) {
      setActiveCategory(programs[0].category);
    }
  }, [programs, activeCategory]);

  const toggleMobile = () => {
    // Also close the login modal if the user taps the menu button
    setShowLogin(false);
    setMobileOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // Memoize active details for the mega menu
  const activeDetails = useMemo(
    () => programs.find((p) => p.category === activeCategory),
    [programs, activeCategory]
  );

  // Function to render the programs mega menu content
  const renderMegaMenu = (isMobile = false) => (
    <div
      className={
        isMobile ? "mobile-mega-content" : "dropdown-menu-container"
      }
    >
      <div className="program-categories">
        {programs.map((program) => (
          <a
            key={program.category}
            href={program.link}
            className={`category-link ${
              activeCategory === program.category ? "active" : ""
            }`}
            // Use onClick/onTouchStart for mobile to set category
            // Use onMouseEnter for desktop
            onMouseEnter={() =>
              !isMobile && setActiveCategory(program.category)
            }
            onClick={() => isMobile && setActiveCategory(program.category)}
          >
            {program.category}
          </a>
        ))}
      </div>

      <div className="course-details">
        {activeCategory && activeDetails ? (
          <>
            <h4 className="details-header">Courses in {activeCategory}</h4>

            {activeDetails.details?.length ? (
              activeDetails.details.map((detail) => (
                <a
                  key={detail.name}
                  href={detail.link}
                  className="detail-link"
                >
                  {detail.name}
                </a>
              ))
            ) : (
              <p className="placeholder-text">No courses listed yet.</p>
            )}

            <a
              href={activeDetails.link}
              className="view-all-link"
            >
              View All {activeCategory} &rarr;
            </a>
          </>
        ) : (
          <p className="placeholder-text">
            {isMobile
              ? "Select a category above"
              : "Hover over a category"}
          </p>
        )}
      </div>
    </div>
  );

  // Function to render the navigation links
  const renderNavLinks = (isMobile = false) => (
    <>
      <div
        className={`nav-item mega-dropdown ${isMobile ? 'mobile-dropdown' : ''}`}
        onMouseLeave={() => !isMobile && setActiveCategory(null)}
      >
        <span className="dropdown-toggle">
          Programs <span className="chevron">&#9662;</span>
        </span>

        {programs.length > 0 && renderMegaMenu(isMobile)}
      </div>

      <Link to="/mockinterview" className="nav-item">Mock Interview</Link>
      <Link to="/aboutus" className="nav-item">About</Link>
      <Link to="/contactus" className="nav-item">Contact</Link>
    </>
  );

  // Function to render the Auth/User UI
  const renderAuthUI = (isMobile = false) => (
    <>
      {user ? (
        <>
          <span className={`navbar-user ${isMobile ? 'mobile-user' : ''}`}>
            Hello, {user.username || user.email}
          </span>
          <button 
            className={`btn btn-ghost ${isMobile ? 'mobile-btn' : ''}`} 
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className={`btn btn-ghost ${isMobile ? 'mobile-btn' : ''}`}
          onClick={() => {
            setShowLogin(true);
            setMobileOpen(false); // Close mobile menu when opening modal
          }}
        >
          Login
        </button>
      )}
    </>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="navbar-links">{renderNavLinks(false)}</nav>

        {/* RIGHT SIDE */}
        <div className="navbar-right">
          {/* SEARCH (DESKTOP) */}
          <form className="nav-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search programs" />
          </form>

          {/* AUTH UI (DESKTOP) */}
          {renderAuthUI(false)}

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-btn" onClick={toggleMobile}>
            {mobileOpen ? <>&#x2715;</> : <>&#x2630;</>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}>
        <nav className="mobile-nav-content">
          {/* SEARCH (MOBILE) */}
          <form 
            className="nav-search mobile-search" 
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Search programs" />
          </form>

          {/* NAV LINKS (MOBILE) */}
          {renderNavLinks(true)}

          {/* AUTH UI (MOBILE) */}
          <div className="mobile-auth-ui">
            {renderAuthUI(true)}
          </div>
        </nav>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(userData) => setUser(userData)}
        />
      )}
    </header>
  );
};

export default Navbar;
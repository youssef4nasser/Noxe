import React from 'react';

const Footer = () => {
  // Inline styles for the component
  const styles = {
    footer: {
      backgroundColor: '#141414',
      color: '#a9a9a9',
      padding: '60px 0 20px 0',
    },
    footerH5: {
      color: '#ffffff',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      marginBottom: '10px',
    },
    a: {
      color: '#a9a9a9',
      textDecoration: 'none',
    },
    aHover: {
      color: '#ffffff',
      textDecoration: 'underline',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: '#292929',
      color: '#ffffff',
      borderRadius: '8px',
      textDecoration: 'none',
    },
    socialIconHover: {
      backgroundColor: '#444444',
    },
    footerBottom: {
      borderTop: '1px solid #333333',
      paddingTop: '20px',
      marginTop: '40px',
      fontSize: '0.9em',
    },
  };

  // Simple hover effect handling
  const handleMouseOver = (e) => {
    e.target.style.color = styles.aHover.color;
    e.target.style.textDecoration = styles.aHover.textDecoration;
  };

  const handleMouseOut = (e) => {
    e.target.style.color = styles.a.color;
    e.target.style.textDecoration = styles.a.textDecoration;
  };
  
  const handleSocialIconMouseOver = (e) => {
    // Find the closest parent 'a' tag to apply style
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target) {
      target.style.backgroundColor = styles.socialIconHover.backgroundColor;
    }
  };

  const handleSocialIconMouseOut = (e) => {
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target) {
      target.style.backgroundColor = styles.socialIcon.backgroundColor;
    }
  };


  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          {/* Home Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Home</h5>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Categories</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Devices</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Pricing</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>FAQ</a></li>
            </ul>
          </div>

          {/* Movies Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Movies</h5>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Genres</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Trending</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>New Release</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Popular</a></li>
            </ul>
          </div>

          {/* Shows Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Shows</h5>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Genres</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Trending</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>New Release</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Popular</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Support</h5>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact Us</a></li>
            </ul>
          </div>

          {/* Subscription Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Subscription</h5>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Plans</a></li>
              <li style={styles.li}><a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Features</a></li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 style={styles.footerH5}>Connect With Us</h5>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon} onMouseOver={handleSocialIconMouseOver} onMouseOut={handleSocialIconMouseOut}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={styles.socialIcon} onMouseOver={handleSocialIconMouseOver} onMouseOut={handleSocialIconMouseOut}><i className="fab fa-twitter"></i></a>
              <a href="#" style={styles.socialIcon} onMouseOver={handleSocialIconMouseOver} onMouseOut={handleSocialIconMouseOut}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={styles.footerBottom}>
          <p className="mb-3 mb-md-0">@2023 streamvib, All Rights Reserved</p>
          <div className="d-flex">
            <a href="#" style={styles.a} className="me-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Terms of Use</a>
            <a href="#" style={styles.a} className="me-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Privacy Policy</a>
            <a href="#" style={styles.a} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

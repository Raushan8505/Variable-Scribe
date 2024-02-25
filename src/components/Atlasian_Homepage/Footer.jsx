import "./Footer.css";

const Footer = () => {
  return (
    <div className="bottom-section-f8">
      <div className="bottom-logo-altassian">
        <img
          className="component__image"
          src="https://wac-cdn.atlassian.com/dam/jcr:bec8148d-b7dc-493f-bbba-7519b0637581/logos-atlassian-logo-gradient-horizontal-neutral.svg?cdnVersion=lc"
          alt="Atlassian"
        />
      </div>
      <div className="four-section-footer">
        <div className="container-footer-section">
          <div className="plan-track-support-footer">
            <div className="row">
              <div className="column">
                <h3 className="bottom-heading">PRODUCT</h3>
                <a href="#link11" className="bottom-class-link">Jira Software</a>
                <a href="#link11" className="bottom-class-link">Jira Service Desk</a>
                <a href="#link11" className="bottom-class-link">Jira Ops</a>
                <a href="#link11" className="bottom-class-link">Confluence</a>
                <a href="#link11" className="bottom-class-link">Trello</a>
                <a href="#link11" className="bottom-class-link">Bitbucket</a>
                <a href="#link11" className="bottom-class-link-special">View All Products</a>
              </div>
              <div className="column">
                <h3 className="bottom-heading">RESOURCES</h3>
                <a href="#link11" className="bottom-class-link">Technical Support</a>
                <a href="#link11" className="bottom-class-link">Purchasing & Licensing</a>
                <a href="#link11" className="bottom-class-link">Atlassian Community</a>
                <a href="#link11" className="bottom-class-link">Knowledge base</a>
                <a href="#link11" className="bottom-class-link">Marketplace</a>
                <a href="#link11" className="bottom-class-link">My Account</a>
                <a href="#link11" className="bottom-class-link-special">Create support ticket</a>
              </div>
              <div className="column">
                <h3 className="bottom-heading">EXPAND & LEARN</h3>
                <a href="#link11" className="bottom-class-link">Partners</a>
                <a href="#link11" className="bottom-class-link">Training & Certification</a>
                <a href="#link11" className="bottom-class-link">Documentation</a>
                <a href="#link11" className="bottom-class-link">Developer Resources</a>
                <a href="#link11" className="bottom-class-link">Purchasing FAQ</a>
                <a href="#link11" className="bottom-class-link">Enterprise Services</a>
                <a href="#link11" className="bottom-class-link-special">View all resources</a>
              </div>
              <div className="column">
                <h3 className="bottom-heading">ABOUT ATLASSIAN</h3>
                <a href="#link11" className="bottom-class-link">Company</a>
                <a href="#link11" className="bottom-class-link">Careers</a>
                <a href="#link11" className="bottom-class-link">Events</a>
                <a href="#link11" className="bottom-class-link">Blogs</a>
                <a href="#link11" className="bottom-class-link">Investor Relations</a>
                <a href="#link11" className="bottom-class-link">Trust & Security</a>
                <a href="#link11" className="bottom-class-link-special">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-rule">
        <hr style={{ color: "black" }} />
      </div>
    </div>
  );
};

export default Footer;

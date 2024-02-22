import React from "react";
import "../components/Body.css";
import imgSummit from "../assets/Summit.png";
import Ragister from "../components/SummitForm.jsx";
import Customer from '../assets/Customer-logos-WAC-landing.png'
const Body = () => {
  return (
    <>
      <div>
    <div class="frist-blog">
      <img src={imgSummit} alt="atlassian-background-frontpage"/>
      <h1 class="frontpage-heading">
        Summit 2024 is heading to Banglore
      </h1>
      <p>
        Extend your professional network, sharpen your skills, and learn new ways to work at our annual user conference. Join us on April 9-11.
      </p>
      <div class="register-btn">
        <a href="#register-now_btn" class="component-link-btn">Register now</a>
      </div>
    </div>

    <div class="third">

<div class="third-container">
  <h3 class="third-header">
    Tools for teams, from startup to enterprise
  </h3>
  <h6 class="third-header-des">
    Atlassian provides the tools to help every team unleash their full potential.
  </h6>
</div>
</div>
<div class="horizontal-rule">
<hr id="horizon-rule"/>

<div class="fourth-application">

<div class="plan-track-support">
  <div id="fourth-main-header">
    <h3 class="fourth-heading">
      Plan, track, & support
    </h3>
  </div>

  <div class="first-row">
    <div class="fourth-apv1-container">
      <div class="fourth-apv1-img">
        <img src="" alt="JIRA Software Logo" width="175.58px" height="23px" />
      </div>
      <h6 class="fourth-apv1-content">
        Plan, track, and release world-class software with the #1 software development tool used by agile teams.
      </h6>

      <div class="fourth-app2-learnmore-btn">
        <a href="#Jira-learnmore" class="fourth-app2-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>

    </div>
  </div>


  <div class="first-row">
    <div class="fourth-app2-container">
      <div class="fourth-app2-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:5a7ca60f-cac3-4d01-95db-47caa5e58296/Jira%20Service%20Desk@2x-blue.png?cdnVersion=lc" alt="JIRA Service Desk Logo" width="211.8px" height="23px"/>
      </div>
      <h6 class="fourth-app2-content">
        Give your customers an easy way to ask for help and your agents a fast way to resolve incidents.
      </h6>
      <div class="fourth-app2-learnmore-btn">
        <a href="#Jira-learnmore" class="fourth-app2-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="first-row">
    <div class="fourth-apq3-container">
      <div class="fourth-apq3-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:696828c1-8c85-42b6-8c51-8b3cc800dc4b/Jira%20Ops-blue-rgb@2x.png?cdnVersion=lc" alt="Jira Ops" width="117.97px" height="27px"/>
      </div>
      <h6 class="fourth-apq3-content">
        Modern incident management with one place to respond, resolve, and learn from every incident.
      </h6>
      <div class="fourth-apq3-learnmore-btn">
        <a href="#Jira-Ops" class="fourth-apv1-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="first-row">
    <div class="fourth-app4-container">
      <div class="fourth-app4-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:09e533bf-aea2-4311-9be1-6142d3839c7c/Statuspage@2x-blue.png?cdnVersion=lc" alt="Statuspage Logo" class="component__image" width="158.59px" height="23px"/>
      </div>
      <h6 class="fourth-app4-content">
        Incidents happen. Keep your users informed and ditch the flood of support emails during downtime.
      </h6>
      <div class="fourth-app4-learnmore-btn">
        <a href="#Statuspage" class="fourth-app4-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="first-row">
    <div class="fourth-app5-container">
      <div class="fourth-app5-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:ac951aa9-6d87-46e8-93d9-8af0ce5dc395/Opsgenie-blue-rgb.svg?cdnVersion=lc" alt="Opsgenie Logo" width="127.25px" height="23px"/>
      </div>
      <h6 class="fourth-app5-content">
        Notify the right people at the right time with powerful incident alerting and on-call schedules.
      </h6>
      <div class="fourth-app5-learnmore-btn">
        <a href="#Opsgenie" class="fourth-app5-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>



</div>

<div class="plan-track-support">
  <div id="fourth-main-header">
    <h3 class="fourth-heading">
      Code, Build, & Ship
    </h3>
  </div>

  <div class="first-row">
    <div class="fourth-app6-container">
      <div class="fourth-app6-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:e2a6f06f-b3d5-4002-aed3-73539c56a2eb/Bitbucket@2x-blue.png?cdnVersion=lc" alt="Bitbucket Logo" width="145.69px" height="21px"/>
      </div>
      <h6 class="fourth-app6-content">
        Collaborate on code and manage your Git repositories to build and ship software, as a team.
      </h6>
      <div class="fourth-app6-learnmore-btn">
        <a href="#Bitbucket" class="fourth-app6-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="first-row">
    <div class="fourth-app7-container">
      <div class="fourth-app7-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:4c4d9b59-1049-4abc-b773-cc052c17f73c/Sourcetree@2x-blue.png?cdnVersion=lc" alt="Sourcetree Logo" width="157px" height="23px"/>
      </div>
      <h6 class="fourth-app7-content">
        Harness the full power of Git and Mercurial in a beautifully simple application.
      </h6>
      <div class="fourth-app7-learnmore-btn">
        <a href="#Sourcetree" class="fourth-app7-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="first-row">
    <div class="fourth-app8-container">
      <div class="fourth-app8-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:4f99ae3f-808f-44f1-9647-2b7cb87bb0e6/Bamboo@2x-blue.png?cdnVersion=le" alt="Bamboo Logo" width="127.58px" height="23px"/>
      </div>
      <h6 class="fourth-app8-content">
        Modern incident management with one place to respond, resolve, and learn from every incident.
      </h6>
      <div class="fourth-app8-learnmore-btn">
        <a href="#Bamboo" class="fourth-app8-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="image-application">
    <img src="https://wac-cdn.atlassian.com/dam/jcr:11d2461e-efa7-4e6c-ba5e-4011263cf064/Stack.svg?cdnVersion=lc" alt="Various people building and collaborating" class="component__image"/>
  </div>
</div>




<div class="plan-track-support">
  <div id="fourth-main-header">
    <h3 class="fourth-heading">
      Collaborate
    </h3>
  </div>

  <div class="first-row">
    <div class="fourth-app9-container">
      <div class="fourth-app9-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:a22c9f02-b225-4e34-9f1d-e5ac0265e543/Confluence@2x-blue.png?cdnVersion=le" alt="Confluence Logo" width="166.36px" height="21px"/>
      </div>
      <h6 class="fourth-app9-content">
        Spend more time getting things done. Organize your work, create documents, and discuss everything in one place.
      </h6>
      <div class="fourth-app9-learnmore-btn">
        <a href="#Confluence" class="fourth-app9-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>


  <div class="first-row">
    <div class="fourth-apv10-container">
      <div class="fourth-apv10-img">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:c135e4c1-d61c-4299-a536-c710530e2e64/Trello-icon-blue@2x.png?cdnVersion=lc" alt="Trello Logo" width="94.98px" height="23px"/>
      </div>
      <h6 class="fourth-app7-content">
        Collaborate and get more done. Trello boards enable your team to organize projects in a fun, flexible, and visual way.
      </h6>
      <div class="fourth-apv10-learnmore-btn">
        <a href="#Trello" class="fourth-apv10-link">Learn more
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</div>

</div>
</div>
  </div>
  <h3 class="s1-heading">
    <a href="#andmore" class="my-s1">and more...</a>
    </h3>
    <h6 id="s1-description">
      Find other products, apps, solutions, and services to keep your team moving forward.
      <a href="#team-playbook" class="v1-app-link">See all of our products</a>
    </h6>

    <div class="fourth">
    <div class="fourth-container">
      <h3 class="fourth-header">
        Get started with our products, for free
      </h3>
      <h6 id="fourth-description">
        Atlassian products are free to try, easy to set up, and work seamlessly together.
      </h6>
      <div class="fourth-btn">
        <a href="#take-a-look" class="fourth-component-link-btn"> Get started for free </a>
      </div>
    </div>
  </div>

  <div class="s4">
    <div>
      <img src="https://wac-cdn.atlassian.com/dam/jcr:15e1a99e-c74e-4617-b62b-f1f525e45b53/playsillustrationclean510x450-05.png?cdnVersion=le" alt="Team Playbook" width="190px" height="167.64px"/>
    </div>
    <div class="s4-foot">
      <h3 class="s4-heading">
        Introducing the Atlassian Team Playbook
      </h3>
      <h6 id="s4-description">
        This ain't your CEO's ivory-tower management book. It's by teams, for teams. You'll find step-by-step guides for tracking your team's health, and plays that build your Get $#!τ Done™ muscle.
      </h6>
      <div class="q3-btn">
        <a href="#team-playbook" class="q3-link-btn">learn More
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="horizontal-rule">
    <hr id="horizon-rule-2"/>
  </div>

  <div class="third">
    <div class="third-container">
      <h3 class="s4-header">
        Powering innovation at 125,000+ companies worldwide
      </h3>
      <h6 id="third-description">
        Atlassian provides the tools to help every team unleash their full potential.
      </h6>
    </div>
    <div class="testx">
      <img class="company-logo-img" src={Customer} alt="atlassian-background-frontpage" width=""/>
    </div>
  </div>

  <div class="link-learn-more">
    <a href="#story-3" class="link-learn-more-a">Learn more about our customers
      <i class="fas fa-arrow-right"></i>
    </a>
  </div>

  <div class="fourth">
    <div class="fourth-container">
      <div class="fourth-container-tablet">
        <h3 class="fourth-header">
          Recommended reading
        </h3>
        <h6 id="fourth-description">
          Learn more about industry best practices, keep up with recent product updates, and catch the latest news from Atlassian.
        </h6>
      </div>

    </div>
  </div>

  <div class="four-section-footer">

<div class="container-footer-section">
  <div class="plan-track-support-footer">
    <table class="class-last">
      <tr>
      <tr>
        <td>
          <h3 class="bottom-heading">PRODUCT</h3>
        </td>
        <td>
          <h3 class="bottom-heading">RESOURCES</h3>
        </td>
        <td>
          <h3 class="bottom-heading">EXPAND & LEARN</h3>
        </td>
        <td>
          <h3 class="bottom-heading">ABOUT ATLASSIAN</h3>
        </td>

      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Jira Software</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Technical Support</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Partners</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Company</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Jira Service Desk</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Purchasing & Licensing</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Training & Certification</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Careers</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Jira Ops</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Atlassian Community</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Documentation</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Events</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Confluence</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Knowledge base</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Developer Resources</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Blogs</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Trello</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Marketplace</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Purchasing FAQ</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Investor Relations</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link">Bitbucket</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">My Account</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Enterprise Services</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link">Trust & Security</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#link11" class="bottom-class-link-special">View All Products</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link-special">Create support ticket</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link-special">View all resources</a>
        </td>
        <td>
          <a href="#link11" class="bottom-class-link-special">Contact us</a>
        </td>
      </tr>
      </tr>
    </table>
  </div>


</div>
</div>

<div class="horizontal-rule">
      <hr id="horizon-rule-2"/>
    </div>

    <div class="end-footer">
      <div class="float-left-leftmost">
        <div class="float-left">
          <div class="footer-language">
            <i class="fas fa-globe-americas"></i>
            <select>
              <option value="eng">English</option>
                <option value="kh">ខ្មែរ</option>
              <option value="kr">한국어</option>
            <option value="cn">中文</option>
            </select>
          </div>
        </div>


        <div>
          <div class="float-left">
            <a href="#link11" class="bottom-class-link-footer">Privacy</a>
          </div>

          <div class="float-left">
            <a href="#link11" class="bottom-class-link-footer">Terms</a>
          </div>

          <div class="float-left">
            <a href="#link11" class="bottom-class-link-footer">Modern Slavery</a>
          </div>

          <div class="float-left">
            <a href="#link11" class="bottom-class-link-footer">Copyright © 2019 Atlassian</a>
          </div>

        </div>

      </div>
      <div class="float-left-rightmost">
        <div class="social-link">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>
    </>


  );
};

export default Body;

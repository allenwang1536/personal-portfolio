import React from "react";

export default function SportsCardShop() {
  return (
    <div className="project">
      <div className="project-header" id="maps-header">
        <h1 className="project-name">Sports Cards Shop</h1>
        <p className="project-subheading">Retro Sports Card Shop</p>
        <p className="project-subheading">React/Vercel | Spring 2024</p>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Overview</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Introduction</p>
          <p>
            I was tasked to create a website that incorporated the use of lists and aggregators. I ended up choosing a
            sports card shop because of that is the intersection of my interest in sports and finance.
          </p>
          <p>
            The link to the deployed website can be found{" "}
            <a href="https://sports-cards-shop.vercel.app/" target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Competitive Analysis</h2>
      </div>
      <div className="project-text" id="technical-features">
        <div className="project-section">
          <p className="project-sub-subheading">Comparison</p>
          <p>
            Before beginning, I chose to analyze three competitors (Amazon, Spotify, Zillow) and analyze which of their
            list/aggregation features that I liked and disliked. I aggregated my findings into the below chart.
          </p>
          <div className="project-pics">
            <img src="../../images/sports-shop/comparison.png" className="project-pic-half-large" />
          </div>
          <p>
            Analysis: Amazon, Spotify, and Zillow all offer streamlined 'One Tap' functionalities for adding and
            accessing favorites, yet they each tailor this feature to their platform's context. Amazon enriches the
            shopping experience with immediate feedback via a pop-up and social sharing options, although it lacks
            filtering capabilities within favorites. Spotify facilitates content management through various filtering
            options, essential for music lovers, and also allows for social sharing for users to present their music
            taste to their friends. However, it fails to signal to users immediately where the playlist can be accessed,
            which can be a pain point for new users. Zillow prioritizes efficiency with filtering features critical for
            real estate searches, yet it misses opportunities for user reassurance and collaboration by not providing
            immediate action feedback or social sharing functionalities. Each platform showcases a nuanced approach to
            UI design, focusing on the specific needs and behaviors of their user base while also revealing distinct
            areas for potential enhancement.
          </p>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Personal Implementation</p>
          <p>I will try to implement the following features:</p>
          <ul>
            <li>One Tap Add</li>
            <li>One Tap Access</li>
            <li>List Access Pop-Up On Add</li>
            <li>Filter Favorites</li>
            <li>Organization of Favorites (Descending)</li>
          </ul>
          <p>
            However, the social sharing capability may be a bit outside of the scope of my technical ability. I think
            that would require an external database to maintain a shareable link.
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Theme</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Idea</p>
          <p>
            I decided on creating a sports cards shop that will allow users to browse sports cards and add them to cart.
            The cards each contain the player image, name, sport, and price. Users can filter by sport (basketball,
            soccer, baseball) and sort by player name (A-Z, Z-A) and price (low-high, high-low). There is a reset button
            available for them to clear all filers and sorts. Each card will also have a 'like' button on it that users
            can tap to add the player to cart, where the user's cart count + price total will be displayed.
          </p>
        </div>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Sketch</p>
          <div className="project-pics">
            <img src="../../images/sports-shop/sketch.png" className="project-pic-half-large" />
          </div>
          <p>The above is my sketch on how I wanted the layout of the site to look.</p>
        </div>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Deployment</p>
          <div className="project-pics">
            <img src="../../images/sports-shop/deployment.png" className="project-pic-half-large" />
          </div>
          <p>
            The above is what the final site looks like (coded in React and deployed on Vercel). I chose the background
            color of earth green and complement colors of warm mustard yellow to match the retro vibe of the sports
            cards. I also used Courier New to mimic the retro typography font of the 1950's.
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">A Few Thoughts..</h2>
      </div>
      <div className="project-text" id="conclusion">
        <ul>
          <li>
            <p>When creating a site's feel, you have to do your research on the product (eg. retro)</p>
          </li>
          <li>
            <p>Small changes like capitalization, font family, and borders can greatly enhance the feel of your site</p>
          </li>
          <li>
            <p>
              I had a lot more fun then I thought I would creating this site. I think once you understand what you're
              aiming to build, it's really fulfilling to bring the vision to life.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

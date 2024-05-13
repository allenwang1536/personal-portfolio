import React from "react";

export default function EastSidePocketsPage() {
  return (
    <div className="project">
      <div className="project-header" id="maps-header">
        <h1 className="project-name">East Side Pockets</h1>
        <p className="project-subheading">Redesigning and Creating East Side Pockets Site</p>
        <p className="project-subheading">HTML/CSS/Figma | Spring 2024</p>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Overview</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Introduction</p>
          <p>I was tasked to redesign the East Side Pockets website to appeal more to their target demographic.</p>
          <p>
            The link to the deployed website can be found{" "}
            <a href="https://allenwang.co/east-side-pockets/" target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Initial Observations</h2>
      </div>
      <div className="project-text" id="technical-features">
        <div className="project-section">
          <p className="project-sub-subheading">Website Critique</p>
          <div className="project-pics">
            <img src="../../images/east-side/original.png" className="project-pic-full" />
          </div>
          <p>
            I chose to redesign the East Side Pockets Website because of the immediate contrast and organization errors
            that jumped out to me. After a more thorough analysis of the site, I came up with the following problems +
            fixes:
          </p>
          <ul>
            <li className="text-li">
              Navigation Simplification: Streamline the navigation by reducing the number of headers, which will
              mitigate confusion and help users prioritize where to click. Organize content under broad categories for
              easier access.
            </li>
            <li className="text-li">
              Visual Hierarchy and Typography: Establish a clear visual hierarchy by using headers and body text more
              appropriately. Ensure that headings stand out and guide the visitor through the site, and that body text
              is easily readable for detailed information.
            </li>
            <li className="text-li">
              Contrast and Readability: Improve readability by increasing the contrast between text and background
              images. Add text shadows or placing text on semi-transparent overlays where it overlaps with images to
              ensure the words are legible.
            </li>
            <li className="text-li">
              Content Presentation: Make the welcome message and introduction to East Side Pockets more prominent. It
              should be immediately visible and distinguishable from other elements to effectively communicate the
              site’s purpose.
            </li>
            <li className="text-li">
              Image Layout: Address the clutter of images by spacing them out and strategically placing them to
              complement the text and other site content. Each image should be distinct to avoid visual confusion and to
              allow each menu item to shine.
            </li>
            <li className="text-li">
              Color Palette: Choose a color palette that complements the food and creates a warm, inviting atmosphere.
              The color scheme should be consistent throughout the site, reinforcing the brand and enhancing the
              aesthetic appeal.
            </li>
          </ul>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Waive Analysis</p>
          <div className="project-pics">
            <img src="../../images/east-side/waive.png" className="project-pic-full" />
          </div>
          <p>
            There weren’t many errors from the WAVE analysis besides a singular contrast error and a few alerts. I agree
            with the contrast error; in general, the color scheme of the site should be fixed to match better and have
            better contrast. The alerts seem mainly to concern the alternative text on the images, which is an easily
            fixable coding issue.
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Visual Redesign</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Sketches</p>
          <p>
            I began the visual redesign process by sketching out 9 different frames of potential ideas, giving 1 minute
            to each frame. Then, I created a final sketch that drew components from each idea.
          </p>
          <div className="project-pics">
            <img src="../../images/east-side/sketches.png" className="project-pic-full" />
          </div>
        </div>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Low and High Fidelity Wireframing</p>
          <p>
            Then, I came up with the low-fidelity and high-fidelity designs based off my initial sketches and the issues
            I was trying to solve (view the comments in red). The designs are in order of: desktop, tablet, mobile.
          </p>
          <div className="project-pics">
            <img src="../../images/east-side/lofi.png" className="project-pic-full" />
          </div>
          <div className="project-pics">
            <img src="../../images/east-side/hifi.png" className="project-pic-full" />
          </div>
        </div>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Visual Design Guide</p>
          <p>
            Here's the documentation of the design that displays main colors, typography, and reusable components'
            different states. I created for convenience in case I pass the project off to someone else.
          </p>
          <div className="project-pics">
            <img src="../../images/east-side/visual-design.png" className="project-pic-full" />
          </div>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Coding Website</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Process</p>
          <p>
            I used HTML/CSS + JS in order to create the website page. I started by initially plotting out the overall
            layout of the page, then later polished the more granular details. One notable challenge I ran into was the
            resizing of the screens. To fix this, I had to play around with custom font-weights and image sizes /
            layouts at each different width breakpoint.
          </p>
        </div>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Finished Products</p>
          <p>
            And finally here is what the completed product looks like! You can also check it out at
            <a href="https://allenwang.co/east-side-pockets/" target="_blank">
              https://allenwang.co/east-side-pockets/
            </a>
          </p>
          <div className="project-pics">
            <img src="../../images/east-side/desktop.png" className="project-pic-full" />
          </div>
          <div className="project-pics">
            <img src="../../images/east-side/tablet.png" className="project-pic-full" />
          </div>
          <div className="project-pics">
            <img src="../../images/east-side/mobile.png" className="project-pic-full" />
          </div>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">A Few Thoughts..</h2>
      </div>
      <div className="project-text" id="conclusion">
        <ul>
          <li className="text-li">
            When I initially redesigned this website, I was a little overwhelmed because my mindset was to redesign the
            entire site from scratch. However, I've learned that that's unecessary and that designers will often imitate
            components from their favorite websites.
          </li>
          <li className="text-li">
            <p>
              Even with the above in mind, it was still difficult to figure out the style of the site--specifically its
              layout and color. My personal favorite websites are clean, sleek, tech blog type websites, so that's where
              I initially drew inspiration from. However, I quickly realized that that didn't fit in with the message
              that East Side Pockets was trying to generate (more of a ~home-y and earth-y feel).
            </p>
          </li>
          <li className="text-li">
            <p>
              I actually haven't created a pure HTML/CSS website before this (only React), and it surprised me how
              simple but powerful the basics are. Perhaps I'll make more of these type of lightweight sites.
            </p>
          </li>
          <li className="text-li">
            <p>
              Overall, this project was a great opportunity for me to experience the full cycle of designing, iterating,
              and prototyping a legitimate website. I'm really glad I took on this project and I'm excited for future
              design works!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

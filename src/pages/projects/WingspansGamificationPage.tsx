import React from "react";

export default function WingspansGamificationPage() {
  return (
    <div className="project">
      <div className="project-header" id="maps-header">
        <h1 className="project-name">Wingspans Gamification</h1>
        <p className="project-subheading">Gamifying Wingspans Site</p>
        <p className="project-subheading">React, Firestore, Figma | Fall 2023</p>
        <p className="project-subheading project-github">
          <a href="https://www.wingspans.com/" target="_blank">
            Website
          </a>
        </p>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Overview</h2>
      </div>
      <div className="project-text" id="introduction">
        <div className="project-section">
          <p className="project-sub-subheading">Introduction</p>
          <p>
            Wingspans is an educational platform dedicated to assisting nontraditional learners in advancing their
            careers. Currently serving over 50,000 users across more than 30 schools, we offer a variety of resources
            including career stories, resume builders, and tailored career plans. Recognizing the need to increase user
            engagement, my CEO tasked me with exploring new strategies. After discussion, we decided to implement
            gamification as a method to boost user retention and engagement. This approach would reward users with
            points for interacting with the site, such as reading a story or bookmarking a career. Consequently, I was
            charged with the responsibility of developing this gamification system.
          </p>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Solution</p>
          <p>
            To kickstart this project, I first sought inspiration by examining how leading educational platforms like
            Duolingo and Khan Academy engage and motivate their users. My research into their point systems and user
            interaction models helped me create designs on Figma, which aimed to integrate these gamified elements into
            Wingspans.
          </p>
          <p>Keep reading to see how I implement these features!</p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Technical Features</h2>
      </div>
      <div className="project-text" id="technical-features">
        <div className="project-section">
          <p className="project-sub-subheading">Points Assignment</p>
          <p>
            To start, I first determined the points' value for each user action on our platform. My approach was to
            assign more points for time-intensive tasks, such as creating a career plan, and fewer points for simpler
            actions like bookmarking a story. Additionally, I set up notifications so users would receive immediate
            feedback whenever they earned points.
          </p>
          <p>
            To manage these points, I stored them in a field in our backend Firestore database. Then, every time a user
            completed an action, I would update this field to reflect their new total. Concurrently, I ensured the user
            interface on the front-end was also updated to show the new points.
          </p>
          <div className="project-pics">
            <img src="../../images/gamification/points.png" className="project-pic-medium" />
          </div>
          <p>
            <i>Challenge:</i> I faced a challenge with the point updates. Since these updates relied on the backend,
            there was a noticeable delay, which could potentially harm the user experience. To solve this, I implemented
            a local caching system. Now, when users earn points, their totals are instantly updated on their current
            session through this cached data, while an asynchronous update is made to their profile stored in Firebase.
            This approach ensures that users see their points update immediately, enhancing their engagement without
            waiting for the backend to catch up.
          </p>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Game Levels</p>
          <p>
            I developed a tiered leveling system, which I themed around different bird species to tie in with our
            platform's name, 'Wingspans.' To keep users motivated and engaged, I designed the system so it's easier to
            level up in the initial stages, with the difficulty increasing as users progress to higher levels.
          </p>
          <p>
            To visually inform users of their progression, I implemented a notification feature using a React modal that
            pops up whenever a user levels up. I used a useEffect hook in React, monitoring the pointTotal state. This
            setup ensures that any change in the user's points automatically triggers a check. If the new points total
            qualifies them for a level up, the modal appears immediately, celebrating their achievement.
          </p>
          <div className="project-pics">
            <img src="../../images/gamification/tiers.png" className="project-pic-medium" />
          </div>
          <p>
            <i>Challenge:</i> This project marked my first experience with implementing modals. Unlike regular page
            elements, modals require additional logic to manage their visibility and interactions, such as closing the
            modal when clicking outside of it. This aspect of front-end development proved challenging due to the need
            to manipulate the modal’s state and ensure proper user interactions. After exploring various options, I
            utilized Bootstrap’s modal component, which greatly simplified these tasks by providing built-in
            functionality for these common modal interactions.
          </p>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">Impact</h2>
      </div>
      <div className="project-text" id="technical-features">
        <div className="project-section">
          <p className="project-sub-subheading">Effect</p>
          <p>
            Since launching the gamification features in August, Wingspans has experienced a substantial increase in
            user engagement. Specifically, average site view time escalated from 15 minutes and 22 seconds to nearly 22
            minutes by November—an increase of approximately 70%! This significant growth in engagement time underscores
            the success of the gamification strategy.
          </p>
          <div className="project-pics">
            <img src="../../images/gamification/level-up.png" className="project-pic-large" />
          </div>
        </div>
        <div className="project-section">
          <p className="project-sub-subheading">Future Steps</p>
          <p>
            Looking ahead, we plan to further enhance user motivation by linking level achievements to tangible rewards.
            For example, reaching a basic level could reward users with a free sheet of resume tips, while advancing to
            a medium level might offer a mentorship meeting. Achieving a high level could even secure an interview for
            an internship. These rewards are designed to encourage users to engage more deeply with the platform, taking
            the gamification aspect even more seriously.
          </p>
          <div className="project-pics">
            <img src="../../images/gamification/side-notifications.png" className="project-pic-large" />
          </div>
        </div>
      </div>
      <div className="project-header" id="maps-header">
        <h2 className="project-heading">A Few Thoughts..</h2>
      </div>
      <div className="project-text" id="conclusion">
        <ul>
          <li>
            <p>
              Through this project, I've learned that building technical features cannot be done in isolation.
              Understanding the target audience and the core problem is crucial for developing an effective product.
              Surprisingly, most of my time was spent researching the problem and exploring various existing solutions.
              Once I had a clear understanding of the optimal solution, implementing it was relatively straightforward.
            </p>
          </li>
          <li>
            <p>
              Experiencing real-world challenges like latency issues with Firestore was eye-opening. Until this project,
              I had operated on the assumption that computer networks and systems operated perfectly and
              instantaneously. Facing these issues in a practical setting, rather than in classwork, was both
              challenging and enlightening.
            </p>
          </li>
          <li>
            <p>
              Overall, this project was incredibly rewarding. It was not only fun but also a significant learning
              experience in feature development, teaching me much about the practical aspects of building and deploying
              software. I'm excited to build out more solutions to intriguing problems!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import useScrollToSection from "../../hooks/useScrollToSection";
import Outline from "../../components/Outline";
import { Section } from "../../types";

export default function SpotiDuoPage({ withOutline } : { withOutline : boolean}) {
  const sections: Section[] = [
    { id: "universal-overview", title: "Overview", level: 2 },
    { id: "technical-features", title: "Technical Features", level: 2 },
    { id: "conclusion", title: "A Few Thoughts..", level: 2 },
  ];

  const scrollToSection = useScrollToSection();

  return (
    <div className={withOutline ? "with-outline" : ""}>
      <Outline outline={sections} handleClick={scrollToSection} />
      <div className="project">
        <div className="project-header" id="maps-header">
          <h1 className="project-name">SpotiDuo</h1>
          <p className="project-subheading">Music-based Language Learning Application</p>
          <p className="project-subheading">React/JS, Java | Fall 2023</p>
          <p className="project-subheading project-github">
            <a href="https://github.com/allenwang1536/spotiduo" target="_blank" rel="noreferrer">
              <u>Github</u>
            </a>
            ,{" "}
            <a href="https://youtu.be/qPu-ch3UULo?si=SnW86_6t7oGq32pT" target="_blank" rel="noreferrer">
              <u>Video</u>
            </a>
          </p>
        </div>
        <div className="project-header" id="universal-overview">
          <h2 className="project-heading" id="">Overview</h2>
        </div>
        <div className="project-text" id="introduction">
          <div className="project-section">
            <p className="project-sub-subheading">Introduction</p>
            <p>
              My mom is a Swiftie—not just because of the catchy lyrics or smooth melodies, but because she's learning
              English phrases and slang through Taylor Swift's songs. Having immigrated from China with limited English
              proficiency, she continues to improve her skills even today.{" "}
            </p>
            <p>
              This is a challenge faced by millions of immigrants and non-native English speakers daily. Even with a
              basic understanding of English, they struggle with colloquial phrases and slang found in everyday
              conversations and songs.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="solution">
              Solution
            </p>
            <p>
              Inspired by my mom's Swiftie tendencies, my team and I created SpotiDuo—a research-backed (
              <a
                href="https://www.researchgate.net/publication/334193554_The_Effects_of_Music_in_the_Foreign_Language_Learning_Classroom"
                target="_blank"
                rel="noreferrer"
              >
                Bennet
              </a>
              ,{" "}
              <a
                href="https://www.google.com/url?q=https://digitalcommons.murraystate.edu/cgi/viewcontent.cgi?article%3D1061%26context%3Dhonorstheses&sa=D&source=docs&ust=1715320150428084&usg=AOvVaw3ySnGSk8tZHDI8Czo-EqUy"
                target="_blank"
                rel="noreferrer"
              >
                Grimm
              </a>
              ) music-based language learning platform that makes learning English more engaging. It features
              karaoke-style lyric input alongside real-time translations for over 150 native dialects, a tiered
              difficulty system, and personalized song recommendations.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading" id="video-demonstration">
              Video Demonstration
            </p>
            <div className="project-pics">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/qPu-ch3UULo?si=IZgK3fAjrO3hS8P8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              />
            </div>
            <p>Check out this quick 1-minute video that showcases the solution.</p>
            <p>
              My responsibilities for this project included the Spotify OAuth, lyric translation integration, game
              logic, and recommendations. Keep scrolling for an in-depth look at the technical features implemented!
            </p>
          </div>
        </div>
        <div className="project-header" id="technical-features">
          <h2 className="project-heading">
            Technical Features
          </h2>
        </div>
        <div className="project-text" id="technical-features">
          <div className="project-section">
            <p className="project-sub-subheading">Spotify OAuth</p>
            <p>Since SpotiDuo centers around the Spotify API, users log in and sync their Spotify account.</p>
            <p>
              I chose Spotify's PKCE Flow for authorization because it eliminates the need for storing sensitive client
              secrets, reducing exposure risk. The process begins with SpotiDuo creating a secure code challenge from a
              randomly generated code verifier. The app then directs the user to Spotify's authorization page, where
              they log in and grant permissions. Once authorized, SpotiDuo exchanges the authorization code and other
              credentials for an access token. This approach requires a code verifier to prevent unauthorized access,
              and by generating a new verifier and challenge for each attempt, it ensures strong security practices.
            </p>
            <div className="project-pics">
              <img src="../../images/spotiduo/oauth.png" className="project-pic-large" alt="Spotify OAuth"/>
            </div>
            <p>
              <i>Challenge: </i> Initially, users had to log in repeatedly due to token expiration. To fix this, I
              implemented cookies (expiring hourly) for access tokens, ensuring users didn't have to constantly
              reauthenticate.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Real Time Language Translations and Lyrics Retrieval</p>
            <p>
              After logging in, the user selects a song in the language they're learning, their native language (from
              150+ options), and the desired difficulty level. SpotiDuo then automatically retrieves lyrics from a
              custom backend that my teammates worked on.
            </p>
            <p>
              In the backend, we call the Musixmatch API for song lyrics in LRC format, and then Microsoft Azure AI
              Translator provides a translated version in the user's native language. After cleaning the Musixmatch
              response (removing empty lines) and combining it with the Azure translation, the backend returns a JSON
              object containing arrays with time stamps, foreign language lyrics, and native translations, which I
              integrate with the front-end later on in game logic.
            </p>
            <div className="project-pics">
              <img src="../../images/spotiduo/settings.png" className="project-pic-half-large" alt="SpotiDuo Settings"/>
              <img src="../../images/spotiduo/lyrics-response.png" className="project-pic-half-large" alt="Lyric Response Object"/>
            </div>
            <p>
              <i>Challenge: </i>The Musixmatch API doesn't provide lyrics for every song on Spotify, so after
              discussion, we decided to cross-check the available songs before displaying them to the user.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Game Logic</p>
            <p>
              After selecting the game settings, users proceed to the gameplay, where they listen to the song and fill
              in lyric blanks based on what they hear, aided by translation hints in their native language. At the end
              of the game, they receive a score and feedback on their performance.
            </p>
            <p>
              The song plays via the Spotify API, with lyrics synced using pre-extracted timestamps. Initially, I used a
              scoring system that required users to get every character right to earn points, but this proved too strict
              for learners. Instead, I implemented the Levenshtein algorithm, which measures the distance between two
              sequences, to award partial credit for near-correct answers.
            </p>
            <div className="project-pics">
              <img src="../../images/spotiduo/game.png" className="project-pic-large" />
            </div>
            <p>
              <i>Challenge: </i> Aligning music with external lyrics was tricky because Spotify doesn't offer continuous
              timestamp tracking. I solved this by polling Spotify's API every 1,000 milliseconds to obtain accurate
              timestamps.
            </p>
          </div>
          <div className="project-section">
            <p className="project-sub-subheading">Personalized Recommendations</p>
            <p>
              After completing the game, users receive personalized song recommendations based on their initial
              selection. SpotiDuo analyzes over 20 attributes, including energy, mood, and danceability, to find five
              songs that closely match those traits using the Spotify API.
            </p>
            <div className="project-pics">
              <img src="../../images/spotiduo/recommendations.png" className="project-pic-half-large" alt="SpotiDuo Personalized Recommendations"/>
              <img src="../../images/spotiduo/recommendation-features.png" className="project-pic-half-large" alt="Recommendation Features"/>
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
                This was my first time building a full-stack application from scratch, and I had a lot of creative
                freedom—it was exciting! I'm eager to tackle more full-stack projects in the future.
              </p>
            </li>
            <li>
              <p>
                Building the front end in React has really shown my growth. Just a year ago, it took me days to create a
                simple table, but now I can put together an entire application in that time.
              </p>
            </li>
            <li>
              <p>
                With that being said, I'm still constantly learning new things with every project. Working with
                Spotify’s API for visual displays was fascinating, and though there were some display challenges,
                tackling them helped me grow as a developer.
              </p>
            </li>
            <li>
              <p>
                Building SpotiDuo reinforced the significance of user-centric design. Ensuring intuitive gameplay,
                accurate translations, and seamless Spotify integration showed me how crucial it is to focus on creating
                a smooth, enjoyable user experience.
              </p>
            </li>
            <li>
              <p>
                Collaborating with my team was a valuable experience. By discussing features like translations and
                personalized recommendations, I learned the importance of clear communication and planning to achieve
                the best results. Four heads are certainly better than one!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

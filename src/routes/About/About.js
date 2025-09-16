// Deps
import React from "react";
//import Intro from "../Intro";
import profilePic from "../../assets/img/dan-root_profile.jpg";

// Style
import "./About.scss";

const About = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:order-last">
          <img
            src={profilePic}
            className="profile-pic rounded-xl"
            alt="Picture of Dan Root"
          />
        </div>
        <div className="col-span-2">
          <h1>About me</h1>
          {/* <h2>Senior Product Designer</h2> */}
          <p className="first">
            I am a Senior Product Designer who specializes in creating systems,
            tools, and workflows that make complex problems clear and
            manageable. My work has spanned large organizations including
            Walmart and Uber, where I’ve delivered enterprise platforms, design
            systems, and customer experiences that improved workflows and drove
            measurable outcomes.
          </p>
          <h2>Bridging Design and Engineering</h2>
          <p>
            My background in Visual Design and Front-End Development shapes how
            I design. I understand how decisions translate into code, which
            allows me to collaborate effectively with engineering teams,
            anticipate constraints, consider accessibility, and design solutions
            that are both elegant and practical. This hybrid perspective helps
            me move ideas from concept to implementation with clarity.
          </p>
          <h2>How I Work</h2>
          <p>
            According to my Business Chemistry profile, I am primarily an
            Integrator with a strong Guardian influence. This means I value
            collaboration, consensus, and empathy, while also appreciating
            structure, clarity, and attention to detail. In practice, I connect
            people around shared goals, translate ambiguity into actionable
            solutions, and balance imagination with stability.{" "}
          </p>

          <h2>Outside of Work</h2>
          <p>
            I am a lifelong learner, artist, musician, and father of three. I
            bring curiosity, creativity, and discipline into all parts of my
            life, always looking for ways to make experiences more meaningful
            and connected.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 mb-8 md:grid-cols-3">
        <div className="col-span-1 md:col-span-3">
          <h3>Colleague Feedback</h3>
        </div>
        <div className="col-span-1 quote">
          <blockquote>
            <p>
              I had the pleasure of working with Dan, and I can confidently say
              he is an exceptional product designer. His attention to detail is
              unmatched, and he brings a meticulous approach to every project.
              Whether leading a team or working independently, Dan consistently
              drives projects to success, balancing user needs with business
              goals seamlessly. He has a strong ability to collaborate with
              stakeholders, ensuring alignment and delivering outstanding
              outcomes. Any team would be lucky to have him—he&apos;s a true
              asset!
            </p>
            <footer>
              <cite>
                <p>Matthew Green</p>
                <p className="title">Sr. Design Manager - Walmart</p>
              </cite>
            </footer>
          </blockquote>
        </div>
        <div className="col-span-1 quote">
          <blockquote>
            <p>
              Working with Dan on the omni-experience initiatives was an
              absolute pleasure. As a UX designer, he brings a combination of
              strategic thinking, user empathy, and hands-on design excellence
              that made a measurable impact on our work. I really appreciated
              how Dan&apos;s designs kept the nuances of the complicated user
              flows beyond our space in mind. This ensured we could correctly
              plan for how our product interacted with other features in the
              e-commerce flow. Dan is an exceptional partner in every sense —
              thoughtful, collaborative, and deeply invested in creating user
              experiences that are not only intuitive but also aligned with
              business goals. He has a talent for translating complex workflows
              into elegant, user-friendly solutions. Beyond his design skills,
              Dan is just a great person to work with — calm under pressure,
              generous with feedback, and always focused on moving the team
              forward. Any team would be lucky to have him!
            </p>

            <footer>
              <cite>
                <p>Smrithi Kumar</p>
                <p className="title">Sr. Product Manager - Walmart</p>
              </cite>
            </footer>
          </blockquote>
        </div>
        <div className="col-span-1 quote">
          <blockquote>
            <p>Dan&apos;s superpowers:</p>
            <ul>
              <li>Super organized </li>
              <li>Thought-master</li>
              <li>Always calm and cheerful </li>
              <li>Empathetic </li>
            </ul>
            <p>
              I&apos;ve really enjoyed being teamed up with Dan on projects, I
              know we can work great together and I can rely on him to catch all
              edge cases even If I miss some. I&apos;ve learned from him how to
              make components for the Figma and make life a lot easier with the
              amount of iterations we go through each day. His calm and down to
              earth nature make people feel comfortable and easily approachable.
            </p>
            <footer>
              <cite>
                <p>Johann Thomas</p>
                <p className="title">Lead Product Designer - Walmart</p>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

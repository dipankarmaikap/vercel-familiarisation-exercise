import React from "react";
import Accordion from "../components/Accordion";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Vercel familiarisation exercise</h1>
      <Accordion title="5 most favourite and 5 least favourite tasks from the list.">
        <div>
          <p style={{ fontWeight: "bold" }}>5 most favourite tasks</p>
          <ul>
            <li>
              Write and maintain support articles and docs pages (I love writing
              tech articles, I already do this on my personal site.)
            </li>
            <li>
              Help train and onboard new support teammates (I like to onboarding
              new teammate, It let me know a lot about them and its a good
              bonding chance.)
            </li>
            <li>
              Work with the product team to develop a new feature based on
              feedback from customers. (As a developer I love launching new
              features, I would love to help the product team to develop new
              features.)
            </li>
            <li>
              Respond to queries on Twitter, Reddit, Hacker News and other 3rd
              party sites. (This is a good way to get to know the community, and
              I already kinda do this in stack overflow)
            </li>
            <li>
              Work with people to figure out if Vercel is suitable for their use
              case (I already helped two people to shitch to Vercel, and I love
              the developer experience of Vercel.)
            </li>
          </ul>
          <p style={{ fontWeight: "bold" }}>5 least favourite tasks</p>
          <p>
            I have no problem with doing the below tasks but if I get a chance
            to pick I would go with the top 5.
          </p>
          <ul>
            <li>Respond to 50+ support requests via email every day</li>
            <li>
              Dig through logs to troubleshoot a customer's broken project
            </li>
            <li>
              Work with 3rd party partners to track down a tricky situation for
              a joint customer
            </li>
            <li>
              Engage multiple users at once in a public discussion, to answer
              their questions and troubleshoot problems
            </li>
          </ul>
        </div>
      </Accordion>
      <Accordion title="What do you want to learn, or do more of, at work?">
        <div>
          <p>
            I'm learning typescript now. I like to write more tech blogs thats
            going to help a lot of new developers like Lee Robinson at Vercel
            does.
          </p>
        </div>
      </Accordion>
      <Accordion
        title="Which technical article, guide or lightning talk left the biggest positive impression
on you? Why? Ideally, this article would not be associated with Vercel or web
development, by the way! Please provide links."
      >
        <div>
          <p>
            Rethinking reactivity is one of the best talk and I think everyone
            should watch this, This shows how a well thought framework can solve
            all the requirements of a project with so much less Javascript.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AdNJ3fydeao"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Accordion>
      <Accordion
        title={`Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any
path – but be sure to tell us which!) to https://vercel.com`}
      >
        <div>
          <p>
            If you visit `/hello-vercel` it will take you to Vercel homepage.
            And its temporary you can check the status code now it will show
            `307`.
          </p>
        </div>
      </Accordion>
      <Accordion
        title={`A customer writes in to the Helpdesk asking "How do I do a redirect from
/hello-vercel to https://vercel.com?" In a couple of paragraphs, how do you
respond?`}
      >
        <div>
          <p>
            Hello there, Please check out this link{" "}
            <a
              href="https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Redirects
            </a>{" "}
            You can set your redirects temporaryly or permanently. If you still
            face any issues, Let me know.
          </p>
        </div>
      </Accordion>
      <Accordion
        title={`A customer writes in to the Helpdesk stating "I have a custom domain which I
purchased at GoDaddy and I want to use it on my project". In a couple of
paragraphs, how do you respond?`}
      >
        <div>
          <p>
            Here is a{" "}
            <a
              href="https://vercel.com/docs/concepts/projects/custom-domains#adding-a-domain"
              target="_blank"
              rel="noopener noreferrer"
            >
              link to the documentatio
            </a>{" "}
            on how to set up a custom domain for your vercel project. And here
            is a link to{" "}
            <a
              href="https://in.godaddy.com/help/change-nameservers-for-my-domains-664"
              target="_blank"
              rel="noopener noreferrer"
            >
              godaddy documentation{" "}
            </a>{" "}
            on how to Change nameservers for your domain. If you still face any
            issue let me know.
          </p>
        </div>
      </Accordion>
      <Accordion
        title={`What do you think is one of the most common problems which customers ask
Vercel for help with? How would you help customers to overcome common
problems, short-term and long-term?`}
      >
        <div>
          <p>
            I think one of common question would be setting up a custom domain
            and poing mx record to some other service like gsuite. In short term
            I would point to all the docs for this but if this a very common
            problem I would also do few videos and put them in youtube.
          </p>
        </div>
      </Accordion>
      <Accordion
        title={`How could we improve or alter this familiarisation exercise?`}
      >
        <div>
          <p>
            This looks good to me. Maybe adding few more real world question
            vercel support team recives.
          </p>
        </div>
      </Accordion>
      <p>
        You can find the{" "}
        <a
          href="https://github.com/dipankarmaikap/vercel-familiarisation-exercise"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project source code
        </a>{" "}
        here.
      </p>
    </div>
  );
}

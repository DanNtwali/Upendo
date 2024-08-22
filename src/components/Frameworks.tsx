import React from 'react';
import Title from './Title';
import FrameCard from './FrameCard';

function Frameworks() {
  const frameworks = [
    {
      index: "1",
      title: "Technology",
      description: "Our Customer Service-Focused Technology offers Customer Relationship Management Software, Project Management Software, Service Desk Software, and AI Workflows that enhance team productivity. We enable teams to deliver better customer experiences, manage leads and sales pipelines, maximize productivity, efficiency, and scale.",
      imagesrc: "https://upendotech.com/wp-content/uploads/2024/03/Technology.png"
    },
    {
      index: "2",
      title: "Techniques",
      description: "Our 12-week Accelerator program has combined two methodologies which seek to unlock start value and sustainability through effective project management, technology integration, organisational structure, processes integration, funding and investment worthy preparedness through refining the value position, organization, economics & milestones. Through data centralisation, customer analytics and automation, start-ups and SME’s are tech-and-process-enabled for sustainability.",
      imagesrc: "https://upendotech.com/wp-content/uploads/2024/03/Techniques.png"
    },{
      index: "3",
      title: "Transactions",
      description: "With over 50 years of combined experience building, funding, and scaling startups across Africa, our team comprises of African business leaders, legal experts, investment experts and engineers. We rely on our seasoned expertise to: Structure investment deals designed to catalyze the next phase of expansion for businesses. Handle investment negotiations to secure optimal terms for businesses. Meticulously draft transaction agreements and cap table documentation. Ensure the seamless closure of every funding deal to enable venture growth.",
      imagesrc: "https://upendotech.com/wp-content/uploads/2024/03/Transactions.png"
    },
    {
      index: "4",
      title: "Tools",
      description: "Through leveraging on our growth-focused technology, business owners and teams are equipped with data driven insights to enable growth and strategic decision making. Additionally, our Matchmaking capabilities are based on data-driven insights gathered from use of our various technologies, seek to connect tech startups with a broader network of funders and mentors. This ensures strategic alliances by enabling startups to meet and pitch to a curated network of investors and seasoned mentors.",
      imagesrc: "https://upendotech.com/wp-content/uploads/2024/03/Tools.png"
    }
  ];

  return (
    <section className="flex  flex-col text-left px-32 bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <Title title="Upendo Framework" />
      <div>
      
      {frameworks.map((framework, index) => (
        <FrameCard
        key={index}
        title={framework.title}
        imagesrc={framework.imagesrc}
        description={framework.description}
        />
      ))}
      </div>
    </section>
  );
}

export default Frameworks;

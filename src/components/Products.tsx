import React from 'react';
import Title from './Title';
import FrameCard from './FrameCard';
import Product from './Product';

function Products() {
  const Products = [
    {
      index: "1",
      title: "AI Workflow",
      subtitle: "Simple, automatically generated workflows that scale.",
      description: "At the core of our offering is the revolutionary AI Workflow Automation platform. Imagine providing a “private banker” experience to every customer, regardless of scale. With AI Workflow Automation, you define the job description and actions, enable communication channels like WhatsApp, Email, and SMS, and our AI assistants are ready to serve. This powerful platform allows fast iteration, real-time collaboration, and integration with over 200 systems. See what the AI sees on the collaborative canvas as it leverages large language models, task integrations, fields, notifications and context flows to deliver seamless experiences.",
      imagesrc: "https://upendotech.com/wp-content/uploads/2024/01/workflow-bg-1024x576.png",
      icons: [],
      link: "https://upendotech.com/products/ai-workflow/"
    },
    {
        index: "2",
        title: "Project Management",
        subtitle: "Keep your team organised, on track and informed.",
        description: "Our Project Management platform has you covered with all the tools you need to manage projects of any size and type. It lets you keep all your projects organized in one place, so that all the team role players can stay on top of every detail. Our powerful workspace feature gives you the ability to collaborate with your team on any project, making it easy to get everyone on the same page. Timesheets for staff to capture time, rate cards and billing to ensure you bill your clients accurately and efficiently. Manage time with To Do's, Busy and Done tasks and easily analyse who is spending time doing what. The extensive platform also features and intuitive Kanban Board, Wiki, Document Libraries, Discussion Boards and detailed Analytics.",
        imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/pm-workspace-1024x559.png",
        icons: [],
        link: "https://upendotech.com/products/project-management/"
      },
      {
        index: "3",
        title: "Service Desk",
        subtitle: "A service desk platform that blends ease of use with power so that your team can keep on top of all queries.",
        description: "Our comprehensive service desk helps you manage customer support tickets and incidents quickly and efficiently, so that you continue to provide the best customer service. Track your tickets with full email integration on inbound and outbound messages, manage your response and resolution SLA’s, categorise your tickets and integrate your tasks directly into the Project Management module.",
        imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/sd-dashboard-1024x559.png",
        icons: [],
        link: "https://upendotech.com/products/service-desk/"
      },
      {
        index: "4",
        title: "CRM",
        subtitle: "Tracks sales, close more deals, win more business.",
        description: "With its easy-to-use interface, Upendodesk makes it easy to keep track of and organise leads and deals, capture new client information and manage your sales pipeline. You’ll always know where your deals stand and can easily follow up with clients. With custom pipelines for your sales staff or branches, you can organise and keep track of critical information and log all your activity to ensure easy access to all relevant data.",
        imagesrc: "https://upendotech.com/wp-content/uploads/2023/11/crm-leads-1024x559.png",
        icons: [],
        link: "https://upendotech.com/products/crm/"
      },
      
  ];

  return (
    <section className="flex  flex-col py-16 h-full bg-fixed bg-cover bg-[url('../assets/images/signup.png')]" >
      <div className="px-32">
        <Title title="Upendo Products" className="text-left "/>
      </div>
      <div>
      <h1 className="mb-4 text-4xl px-32 font-extrabold tracking-tight leading-none text-orange-400 md:text-4xl lg:text-4xl text-center py-4">Innovative solutions to help your team get things done.</h1>
        <p className="mb-8 text-lg px-32 font-normal text-white lg:text-xl sm:px-16 xl:px-48  text-center">UpendoTech offers you a range of software products and platforms aimed at making sure your team can get things done as efficiently as possible from anywhere in the world.</p>
        
      {Products.map((product, index) => (
        <Product
        key={index}
        title={product.title}
        subtitle={product.subtitle}
        link={product.link}
        icons={product.icons}
        imagesrc={product.imagesrc}
        description={product.description}
        />
      ))}
      </div>
    </section>
  );
}

export default Products;

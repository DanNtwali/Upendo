import React from 'react'
import Pricing from './Pricing'

function Pricings() {
    const pricings = [
        {
            index: '1',
            title: 'Project Management',
            price: 25,
            currency: '$',
            frequency: '/user/month',
            benefits: ['Time Sheets','Clients', 'Task Management','Projects (Incorporating Sprints and Phases)','Recurring Activities','Kanban Board','Rate Cards','Billing Reports','Project Wiki\'s','Team Workspace', 'Team Document Library','Dedicated Support'],
            link: '#'
        },
        {
            index: '4',
            title: 'Enterprise Package',
            price: 45,
            currency: '$',
            frequency: '/user/month',
            benefits: ['Guest Access','Team Dashboards', 'Advanced security features','Advanced repoting and dashboards for high level analytics','Customised onboarding and Training','Dedicated Support with premium response times','SAML Single Sign On (SSO)','Power BI Access'],
            link: '#'
        },
        {
            index: '2',
            title: 'Customer Management',
            price: 25,
            currency: '$',
            frequency: '/user/month',
            benefits: ['Customer Relationship Management','Clients', 'Deals','Leads','Sales Tracking','Dedicated Support'],
            link: '#'
        },
        {
            index: '3',
            title: 'Service Desk Package',
            price: 35,
            currency: '$',
            frequency: '/user/month',
            benefits: ['Service Desk','SLA Management', 'Resolution Management','Inbound Mailboxes','Dedicated Support','Segregated Teams'],
            link: '#'
        },
    ]
  return (
    <section className="flex  flex-col py-16 bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      
      <div>
      <h1 className="mb-4 text-4xl px-32 font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-4xl text-center py-4">Pricing plans <br/> for teams of all sizes</h1>
        <p className="mb-8 text-lg px-32 font-normal text-white lg:text-xl sm:px-16 xl:px-48  text-center">UpendoTech offers you a range of software products and platforms aimed at making sure your team can get things done as efficiently as possible from anywhere in the world.</p>
        
        {/* <Pricing /> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-32">
        {pricings.map((pricing, index) =>(
            <Pricing 
                key={index}
                title={pricing.title}
                price={pricing.price}
                currency={pricing.currency}
                frequency={pricing.frequency}
                benefits={pricing.benefits}
                link={pricing.link}
            />
        ))}
      </div>

      {/* {Products.map((product, index) => (
        <Product
        key={index}
        title={product.title}
        subtitle={product.subtitle}
        link={product.link}
        icons={product.icons}
        imagesrc={product.imagesrc}
        description={product.description}
        />
      ))} */}
      </div>
    </section>
  )
}

export default Pricings
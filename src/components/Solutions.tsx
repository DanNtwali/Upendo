import React from 'react'
import Solution from './Solution'

function Solutions() {
    const solutions = [
        {
            index: '1',
            title: 'Freelancer',
            description: 'You’re a freelancer and your time is limited. Being organised helps you to stay ahead of the game.',
            description2: 'UpendoDesk helps you maintain control of your small business and optimise your productivity and efficiency with a birds-eye view of your project workflows. You can easily track incoming leads so that you can close more deals, manage your time spent on projects and in meetings, and come the end of the month, billing is a breeze with UpendoDesk’s built-in billing features. It’s the tool every freelancer can’t do without.',
            imagesrc: 'https://upendotech.com/wp-content/uploads/2023/11/freelancer.png',
        },
        {
            index: '2',
            title: 'Small to Medium Team',
            description: 'You’re managing a small to medium team of dedicated staff, but it’s hard to keep track of...',
            description2: 'what everyone is working on, especially now that remote work has become the norm. You’re spending most of your time managing your business and staff, and not enough time doing the things you really enjoy. UpendoDesk helps small to medium teams automate their projects and team management processes, so they can spend more time in their zone of genius, doing the work that count.',
            imagesrc: 'https://upendotech.com/wp-content/uploads/2023/11/small-team.png',
        },
        {
            index: '3',
            title: 'Large Enterprise',
            description: 'You’re a large enterprise, managing many different kinds of business operations at once.',
            description2: 'you need is one single dashboard where you can get a birds-eye-view of your company’s projects, so that you can monitor their progress and optimise efficiency and profit. UpendoDesk helps you to manage your projects, large teams, billing clients, complex sales processes, and an integrated help desk, all in one intuitive system. We can customise our software to meet the specific needs of your large organisation.',
            imagesrc: 'https://upendotech.com/wp-content/uploads/2023/11/large-team.png',
        }
    ]
  return (
    <section className="flex  flex-col py-16 h-full bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <div>
      <h1 className="mb-4 text-4xl px-32 font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-4xl text-center py-4">No matter your business needs, we've got <br/> a solution for you...</h1>
        
      <div className="flex flex-row px-32 gap-4">
        {solutions.map((solution, index) => (
            <Solution 
                key={index}
                title={solution.title}
                description={solution.description}
                description2={solution.description2}
                imagesrc={solution.imagesrc}
            />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Solutions
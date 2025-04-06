// app/page.tsx
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">John Dilig</h1>
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <p className="text-lg">Los Angeles, CA</p>
            <p className="text-lg">909-997-1393</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg">rjdofficemail@gmail.com</p>
          </div>
        </div>
        <p className="text-xl text-gray-700">
          Front-end developer with 16+ years of experience building responsive, high-traffic web
          applications for technology and media companies. Skilled in React, TypeScript, and CMS
          integration, with a track record of boosting user engagement & retention. Adept at mentoring
          teams and driving continuous improvement, delivering impactful user-centric solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FRONT-END</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> JavaScript
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> React.js
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> HTML5
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> CSS3
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Responsive Web Design
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> ARIA/Web Accessibility
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Redux
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">TESTING & METHODOLOGIES</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> Unit Testing (Jest, Enzyme)
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> A/B Testing
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Agile/Scrum
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">CMS</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> WordPress
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Adobe CQ 5.6
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">OTHER</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span> UX/UI Design
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Cross-Platform Development
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Git/GitHub
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Web Analytics (Segment.js)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Work History</h2>
        
        {/* Current Role */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600 italic">January 2023 - Current</p>
          </div>
          <p className="text-lg font-medium mb-4">Stealth Startup, United States</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Leading development for a web-based platform designed to simplify event and game management.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Working closely with users to refine features and improve the overall experience.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Collaborating with a UI/UX designer to ensure a seamless, intuitive interface.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Developing the front end with React, optimizing for performance and scalability.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Taking charge of feature planning and implementation, ensuring the product meets real-world needs.</span>
            </li>
          </ul>
        </div>
        
        {/* TBN Role */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">React/CMS Developer</h3>
            <p className="text-gray-600 italic">July 2023 - August 2024</p>
          </div>
          <p className="text-lg font-medium mb-2">Trinity Broadcasting Network, Fort Worth, TX</p>
          <p className="text-gray-600 mb-4">Projects: TBNPlus.com, MeritPlus.com, TBN.org</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Enhanced TBN's web presence with CMS integration, boosting user engagement by 15%.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Implemented subscription flow for TBNPlus.com & MeritPlus.com, adding new revenue avenues for TBN.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Led UX research and competitive analysis, refining VoD platform strategies with wireframes, market comparables, and prototypes.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Integrated cross-platform features, enhancing accessibility.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Mentored team on UI development, fostering best practices and innovation.</span>
            </li>
          </ul>
        </div>
        
        {/* AWS Role */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">Front End Developer</h3>
            <p className="text-gray-600 italic">July 2022 - May 2023</p>
          </div>
          <p className="text-lg font-medium mb-2">Amazon Web Services (AWS), Seattle, WA</p>
          <p className="text-gray-600 mb-4">Projects: AWS QuickSight, undisclosed future projects</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Enhanced AWS QuickSight UI with TypeScript and React.js, improving user engagement.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Resolved UI bugs and optimized performance by 8-13%, contributing to seamless user experiences.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Developed prototypes for new features, supporting innovative product development.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span>Wrote unit tests during development, ensuring reliable and robust application functionality.</span>
            </li>
          </ul>
        </div>
        
        {/* Previous roles collapsed */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">Previous Roles</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span><strong>Full Stack Developer</strong>, Diamond Web Services (2020-2022) - Developed FOX.com's video player</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span><strong>Front-End Developer</strong>, ADP (2019-2020) - React.js and TypeScript development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span><strong>Front-End Developer</strong>, FOX Digital Media (2012-2019) - Enhanced FOXSports.com UX</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5">•</span> 
              <span><strong>Network/UI Engineer</strong>, Medversant Technologies (2008-2012) - Front-end development for healthcare applications</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Associate of Science in Information Technology - Computer Network Systems</h3>
          <p className="text-lg mb-1">ITT Technical Institute, San Dimas, CA</p>
          <p className="text-gray-600">December 2008</p>
        </div>
      </section>
      
      {/* Link to Exercise Categories */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Code Exercise Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/javascript" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-600">Explore JavaScript exercises and improve your skills.</p>
          </a>
          <a href="/react" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">React.js</h3>
            <p className="text-gray-600">Explore React.js exercises and improve your skills.</p>
          </a>
          <a href="/redux" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Redux</h3>
            <p className="text-gray-600">Explore Redux exercises and improve your skills.</p>
          </a>
          <a href="/typescript" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">TypeScript</h3>
            <p className="text-gray-600">Explore TypeScript exercises and improve your skills.</p>
          </a>
        </div>
      </section>
    </div>
  );
}

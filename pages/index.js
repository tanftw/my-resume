import Link from 'next/link';
import Head from 'next/head';
import '../styles/index.css'
const Index = () => (
  <div>
    <Head>
      <title>Tan Nguyen's Resume</title>
    </Head>
    <div className="container mx-auto bg-white md:my-8 shadow-lg">
      <header className="mb-8 p-8 sm:flex-row md:flex">
        <div className="sm:flex-">
          <img className="rounded-lg" width="200" src="https://avatars1.githubusercontent.com/u/9004445?s=460&amp;v=4" alt="Profile Picture" />
        </div>
        <div className="flex-auto md:ml-6">
          <h1 className="text-4xl">Tan Nguyen</h1>
          <p className="text-gray-800 mt-4">Date of birth: September 01, 1991</p>
          <p className="text-gray-700 mt-4">
            Effective developer with 9 years of experience in software development. Passionate about making fast, beautiful and reactive apps.
        </p>
        </div>
      </header>
      <nav className="mb-8">
        <ul className="block w-full bg-gray-100 px-8 flex-row md:flex">
          <li className="md:inline-block py-3 flex-1"><i className="far fa-envelope"></i> <a href="mailto:yanodaio@gmail.com">yanodaio@gmail.com</a></li>
          <li className="md:inline-block py-3 flex-1"><i className="fas fa-mobile-alt"></i> +84 93 229 2225</li>
          <li className="md:inline-block py-3 flex-1"><i className="fab fa-skype"></i> tannguyen0901</li>
          <li className="md:inline-block py-3 flex-1"><i className="fas fa-location-arrow"></i> Ho Chi Minh City, Vietnam</li>
        </ul>
      </nav>
      <main className="flex-row md:flex p-8">
        <div className="md:w-6/12">
          <h2 className="font-bold text-2xl">Work Experience</h2>
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">11/2010</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">03/2014</div>
            </div>
            <div className="md:w-9/12">
              <h3 className="text-2xl mb-2">Software Developer @ FPT University</h3>
              <h4 className="font-semibold my-4">Responsibilities</h4>
              <ul className="">
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Craft and maintain websites, landing pages for the university and their branches.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i><span> Build CRM, Student Information System, Learning Management System, and some other internal systems. Most of them built with PHP, some built in 2013 started with Laravel.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i><span> Translate technology books to Vietnamese.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i><span> Cooperate with other departments, like Marketing, Admissions to improve the company stats.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i><span> Spend some weekends to organize tech talks, and workshops with students, for example: Bootstrap, Responsive Design, jQuery, AngularJS.</span></li>
              </ul>
              <h4 className="my-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Increase website's conversion rate by 43%, average monthly visitors increase 500%. Total student registered steady growth over the years.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>The apps that our team built served 50,000+ students and staff.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Reduced the workload and improve the data accurate by integrating apps together, for example, when people registered via website's form, their information passed immediately to the CRM, and when student info created, the system call other app API to create account on other apps, including Google Suite.</span></li>
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">04/2014</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">09/2014</div>
            </div>
            <div className="w-9/12">
              <h3 className="text-2xl mb-2">Assistant to Managing Director @ Institution of American Education Vietnam</h3>
              <h4 className="font-semibold my-4">Responsibilities</h4>
              <ul>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Manage the team of 4 people to build software, websites, and IT infrastructure. Most of them already existed before I join but written in .NET which its license cost too much per year, some were really hard to maintain because the company bought the software without source code.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Collaboration to help other departments using the system effectively.</span></li>
              </ul>
              <h4 className="my-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span> Redesign 7 websites in WordPress, help them load 70% faster and more clean. Increase potential students via forms and social networks. The first time company get profit in 6 years.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span> Rewrite the CRM in Laravel and integrate with Moodle, SMS provider.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span> Reduced software and server license cost, from $65,000/year to ~$1,200/year. Write easier to maintain, faster, and more friendly UX apps.</span></li>
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">10/2014</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">10/2015</div>
            </div>
            <div className="md:w-9/12">
              <h3 className="text-2xl mb-2">Developer - Australian Solar Quotes</h3>
              <h4 className="font-semibold my-4">Responsibilities</h4>
              <ul>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Develop and maintain features for Australian Solar Quotes, and other websites.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Ensure data integrity and correct.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Manage ASQ's websites and servers.</span></li>
              </ul>
              <h4 className="mt-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Keep system works smoothly when income increased.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Reduced server cost and improve security.</span></li>
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">12/2015</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">12/2018</div>
            </div>
            <div className="md:w-9/12">
              <h3 className="text-2xl mb-2">Co-Owner @ Meta Box</h3>
              <h4 className="font-semibold my-4">Responsibilities</h4>
              <ul>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Develop features, extensions, and setup membership site for Meta Box, a WordPress plugin which has 400.000+ active sites installed.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Tech support and write documentation.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Find customers through my relationships.</span></li>
              </ul>
              <h4 className="mt-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Meta Box's income from zero to >$10.000/month, from 100.000+ active installs to 400.000+.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Got contract from FPT, a big company in Vietnam.</span></li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">12/2018</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">Now</div>
            </div>
            <div className="md:w-9/12">
              <h3 className="text-2xl mb-2">Freelance Developer</h3>
              <h4 className="font-semibold my-4">Responsibilities</h4>
              <ul>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Create products and sell licenses.</span></li>
                <li><i className="fas fa-caret-right text-gray-600"></i> <span>Work with FPT Education company to create a Learning Management System in Node.js, Flutter.</span></li>
              </ul>
              <h4 className="mt-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>My Giga.ai website which sell messenger bot framework have 2,000+ customers before I close it due to Facebook privacy scandal.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>The Learning Management System is now serving 20,000+ students.</span></li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />
          <h2 className="font-bold text-2xl">Education</h2>
          <div className="card flex-row md:flex mt-6">
            <div className="md:w-3/12">
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600 mr-5">09/2009</div>
              <div className="inline md:block mr-5 font-semibold font-mono text-gray-600">&mdash;</div>
              <div className="inline md:block text-xl font-semibold font-mono text-gray-600">04/2013</div>
            </div>
            <div className="md:w-9/12">
              <h3 className="text-2xl mb-2">Higher Diploma in Software Engineering @ FPT Aptech - FPT University</h3>
              <h4 className="mt-4 font-semibold">Achievements</h4>
              <ul>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Reach the top students of the school in three terms.</span></li>
                <li><i className="fas fa-caret-right text-red-400"></i> <span>Graduation with Distinction.</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 md:ml-20">
          <h2 className="font-bold text-2xl">Skills</h2>
          <h3 className="text-2xl mt-6">Front End</h3>
          <p className="text-sm my-3 text-gray-600">I have 9 years experience in front end development since the day we still support IE6 and jQuery still a thing. I love to write performant JavaScript, and prefer to use TypeScript for type safety. Of course, I can write Angular, React, and Vue fluently.</p>
          <ul>
            <li><i className="fab fa-html5 text-blue-500 mr-2"></i> HTML (9 years)</li>
            <li>
              <i className="fab fa-css3-alt text-red-500 mr-2"></i> CSS/LESS/SASS (9 years)
            <ul className="ml-5">
                <li><i className="fab fa-bootstrap text-purple-500 mr-2"></i> Bootstrap (7 years)</li>
                <li><i className="fas fa-minus text-teal-500 mr-2"></i> Tailwind (6 months)</li>
              </ul>
            </li>
            <li>
              <i className="fab fa-js text-blue-500 mr-2"></i> JavaScript/TypeScript (9 years, 2 years)
            <ul className="ml-5">
                <li><i className="fab fa-angular mr-2 text-red-700"></i> AngularJS (8 years)</li>
                <li><i className="fab fa-angular mr-2 text-red-700"></i> Angular (3 years)</li>
                <li><i className="fab fa-react mr-2 text-blue-500"></i> React (1 year)</li>
                <li><i className="fab fa-vuejs mr-2 text-green-500"></i> Vue (3 years)</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl mt-6">Back End</h3>
          <p className="text-sm my-3 text-gray-600">I have 9+ years experience in PHP, 3 years experience in .NET, and 3 years experience in Node.js in both enterprise and startup environment. I can say I'm familiar with Laravel, WordPress, Symfony. I have strong knowledge of OOP, love beautiful, reusable, simple and effective code.</p>
          <ul>
            <li>
              <i className="fab fa-php mr-2 text-purple-500"></i> PHP (9 years)
            <ul className="ml-5">
                <li><i className="fab fa-laravel mr-2 text-red-500"></i> Laravel (7 years)</li>
                <li><i className="fab fa-symfony mr-2 text-pink-500"></i> Symfony (2 years)</li>
                <li><i className="fab fa-wordpress mr-2"></i> WordPress (9 years)</li>
              </ul>
            </li>
            <li>
              <i className="fab fa-node-js text-green-500 mr-2"></i> Node.js (3 years)
            <ul className="ml-5">
                <li><i className="fas fa-minus text-teal-500 mr-2"></i> ExpressJS (3 years)</li>
                <li><i className="fas fa-minus text-teal-500 mr-2"></i> NestJS (1 year)</li>
              </ul>
            </li>
            <li>
              <i className="fas fa-minus text-red-500 mr-2"></i> .NET (3 years)
              <ul className="ml-5">
                <li><i className="fas fa-minus text-teal-500 mr-2"></i> ASP.NET, C# (3 years)</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl mt-6">Databases</h3>
          <p className="text-sm my-3 text-gray-600">I already solved many performance issues, make apps significantly faster, not just only by improving back-end code but also restructuring database.</p>
          <ul>
            <li><i className="fas fa-database mr-2 text-blue-500"></i> MySQL (9 years)</li>
            <li><i className="fas fa-database mr-2 text-blue-500"></i> SQL Server (3 years)</li>
            <li><i className="fas fa-database mr-2 text-green-500"></i> MongoDB (1 year)</li>
            <li><i className="fas fa-database mr-2 text-orange-500"></i> Firebase (1 year)</li>
          </ul>
          <h3 className="text-xl mt-6">Teamwork</h3>
          <ul className="ml-5">
            <li><i className="fas fa-tasks text-blue-500 mr-2"></i> Scrum (3 years)</li>
            <li><i className="fab fa-git text-red-500 mr-2"></i> Git (3 years)</li>
          </ul>
          <h3 className="text-xl mt-6">Others</h3>
          <p className="text-sm my-3 text-gray-600">Some other things that I want to mention. Feel free to ask me any questions about these experiences.</p>
          <ul className="">
            <li><i className="fab fa-linux mr-2"></i> Linux Shell (6 years)</li>
            <li><i className="fab fa-docker mr-2 text-blue-500"></i> Docker (1 year)</li>
            <li><i className="fab fa-android text-green-500 mr-2"></i> <i className="fab fa-apple mr-2"></i> Dart/Flutter (1 year)</li>
            <li><i className="fas fa-minus text-teal-500 mr-2"></i> REST (6 years)</li>
            <li><i className="fas fa-minus text-red-500 mr-2"></i> GraphQL (1 year)</li>
          </ul>
          <h2 className="font-bold text-2xl mt-20">Hobbies</h2>
          <ul>
            <li><i className="fas fa-glasses mr-2"></i> Reading good code</li>
            <li><i className="fas fa-motorcycle mr-2"></i> Motorbikes</li>
            <li><i className="fas fa-dog mr-2"></i> Dogs</li>
            <li><i className="fas fa-keyboard mr-2"></i> Mechanical keyboards</li>
          </ul>
        </div>
      </main>
    </div>
  </div>
)
export default Index
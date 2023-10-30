/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const FrontEnds = () => {
  return (
    <div>
      <div className="bg-white rounded-xl m-4 md:mt-4 mt-28 md:py-4 pt-24 px-6">
        {/* Profile Detail Start */}
        <div className="border-b-2 pb-6">
          <div className="flex flex-col gap-y-4">
            <div className="md:bg-transparent bg-white p-8 border-2 w-40 rounded-full md:static absolute left-[32.5%] bottom-96">
              <img src="/img/pixel-&-graph-large.svg" alt="" />
            </div>
            <div>
              <div className="font-bold text-3xl pt-6">Front-End Developer</div>
              <div className="pt-6 pb-3 flex md:flex-row flex-col gap-6">
                <div className="font-bold">Pixel & Graphs</div>
                <div className="text-gray-600">
                  30 Days Remaining - Ends On 14/08/2019
                </div>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded-xl w-[360px] flex items-center gap-x-4">
              <div className="bg-green-500 p-3 rounded-full"></div>
              <div className="font-bold">
                Web, Mobile & Software Development
              </div>
            </div>
          </div>
        </div>
        {/* Profile Detail End */}

        {/* Who We Are Start */}
        <div className="border-b-2 py-4">
          <h1 className="font-bold text-2xl pt-2">Who We Are</h1>
          <br />
          <p className="pb-2 text-gray-500">
            One of our company goals has always been to create a workplace where
            developers can quickly grow their professional careers and use all
            of their skills to create innovative products, software, apps, and
            websites. We've come really close because we aren't growing the team
            with 'lone wolves', but developers who want to learn something new,
            who want to share that knowledge with others and who are ready to
            jump into that problem-solving mode whenever the encounter any kind
            of challenge. And, of course, have fun while they're doing it!
            <br />
            <br />
            Right now, we have 31 members in our Development department. That's
            31 amazing minds who can look at a project from countless sides to
            find the right way to deliver the best result. And if their primary
            stack of PHP with Symfony, MySQL and JavaScript aren't enough to
            crack the issue, they'll learn a new language & use new tech -
            anything that'll make their job easier and themselves more
            proficient.
          </p>
        </div>
        {/* Who We Are End */}

        {/* Detail Start */}
        <div>
          <div className="flex flex-col">
            <div className="py-10 flex md:flex-row flex-col justify-between gap-y-16 border-b-[1px]">
              <div className="w-full flex flex-col gap-8">
                <p className="text-gray-600 font-bold">
                  Opportunity Office Location
                </p>
                <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
                  United Kingdom
                </h1>
              </div>
              <div className="w-full flex flex-col gap-8">
                <p className="text-gray-600 font-bold">Salary</p>
                <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
                  $40.000 - $60.000
                </h1>
              </div>
            </div>

            <div className="py-10 flex md:flex-row flex-col justify-between gap-y-16 border-b-[1px]">
              <div className="w-full flex flex-col gap-8">
                <p className="text-gray-600 font-bold">Talent Location</p>
                <h1 className="font-bold lg:mr-0 md:mr-4 mr-0 2xl:text-3xl md:text-2xl text-3xl">
                  United States United Kingdom
                </h1>
              </div>
              <div className="w-full flex flex-col gap-8">
                <p className="text-gray-600 font-bold">
                  Talent Work Hour Timezone
                </p>
                <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
                  From GMT + 2 to GMT + 8
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Detail End */}

        {/* Opportunity Description Start */}
        <div className="py-8 border-b-2">
          <h1 className="font-bold text-2xl pb-6">Opportunity Description</h1>
          <p className="text-gray-500">
            Fuseproject is looking for a Freelance Lead Digital UI Designer in
            our Experience Design team, who is creative, passionate, and
            unwilling to compromise their drive to create stunning and engaging
            designed experiences that make a difference to our clients, their
            brand, and their customers.
            <br />
            <br />
            We work in a multidisciplinary environment and look for every
            opportunity to merge thinking and creative output. Our process,
            skillsets, and outputs are a function of our broad disciplines. We
            are looking for a freelancer to bring exceptional creative thought
            and craft output.
            <br />
            <br />
            The Freelance Lead Digital UI Designer takes an active, hands-on
            role in leading ideation to concept design through to detail design
            and into implementation. They are a passionate advocate for rigor
            and discipline in the design process yet operate freely and
            conceptually when considering design solutions. This important role
            requires broad knowledge and advanced skills in visual design, user
            experience, user interface, and a solid understanding of available
            client-side technologies.
            <br />
            <br />
            Successful Freelancer will have industry leading work examples
            across digital products and platforms, apps, websites, motion, CG
            and traditional graphic design. They will push the state-of-the-art
            and challenge convention with every creation and thrive in our
            fast-paced studio.
          </p>
        </div>
        {/* Opportunity Description End */}

        {/* Unordered List Start */}
        <div className="py-8 border-b-2">
          <h1 className="font-bold text-2xl pb-6">Here's What You'll Do</h1>
          <ul className="list-disc pl-4 text-gray-500 flex flex-col gap-y-8">
            <li>
              Plan, structure and implement applications, websites, APIs,
              databases, etc.
            </li>
            <li>Develop medium-sized and large web-based projects</li>
            <li>
              Give your input and actively participate in various brainstormings
            </li>
            <li>Maintain active applications</li>
            <li>
              Define daily responsibilities and tasks with Project Managers and
              team members
            </li>
            <li>Collaborate with the members of the Quality Assurance team</li>
            <li>Work and experiment with the trending technologies</li>
          </ul>
        </div>
        {/* Unordered List End */}

        {/* Skills Square Boxes Start */}
        <div>
          <div className="m-auto py-12 border-b-[1px]">
            <div className="font-bold text-2xl">Required Skills</div>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
                HTML (+5 Years)
              </div>
              <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
                CSS (+5 Years)
              </div>
              <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
                Javascript: Angular (+3 Years)
              </div>
              <div className="font-bold bg-green-100 px-6 py-4 rounded-xl">
                Javascript: React (+3 Years)
              </div>
              <div className="font-bold bg-purple-100 px-6 py-4 rounded-xl">
                Javascript: NodeJS (+3 Years)
              </div>
              <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
                PHP (+3 Years)
              </div>
              <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
                Ruby (+2 Years)
              </div>
              <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
                Python (+2 Years)
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="m-auto py-12 border-b-[1px]">
            <div className="font-bold text-2xl">Bonus Skills</div>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
                HTML (+5 Years)
              </div>
              <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
                CSS (+5 Years)
              </div>
              <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
                Javascript: Angular (+3 Years)
              </div>
              <div className="font-bold bg-green-100 px-6 py-4 rounded-xl">
                Javascript: React (+3 Years)
              </div>
              <div className="font-bold bg-purple-100 px-6 py-4 rounded-xl">
                Javascript: NodeJS (+3 Years)
              </div>
              <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
                PHP (+3 Years)
              </div>
              <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
                Ruby (+2 Years)
              </div>
              <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
                Python (+2 Years)
              </div>
            </div>
          </div>
        </div>
        {/* Skills Square Boxes End */}

        {/* Links Icons Start */}
        <div>
          <div className="pt-12 pb-10 flex justify-center flex-wrap gap-10">
            <img src="/img/website-icon.svg" alt="" />
            <img src="/img/linkedin-icon.svg" alt="" />
            <img src="/img/facebook-icon.svg" alt="" />
            <img src="/img/instagram-icon.svg" alt="" />
          </div>
        </div>
        {/* Links Icons End */}
      </div>
    </div>
  );
};

export default FrontEnds;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import InitiateChat from "./InitiateChat";
import cn from "classnames";
import * as Icons from "@/components/Icons";
import Link from "next/link";

const FrontEndsCO = () => {
  const [showProfileDetail, setShowProfileDetail] = useState<boolean>(false);
  return (
    <>
      <div className="flex absolute bg-slate-100 z-30 h-full p-4 gap-x-2 overflow-y-scroll no-scrollbar">
        <div className="bg-white h-fit rounded-xl md:py-4 pt-24 px-6">
          {/* Profile Detail Start */}
          <div className="border-b-2 pb-6">
            <div className="flex flex-col gap-y-4">
              <div className="md:bg-transparent bg-white p-8 border-2 w-40 rounded-full md:static absolute left-[32.5%] bottom-96">
                <img src="/img/pixel-&-graph-large.svg" alt="" />
              </div>
              <div>
                <div className="font-bold text-3xl pt-6">Please Select</div>
                <div className="pt-6 pb-3 flex md:flex-row flex-col gap-6">
                  <div className="font-bold text-blue-600">Pixel & Graphs</div>
                  <div className="text-gray-600">
                    30 Days Remaining - Ends On 14/08/2019
                  </div>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-xl w-[360px] flex items-center gap-x-4">
                <div className="bg-green-500 p-3 rounded-full"></div>
                <div className="font-bold">...</div>
              </div>
            </div>
          </div>
          {/* Profile Detail End */}

          {/* Who We Are Start */}
          <div className="border-b-2 py-4">
            <h1 className="font-bold text-2xl pt-2">Who We Are</h1>
            <br />
            <p className="pb-2 text-gray-500">
              One of our company goals has always been to create a workplace
              where developers can quickly grow their professional careers and
              use all of their skills to create innovative products, software,
              apps, and websites. We've come really close because we aren't
              growing the team with 'lone wolves', but developers who want to
              learn something new, who want to share that knowledge with others
              and who are ready to jump into that problem-solving mode whenever
              the encounter any kind of challenge. And, of course, have fun
              while they're doing it!
              <br />
              <br />
              Right now, we have 31 members in our Development department.
              That's 31 amazing minds who can look at a project from countless
              sides to find the right way to deliver the best result. And if
              their primary stack of PHP with Symfony, MySQL and JavaScript
              aren't enough to crack the issue, they'll learn a new language &
              use new tech - anything that'll make their job easier and
              themselves more proficient.
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
                    ... ...
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
              unwilling to compromise their drive to create stunning and
              engaging designed experiences that make a difference to our
              clients, their brand, and their customers.
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
              role in leading ideation to concept design through to detail
              design and into implementation. They are a passionate advocate for
              rigor and discipline in the design process yet operate freely and
              conceptually when considering design solutions. This important
              role requires broad knowledge and advanced skills in visual
              design, user experience, user interface, and a solid understanding
              of available client-side technologies.
              <br />
              <br />
              Successful Freelancer will have industry leading work examples
              across digital products and platforms, apps, websites, motion, CG
              and traditional graphic design. They will push the
              state-of-the-art and challenge convention with every creation and
              thrive in our fast-paced studio.
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
                Give your input and actively participate in various
                brainstormings
              </li>
              <li>Maintain active applications</li>
              <li>
                Define daily responsibilities and tasks with Project Managers
                and team members
              </li>
              <li>
                Collaborate with the members of the Quality Assurance team
              </li>
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
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          {/* Links Icons End */}
        </div>
        <InitiateChat showProfileDetails={() => setShowProfileDetail(true)} />
        {showProfileDetail && (
          <div
            onClick={() => setShowProfileDetail(false)}
            className="absolute top-0 w-full h-screen bg-black opacity-70"
          ></div>
        )}
        <div
          className={cn(
            "fixed h-screen md:w-[30rem] w-full bg-white top-0 duration-500 ease-in-out",
            {
              "right-0": showProfileDetail,
              "-right-[100%]": !showProfileDetail,
            }
          )}
        >
          <div className="w-full flex flex-col justify-between h-full px-5">
            <div
              onClick={() => setShowProfileDetail(false)}
              className="cursor-pointer mt-4 py-4 w-full border-b-2 flex justify-between"
            >
              <div className="flex items-center gap-x-4">
                <div>
                  <img className="h-20" src="/img/chat-initiater.png" alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-3xl">Kelly</h1>
                  <p className="font-bold text-gray-600">
                    Gethired Chat <br /> Support
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Icons.CloseIcon />
              </div>
            </div>

            <div className="h-fit py-8 flex justify-between flex-col gap-y-8">
              <div className="absolute md:bottom-[45%] bottom-[38%]">
                <img
                  className="absolute h-16 bottom-[85%]"
                  src="/img/chat-initiater.png"
                  alt=""
                />
                <p className="bg-slate-100 p-5 mx-6 rounded-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor mattis nunc commodo pharetra vel elit. Elementum enim,
                  mollis id dolor, tortor in. Turpis sed arcu suspendisse neque.
                  Varius sem feugiat lacus et se?
                </p>
              </div>

              <div className="absolute md:bottom-[28%] bottom-[24%]">
                <img
                  className="absolute bottom-[85%] h-16"
                  src="/img/chat-initiater.png"
                  alt=""
                />
                <p className="bg-slate-100 p-5 mx-6 rounded-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor mattis nunc commodo pharetra vel elit. Elementum enim,
                  mollis id dolor, tortor in. Turpis sed arcu suspendisse neque.
                  Varius sem feugiat lacus et se?
                </p>
              </div>

              <div>
                <p className="bg-blue-600 text-white p-5 m-6 rounded-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor mattis nunc commodo pharetra vel elit. Elementum enim,
                  mollis id dolor, tortor in. Turpis sed arcu suspendisse neque.
                  Varius sem feugiat lacus et se?
                </p>
              </div>

              <div className="flex gap-x-6 pt-4 border-t-2">
                <img src="/img/clip-icon.svg" alt="" />
                <input
                  className="bg-gray-200 w-full rounded-xl border-none"
                  type="text"
                />
                <img src="/img/send-message-icon.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white fixed bottom-[0%] z-50 p-4 w-full">
        <div className="w-[82%] flex justify-around">
          <button className="cursor-pointer">Cancel</button>
          <button
            type="button"
            className="bg-blue-600 px-8 py-4 rounded-xl text-white cursor-pointer"
          >
            <Link href="/congratulationsss">Submit</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default FrontEndsCO;

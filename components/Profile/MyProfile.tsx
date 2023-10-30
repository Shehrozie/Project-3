/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

const MyProfile: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div>
        {/* Header Start Here */}
        <div className="bg-[url(/img/profileBanner.jpeg)] h-[35rem] w-full bg-no-repeat bg-cover bg-center"></div>

        <div className="bg-amber-30 flex md:justify-evenly justify-around items-center absolute top-[34rem] w-full">
          <div className="bg-white border-2 rounded-full h-48 w-48 flex justify-center items-center">
            <div className="bg-[url(/img/Ball.svg)] h-28 w-28 bg-no-repeat bg-cover">
              <div className="bg-[url(/img/plus-icon-fill.svg)] h-12 w-12 bg-no-repeat bg-cover absolute ml-28 mt-20"></div>
            </div>
          </div>

          <div className="bg-blue-700 rounded-xl p-4 px-8">
            <button className="text-white">Edit Profile</button>
          </div>
        </div>
        {/* Header End Here */}

        {/* Open Opportunities Pixels & Graphs Start Here */}
        <div className="mt-40 m-auto 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] pb-20 border-b-[1px] border-black">
          <p className="font-bold lg:text-2xl text-xl">
            (<p className="text-blue-700 inline">3</p>) Open Opportunities of
            Pixels & Graphs
          </p>
        </div>
        {/* Open Opportunities Pixels & Graphs End Here */}

        {/* Cards Start Here */}
        <div className="md:bg-transparent my-12 px-4 md:flex hidden justify-around md:flex-row flex-col gap-x-4">
          {/* Card 1 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Front-End Developer</p>
              <p className="font-bold">75% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Card 1 */}

          {/* Card 2 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Back-End Developer</p>
              <p className="font-bold">40% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Card 2 */}

          {/* Card 3 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Full-Stack Developer</p>
              <p className="font-bold">31% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Card 3 */}
        </div>
      </div>
      <div className="md:hidden block bg-gray-300 p-2 m-4">
        <Slider {...settings}>
          {/* Cards 1 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Front-End Developer</p>
              <p className="font-bold">75% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Cards 1 */}

          {/* Card 2 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Back-End Developer</p>
              <p className="font-bold">40% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Card 2 */}

          {/* Card 3 */}
          <div className="bg-white shadow-2xl rounded-2xl px-6 pb-4 pt-1">
            <div className="flex justify-end">
              <button className="px-4 text-2xl font-bold">...</button>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-white border-[0.5px] rounded-full xl:h-20 md:h-10 h-20 xl:w-20 md:w-10 w-20 flex justify-center items-center">
                <div className="bg-[url(/img/small.svg)] xl:h-10 md:h-5 h-10 xl:w-10 md:w-5 w-10 bg-no-repeat bg-cover"></div>
              </div>
              <h1 className="font-bold xl:text-lg text-xs">Pixels & Graphs</h1>
              <p className="text-gray-600 xl:text-sm text-xs">
                12 days remaining
              </p>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
              <p className="font-bold text-xl">Full-Stack Developer</p>
              <p className="font-bold">31% Match</p>
            </div>
            <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-x-3">
              <div className="bg-green-500 h-6 w-6 rounded-full"></div>
              <p className="font-bold lg:text-lg text-xs">
                Web, Mobile & Software Development
              </p>
            </div>
          </div>
          {/* Card 3 */}
        </Slider>
      </div>
      {/* Cards End Here */}

      {/* Company Details Stat Here */}
      <div className="flex flex-col items-center">
        <div className="py-10 flex md:flex-row flex-col justify-between gap-y-16 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] border-y-[1px] border-black">
          <div className="w-full flex flex-col gap-8">
            <p className="text-gray-600 font-bold">Company Name</p>
            <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
              Pixel & Graphs
            </h1>
          </div>
          <div className="w-full flex flex-col gap-8">
            <p className="text-gray-600 font-bold">Size</p>
            <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
              26 - 50 Employees
            </h1>
          </div>
        </div>

        <div className="py-10 flex md:flex-row flex-col justify-between gap-y-16 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] border-b-[1px] border-black">
          <div className="w-full flex flex-col gap-8">
            <p className="text-gray-600 font-bold">Location</p>
            <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
              United Kingdom, London
            </h1>
          </div>
          <div className="w-full flex flex-col gap-8">
            <p className="text-gray-600 font-bold">Work Hour Timezone</p>
            <h1 className="font-bold 2xl:text-3xl md:text-2xl text-3xl">
              From GMT + 2 to GMT + 8
            </h1>
          </div>
        </div>
      </div>
      {/* Company Details End Here */}

      {/* About Start Here */}
      <div className="m-auto 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] pb-20 pt-10 border-b-[1px] border-black flex flex-col gap-y-4">
        <div className="text-3xl">About</div>
        <Slider {...settings}>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/profileabout.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/peoplemeet1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/peoplemeet2.jpg"
              alt=""
            />
          </div>
        </Slider>
        <div className="mb-6">
          <p className="text-gray-700">
            One of our company goals has always been to create a workplace where
            developers can quickly grow their professional careers and use all
            of their skills to create innovative products, software, app, and
            websites. We've come really close because we aren't growing the team
            with 'lone wolves', but developers who want to learn soemthing new,
            who want to share knowledge with others and who are ready to jump
            into that problem-solving mode whenever they encounter any kind of
            challenge. And, of course, have fun while they're doing it!{" "}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            Right now, we have 31 members in our Development department. That's
            31 amazing minds who can look at a project from countless sides to
            find the right way to deliver the best result. And if their primary
            stack of PHP with Symfony, MySQL and JavaScript aren't enough to
            crack the issue, they'll learn a new language & use new tech -
            anything that'll make their job easier and themselves more
            proficient
          </p>
        </div>
      </div>
      {/* About End Here */}

      {/* Culture & Benefits Start Here */}
      <div className="m-auto 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] pb-24 pt-10 border-b-[1px] border-black flex flex-col gap-y-4">
        <div className="text-3xl">Culture & Benefits</div>
        <Slider {...settings}>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/profile-benefits.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/profile-benefits.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[30vh] w-full rounded-xl"
              src="/img/profile-benefits.jpg"
              alt=""
            />
          </div>
        </Slider>
        <div className="mb-6">
          <p className="text-gray-700">
            To harness the power of innovation, SAP invest in the development of
            its diverse employees. We aspire to leverage the qualities and
            appreciate the unique competencies that each person brings to the
            company.{" "}
          </p>
        </div>
        <div>
          <ul className="list-disc pl-8 text-gray-700 flex flex-col gap-y-8">
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
      </div>
      {/* Culture & Benefits End Here */}

      {/* Technologies Used Start Here */}
      <div className="m-auto 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] py-12 border-b-[1px] border-black">
        <div className="font-bold text-2xl">Technologies Used</div>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-blue-100 px-6 py-4 rounded-xl">HTML</div>
          <div className="bg-yellow-100 px-6 py-4 rounded-xl">CSS</div>
          <div className="bg-red-100 px-6 py-4 rounded-xl">
            Javascript: Angular
          </div>
          <div className="bg-green-100 px-6 py-4 rounded-xl">
            Javascript: React
          </div>
          <div className="bg-orange-100 px-6 py-4 rounded-xl">Ruby</div>
          <div className="bg-purple-100 px-6 py-4 rounded-xl">
            Javascript: NodeJS
          </div>
        </div>
      </div>
      {/* Technologies Used End Here */}

      {/* Social Media Start Here */}
      <div className="m-auto 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] w-[30rem] py-10 border-black flex flex-col gap-y-6">
        <div className="font-bold text-xs text-gray-600">Social Media</div>
        <div className="flex flex-col gap-y-8">
          <div className="flex gap-x-4">
            <img src="/img/website-icon.svg" alt="" />
            <p className="sm:text-2xl text-lg font-bold">
              www.pixelsandgraphs.com
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src="/img/linkedin-icon.svg" alt="" />
            <p className="sm:text-2xl text-lg font-bold">
              www.linkedin.com/pixelsandgraphs
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src="/img/facebook-icon.svg" alt="" />
            <p className="sm:text-2xl text-lg font-bold">
              www.facebook.com/pixelsandgraphs
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src="/img/instagram-icon.svg" alt="" />
            <p className="sm:text-2xl text-lg font-bold">
              www.instagram.com/pixelsandgraphs
            </p>
          </div>
        </div>
      </div>
      {/* Social Media End Here */}

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default MyProfile;

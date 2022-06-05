/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../src/assets/img/logo.svg';
import LogoWhite from '../src/assets/img/logo-white.svg';
import Image1 from '../src/assets/img/illustration-intro.svg'
import Avatar1 from '../src/assets/img/avatar-anisha.png';
import Avatar2 from '../src/assets/img/avatar-ali.png';
import Avatar3 from '../src/assets/img/avatar-richard.png';
import Facebook from '../src/assets/img/icon-facebook.svg';
import Instagram from '../src/assets/img/icon-instagram.svg';
import Twitter from '../src/assets/img/icon-twitter.svg';
import Pinterest from '../src/assets/img/icon-pinterest.svg';
import Youtube from '../src/assets/img/icon-youtube.svg';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {

  const ref = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const onHamburgerClick = () => {
    ref.current?.classList.toggle('open');
    menuRef.current?.classList.toggle('hidden');
  }

  const router = useRouter();
  const { t, lang } = useTranslation();
  const dir = lang === "he" ? "rtl" : "ltr";

  const [currentLang, setCurrentLang] = useState('EN');


  return (
    <div className="">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="h-6 cursor-pointer pt-1">
            <Image width={"146px"} height={"24px"} src={Logo} alt={"logo"} />
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue capitalize">
                {t("header:pricing")}
              </a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue capitalize">{t("header:product")}</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue capitalize">{t("header:about-us")}</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue capitalize">{t("header:careers")}</a>
            </Link>
            {/* <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">Community</a>
            </Link> */}

            <div className='relative z-50 group '>
              <button ref={ref} onClick={onHamburgerClick} id="menu-language" className="blocktra focus:outline-none uppercase">
                {currentLang}
              </button>

              <div className="hidden group-hover:block absolute flex flex-col items-start justtify-center bg-white drop-shadow top-6 left-0">
                {router.locales?.map((locale) => {
                  return (
                    <div key={locale} onClick={() => setCurrentLang(locale)}>
                      <Link
                        href={router.asPath}
                        as={router.asPath}
                        locale={locale}
                        passHref
                      >
                        <a className="no-underline hover:text-brightRed px-4 py-2 block">
                          {locale === "he" ? locale + "(RTL)" : locale}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button className="hidden items-center justify-center p-2 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:flex">
            Get Started
          </button>

          <button ref={ref} onClick={onHamburgerClick} id="menu-btn" className="block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div ref={menuRef} id="menu" className="absolute hidden flex flex-col items-center self-end py-8 mt-6 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50">
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">Pricing</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">Product</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">About Us</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">Careers</a>
            </Link>
            <Link href="#" passHref>
              <a className="hover:text-darkGrayishBlue">Community</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* HREO SETCION */}
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* left items */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Birng everyone together to build better product
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <div className="div flex justify-center md:justify-start">
              <Link href="#" passHref>
                <a className='items-center justify-center p-2 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight'>Get Started</a>
              </Link>
            </div>
          </div>

          {/* iamge */}
          <div className='w-100 md:w-1/2'>
            <div className='relative h-100 w-100'>
              <img src={Image1} alt="imgillustration-intro" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section id="features">
        {/* left */}
        <div className="container flex flex-col mx-auto pt-12 px-4 space-y-12 md:space-y-0 md:flex-row">
          <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's differcent about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-2 md:space-x-14">
              <div className="rounded-l-full rounded-r-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex flex-row items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                  <h3 className="text-base font-bold">
                    Track company-wide progress
                  </h3>
                </div>

              </div>
              <div>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way done to the
                  smallest of details. Never lose sight of the bigger picture
                  again.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-2 md:space-x-14">
              <div className="rounded-l-full rounded-r-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex flex-row items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                  <h3 className="text-base font-bold">
                    Advanced built-in reports
                  </h3>
                </div>

              </div>
              <div>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-2 md:space-x-14">
              <div className="rounded-l-full rounded-r-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex flex-row items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
                  <h3 className="text-base font-bold">
                    Everything you need in one place
                  </h3>
                </div>

              </div>
              <div>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>

          <div className="flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <div className="w-16 -mt-14">
                <Image width='64px' height={'64px'} src={Avatar1} alt="avatar" className='rounded-full' />
              </div>
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <div className="w-16 -mt-14">
                <Image width='64px' height={'64px'} src={Avatar2} alt="avatar" className='rounded-full' />
              </div>
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <div className="w-16 -mt-14">
                <Image width='64px' height={'64px'} src={Avatar3} alt="avatar" className='rounded-full' />
              </div>
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="my-16 flex items-center justify-center">
            <a href="#" className="flex items-center justify-center p-3 px-6 bg-brightRed text-white rounded-full w-fit hover:bg-brightRedLight md:flex">
              Get started
            </a>
          </div>

        </div>
      </section>

      <section id="cta" className='bg-brightRed'>
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how team works today
          </h2>

          <a href="#" className="flex items-center justify-center shadow-2xl p-3 px-6 bg-white text-birghtRed rounded-full w-fit hover:bg-gray-300 md:flex">
            Get started
          </a>
        </div>
      </section>

      <footer className='bg-veryDarkBlue'>
        <div className="conatiner flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:space-y-0 md:flex-col md:items-start">

            <div className="mx-auto mt-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            <div className='h-6 relative'>
              <Image width={142} height={24} src={LogoWhite} alt="logo-white" />
            </div>

            <div className="flex justify-center space-x-4">
              <Link href="#" passHref>
                <a className='h-8 w-8 relative'>
                  <Image width={32} height={32} src={Facebook} alt="social" />
                </a>
              </Link>
              <Link href="#" passHref>
                <a className='h-8 w-8 relative'>
                  <Image width={32} height={32} src={Instagram} alt="social" />
                </a>
              </Link>
              <Link href="#" passHref>
                <a className='h-8 w-8 relative'>
                  <Image width={32} height={32} src={Pinterest} alt="social" />
                </a>
              </Link>

              <Link href="#" passHref>
                <a className=' relative'>
                  <Image src={Twitter} alt="social" width={32} height={32} />
                </a>
              </Link>
              <Link href="#" passHref>
                <a className=' relative'>
                  <Image src={Youtube} alt="social" width={32} height={32} />
                </a>
              </Link>
            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Home</a>
              </Link>
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Pricing</a>
              </Link>
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Products</a>
              </Link>
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>About</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Careers</a>
              </Link>
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Commnuity</a>
              </Link>
              <Link href="#" passHref>
                <a className='hover:text-brightRed'>Privacy Policy</a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-3">
                <input type="text" className="flex-1 px-4 py-2 rounded-full focus:outline-none" placeholder='Update in your inbox' />
                <button className="rounded-full baseline bg-brightRed flex items-center justify-center px-6 py-2 text-white focus:outline-none hover:bg-brightRedLight">Go</button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;
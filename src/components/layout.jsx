import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import EmployeeCard from "./Header/EmployeeCard";
import { Power } from "lucide-react";
import { users, sidebarNavigation, links } from "@/data";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full flex-col">
        {/* Top nav*/}
        <header className="relative flex h-28 flex-shrink-0 items-center bg-gray-100">
          {/* Logo area */}
          <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
            <Link
              href="#"
              className="flex h-28 w-16 items-center justify-center bg-[#323fdd] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#323fdd] md:w-20 text-white text-2xl"
            >
              P
            </Link>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full -mt-8 ">
              <nav className="flex items-center justify-between max-w-screen-2xl w-full">
                <div className="flex items-center space-x-1 font-medium">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-sm transition-colors text-gray-600 ${
                        link.current
                          ? "text-indigo-600 bg-white"
                          : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-3">
                  <Link
                    href="/attendance"
                    className="text-sm text-blue-600 font-medium hover:text-blue-700"
                  >
                    Attendance Module
                  </Link>
                </div>
              </nav>
            </div>

            <div className="flex px-4  mt-2 justify-between">
              <div className="flex gap-x-4 ">
                <div className="rounded-3xl border border-gray-300  flex cursor-pointer font-medium bg-white">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border-0 bg-white text-sm text-gray-500 placeholder-gray-500 rounded-3xl py-2 px-2"
                  />
                </div>
                <div className="flex items-center justify-center gap-x-2 cursor-pointer font-medium">
                  <AdjustmentsVerticalIcon className="w-5 h-5 text-gray-600" />
                  <div className="text-gray-600 text-sm">Filters</div>
                </div>
                <div className="flex items-center rounded-3xl border border-gray-300 pl-4 pr-3 py-1 text-gray-900 gap-x-2 text-xs cursor-pointer font-medium bg-white">
                  Row
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex items-center rounded-3xl border border-gray-300 pl-4 pr-3 py-1 text-gray-900 gap-x-2 text-xs cursor-pointer font-medium bg-white">
                  July
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex items-center rounded-3xl border border-indigo-300 bg-[#323fdd]  pl-4 pr-3 py-1 text-white gap-x-2  cursor-pointer text-xs font-medium">
                  Export
                  <ChevronDownIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center rounded-3xl border border-gray-300 bg-white  pl-4 pr-3 py-1 text-gray-900 gap-x-2 text-xs cursor-pointer font-medium">
                  Detailed View
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </header>

        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <nav
            aria-label="Sidebar"
            className="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-[#323fdd]"
          >
            <div className="relative flex w-20 flex-col space-y-3 ">
              <hr className="bg-slate-100/10 "></hr>
              <img
                className="h-10 w-10 rounded-full mx-auto my-3"
                src={user.imageUrl}
                alt=""
              />
              <hr className="bg-slate-100/10 "></hr>
              {sidebarNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-slate-100/20 text-white"
                      : "text-white hover:bg-slate-100/20",
                    "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg mx-auto"
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-48 p-3">
              <Link
                href={"/"}
                className={
                  "text-white hover:bg-slate-100/20 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg mx-auto p-3"
                }
              >
                <span className="sr-only">{"Logout"}</span>
                <Power className="h-6 w-6" aria-hidden="true" />
              </Link>{" "}
            </div>
          </nav>

          {/* Main area */}
          <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
            >
              <h1 id="primary-heading" className="sr-only">
                Home
              </h1>
              {/* Your content */}

              {children}
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
              <div className="relative flex h-full w-72 flex-col overflow-y-auto shadow-xl bg-white rounded-md m-2 p-2 gap-y-1">
                {users.map((userItem, index) => (
                  <EmployeeCard
                    name={userItem.name}
                    desig={userItem.dept}
                    src={userItem.src}
                  />
                ))}
              </div>
            </aside>
          </main>
        </div>
      </div>
    </>
  );
}

"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import bgGreen from "../assets/bg.png"

export function MainNav() {
  const [tableData, setTableData] = useState([])
  const [scenarioData, setScenarioData] = useState([])
  const [portfolioData, setPortfolio] = useState([])

  const fetchAssetsDetails = async () => {
    await axios.get('/api/assets').then((res) => {
      setTableData(res.data.data)
    })
  }

  const fetchScenariosDetail = async () => {
    await axios.get('/api/scenarios').then((res) => {
      setScenarioData(res.data.data)
    })
  }

  const fetchPortfoliosDetail = async () => {
    await axios.get('/api/portfolios').then((res) => {
      setPortfolio(res.data.data)
    })
  }

  useEffect(() => {
    fetchAssetsDetails()
    fetchScenariosDetail()
    fetchPortfoliosDetail()
  }, [])

  return (
    <div className="flex">
      <Link href="/" className="hidden items-center space-x-2 md:flex"><Icons.logo className="h-6 w-6" /><span className="hidden font-bold sm:inline-block">Optiml</span></Link>
      <NavigationMenu className="ml-12">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Portfolios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className={`flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md`}
                      href="/"
                      style={{
                        backgroundImage: `url(${bgGreen.src})`,
                      }}
                    >
                      {/* <Icons.logo className="h-6 w-6 text-white" /> */}
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        {portfolioData && portfolioData[0]?.value}
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        {portfolioData && portfolioData[0]?.posterTitle}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                {portfolioData &&
                  portfolioData.map((portfolio) => (
                    <ListItem href="/" title={portfolio.name}>
                      {portfolio.description}
                    </ListItem>
                  ))}
              </ul>
              <div
                role="none"
                className="mx-auto mb-4 h-[1px] w-[90%] bg-slate-200"
              ></div>
              <div className="flex justify-center">
                <a
                  className="mx-auto mb-4 inline-flex h-10 w-[90%] items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
                  href="/"
                  data-radix-collection-item=""
                >
                  View all portfolios
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tableData?.map((component: any) => (
                  <div className="flex">
                    <img
                      className="h-[50px] w-[50px] rounded-md"
                      src="https://thumbs.dreamstime.com/b/old-white-building-11767155.jpg"
                      alt="building"
                    />
                    <ListItem
                      key={component.id}
                      title={component.name}
                      href={component.href}
                    >
                      {component.caption}
                    </ListItem>
                  </div>
                ))}
              </ul>
              <div
                role="none"
                className="mx-auto mb-3 h-[1px] w-[90%] bg-slate-200"
              ></div>
              <div className="flex justify-center">
                <a
                  className="mx-auto mb-4 inline-flex h-10 w-[90%] items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
                  href="/"
                  data-radix-collection-item=""
                >
                  View all assets
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Environments</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        {scenarioData && scenarioData[0]?.name}
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        {scenarioData && scenarioData[0]?.caption}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                {scenarioData &&
                  scenarioData.map((scenrio) => (
                    <ListItem href="/" title={scenrio.name}>
                      {scenrio.caption}
                    </ListItem>
                  ))}
              </ul>
              <div
                role="none"
                className="mx-auto mb-4 h-[1px] w-[90%] bg-slate-200"
              ></div>
              <div className="flex justify-center">
                <a
                  className="mx-auto mb-4 inline-flex h-10 w-[90%] items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
                  href="/"
                  data-radix-collection-item=""
                >
                  View all data environments
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

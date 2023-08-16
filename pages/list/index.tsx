import React from "react"
import Head from "next/head"
import { Layout } from "../../components/layout"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import PortfolioList from "../../data/portfolioList.json"

export default function List() {
  return (
    <Layout>
      <Head>
        <title>Optiml</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-9">
        <div className="flex w-full gap-4 divide-x">
          <div className="width-[30%]">
            <h1 className="text-black-50 mt-0 mb-2 text-2xl font-bold">
              Basic
            </h1>
            <span className="leading-10 ">Portfolios</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <span className=" leading-10">Cities</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <span className="leading-10">Year of construction</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="1980 to 2010" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1980-1990">1980 to 1990</SelectItem>
                <SelectItem value="1980-2000">1980 to 2000</SelectItem>
                <SelectItem value="1980-2010">1980 to 2010</SelectItem>
              </SelectContent>
            </Select>

            <span className=" leading-10">Asset value</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="CHF 1M to CHF 10M" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1980-1990">1980 to 1990</SelectItem>
                <SelectItem value="1980-2000">1980 to 2000</SelectItem>
                <SelectItem value="1980-2010">1980 to 2010</SelectItem>
              </SelectContent>
            </Select>

            <h1 className="text-black-50 mt-0 mb-2 text-2xl font-bold">
              Energy
            </h1>

            <span className=" leading-10">Heating carrier</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="District heating">
                  District heating
                </SelectItem>
                <SelectItem value="Heat pump">Heat pump</SelectItem>
                <SelectItem value="gas">gas</SelectItem>
                <SelectItem value="oil">oil</SelectItem>
              </SelectContent>
            </Select>

            <span className=" leading-10">Heating consumption</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="District heating">
                  District heating
                </SelectItem>
                <SelectItem value="Heat pump">Heat pump</SelectItem>
                <SelectItem value="oil">oil</SelectItem>
              </SelectContent>
            </Select>

            <span className=" leading-10">Electricity consumption</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="District heating">
                  District heating
                </SelectItem>
                <SelectItem value="Heat pump">Heat pump</SelectItem>
                <SelectItem value="oil">oil</SelectItem>
              </SelectContent>
            </Select>

            <div></div>
          </div>

          <div className="width-[70%]">
            <div className="mx-9 flex">
              <Tabs defaultValue="account" className="w-[150px]">
                <TabsList>
                  <TabsTrigger value="account">List</TabsTrigger>
                  <TabsTrigger value="password">Preview</TabsTrigger>
                </TabsList>
              </Tabs>

              <Tabs defaultValue="account" className="w-[200px] ">
                <TabsList>
                  <TabsTrigger value="account">Basic</TabsTrigger>
                  <TabsTrigger value="password">
                    Energy & CO<sub>2</sub>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="mx-9 mt-6">
              <table className="w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700">
                  <tr className="text-black">
                    <th scope="col" className="p-0">
                      <div className="flex items-center text-sm">
                        Portfolio
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Asset ID
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Address
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        City
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        ZIP
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Canton
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Country
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Type
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Buildings
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-5 py-3">
                      <div className="flex items-center text-sm">
                        Build Year
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-3 w-3 fill-gray-300"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-black ">
                  {PortfolioList &&
                    PortfolioList.map((item) => {
                      return (
                        <>
                          <tr className="border-t-2 bg-white  hover:bg-sky-50">
                            {Object.keys(item).length > 0 &&
                              Object.keys(item).map((i) => {
                                return (
                                  <td className="px-5 py-2 align-baseline">
                                    {item[i]}
                                  </td>
                                )
                              })}
                          </tr>
                        </>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

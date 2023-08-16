import Head from "next/head"
import {
  faBolt,
  faFireFlameCurved,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Layout } from "@/components/layout"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IndexPage() {
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
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-5">
        <div className="flex w-full gap-4 divide-x">
          <div className="width-[30%]">
            <h1 className="text-black-50 mt-0 mb-2 text-2xl font-bold">
              Basic
            </h1>
            <span className="leading-10">Portfolios</span>
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

            <span className=" leading-10">Year of construction</span>
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

            <span className=" leading-10">Heating Source</span>
            <Select>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue placeholder="Custom" />
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

            <span className=" leading-10">Heating Consumption</span>
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
          </div>

          <div className="width-[70%]">
            <div className="mx-9 flex">
              <Tabs defaultValue="account" className="w-[150px]">
                <TabsList>
                  <TabsTrigger value="account">List</TabsTrigger>
                  <TabsTrigger value="password">Preview</TabsTrigger>
                </TabsList>
              </Tabs>

              <Tabs defaultValue="account" className="w-[200px]">
                <TabsList>
                  <TabsTrigger value="account">Basic</TabsTrigger>
                  <TabsTrigger value="password">
                    Energy & CO<sub>2</sub>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* ---------->First Row<---------- */}

            <div className="h-2/7 grid grid-cols-1 gap-5 p-10 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
              {/* <!--Card 1--> */}
              <div className="overflow-hidden rounded  ">
                <img 
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="building"
                />
                <div className=" py-4">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm ">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Oil</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!--Card 2--> */}
              <div className="overflow-hidden rounded ">
                <img
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="River"
                />
                <div className=" py-4">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Gas</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!--Card 3--> */}
              <div className="overflow-hidden rounded ">
                <img
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="River"
                />
                <div className=" py-4 ">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Oil</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------->Second Row<---------- */}

            <div className="h-2/7 grid grid-cols-1 gap-5 p-10 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
              {/* card 1 */}
              <div className="overflow-hidden rounded  ">
                <img
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="Mountain"
                />
                <div className=" py-4">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Gas</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!--Card 2--> */}
              <div className="overflow-hidden rounded ">
                <img
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="River"
                />
                <div className=" py-4">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Free WiFi</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <!--Card 3--> */}
              <div className="overflow-hidden rounded ">
                <img
                  className="h-4/5 w-full rounded-md"
                  src="https://media.istockphoto.com/id/520334500/photo/modern-building-of-shanghai.jpg?s=612x612&w=0&k=20&c=lnThrIA7QTiqjyjbc5AgqoPONvurd_66EyL_UxiBaQI="
                  alt="River"
                />
                <div className=" py-4">
                  <div className="mb-2 text-sm font-bold">
                    <p>1 Hello, India</p>
                  </div>
                  <div className="pr-2 text-sm">
                    <p className="text-gray-500">
                      <FontAwesomeIcon icon={faGasPump} />
                      <span className="ml-1">Free WiFi</span>
                      <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="ml-3"
                      />
                      <span className="ml-1">120 kWh/m2</span>
                      <FontAwesomeIcon icon={faBolt} className="ml-3" />
                      <span className="ml-1">10 kWh/m2</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

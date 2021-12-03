import Head from "next/head";
import GlobalLayout from "@components/GlobalLayout";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
export default function Home() {
  return (
    <GlobalLayout>
      <Head>
        <title>LONDRY | One tap order</title>
      </Head>
      <Navbar />
      <Layout>
        <div className="w-full mt-16 xl:mt-0">
          <p>Let's proceed your order 🎉</p>
          <div className="grid gap-2 sm:gap-4 grid-cols-2 my-4 xl:my-8">
            <input
              type="text"
              placeholder="Address e.g Jalan No.5 Imam Ghazali"
              className="block col-span-2 w-full border-2 sm:border-4 outline-none focus:outline-none focus:border-blue-300 active:outline-none p-2 sm:p-6 font-semibold rounded-lg sm:rounded-2xl text-xs sm:text-base md:text-xl"
            />
            <input
              type="text"
              placeholder="On behalf of..."
              className="w-full border-2 sm:border-4 outline-none focus:outline-none focus:border-blue-300 active:outline-none p-2 sm:p-6 font-semibold rounded-lg sm:rounded-2xl text-xs sm:text-base md:text-xl"
            />
            <input
              type="text"
              placeholder="Amount in Kg"
              className="w-full border-2 sm:border-4 outline-none focus:outline-none focus:border-blue-300 active:outline-none p-2 sm:p-6 font-semibold rounded-lg sm:rounded-2xl text-xs sm:text-base md:text-xl"
            />
            <div></div>
            <button className="p-2 sm:p-6 font-semibold rounded-lg sm:rounded-2xl bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-2 focus:ring-2 sm:focus:ring-4">
              Order Now
            </button>
          </div>
          <p className="text-xs sm:text-sm">
            *We'll come to your home for estimated time of 15 minutes
          </p>
        </div>
      </Layout>
    </GlobalLayout>
  );
}

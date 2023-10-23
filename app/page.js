"use client";
import Image from "next/image";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const LineElement = () => {
  return (
    <li>
      <button className="w-[248px] h-[44px] flex items-center gap-4">
        <Image
          src="/pointright.svg"
          alt="hand pointing right"
          width={26}
          height={26}
        />
        <p className="text-sm font-normal text-[#171A1FFF] text-left">
          New release of "Dropbox for Zoho CRM"
        </p>
        {/* <button></button> */}
        <Image
          src="/chevron-right.svg"
          alt="chevron pointing right"
          width={20}
          height={20}
        />
      </button>
    </li>
  );
};

export default function Home() {
  const data = {
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [77, 23],
        backgroundColor: ["#00BDD6FF", "#B3FFFF"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <main className="flex min-h-screen  items-center px-6">
      <div>
        <div className="w-[290px] mb-[36px] shadow-lg min-h-[239px] pt-4 pl-1.5 rounded-lg ">
          <h6 className="text-[16px] font-bold text-[#E05858FF] ">
            Task Status
          </h6>
          <div className="w-36 h-36 mx-auto">
            <Doughnut data={data} />
          </div>
        </div>
        <div className="w-[290px] mb-[36px] shadow-lg py-4 px-1.5 rounded-lg">
          <h6 className="text-[16px] font-bold text-[#E05858FF] ">
            Remaining Hours
          </h6>
          <p className="text-[32px] font-normal text-[#00BDD6FF]">25.25</p>
          <div className="flex justify-end">
            <button className="font-normal text-sm text-[#00BDD6FF] underline">
              Purchase Hours
            </button>
          </div>
        </div>
        <div className="w-[290px] min-h-[275px] bg-[#F3F4F6FF] rounded-md  shadow-lg flex flex-col items-center justify-center mb-8">
          <h6 className="text-lg font-bold text-[#E05858FF] mb-6">
            Latest News and Updates
          </h6>
          <ul>
            <LineElement />
            <LineElement />
            <LineElement />
            <LineElement />
          </ul>
        </div>
        <button className="bg-[#00BDD6FF] text-white w-full py-3 rounded">
          Send Message
        </button>
      </div>
      <div className="w-full">
        <iframe
          class="clickup-embed"
          src="https://sharing.clickup.com/6901392/l/h/6jkmg-6908/0fe02260af13ad6"
          onwheel=""
          width="100%"
          height="700px"
        ></iframe>
      </div>
    </main>
  );
}

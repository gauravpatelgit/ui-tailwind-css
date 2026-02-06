import { ArrowRight } from "lucide-react";
import React from "react";

function DuplicateFile() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-8 p-20 bg-[#060d20] ">
        <div className="border p-8 text-center rounded-2xl bg-[#10173a] hover:outline-1 hover:outline-[#3d4b64] duration-200">
          <div className="mt-5">
            <img
              src={
                "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_3_3f4b48d072.svg"
              }
            />
          </div>
          <h1 className="text-slate-50 mt-7 ml-0 text-xl font-bold flex flex-row">
            Use environments
          </h1>
          <p className="text-slate-50 font-light mt-4  flex flex-row text-left">
            We use Git-based source control to support environments. Use a
            push-pull pattern to move work between environments.
          </p>
          <div className="flex items-center mt-6 flex flex-row">
            <h1 className="text-[#51a2ff]   flex flex-row text-left">
              More on enviornments
            </h1>
            <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform duration-200 text-[#51a2ff] ml-2 cursor-pointer" />

          </div>
        </div>
        <div className="border p-4 text-center rounded-2xl bg-[#10173a] hover:outline-1 hover:outline-[#3d4b64]">
          <div className="mt-8">
            <img
              src={
                "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_1_758edcf31a.webp"
              }
            />
            <h1 className="text-slate-50 mt-10 ml-0 text-xl font-bold flex flex-row">
              Host on premise
            </h1>
            <p className="text-slate-50  mt-4 text-left ">
              We build our product on a fair code license. Check it out on
              GitHub and pick your favorite deployment option. Go fully
              on-premise with Docker or K8s in minutes. Run it air-gapped on
              your private network, or use our robust cloud solution. The
              community version is free, an enterprise license isn't.
            </p>
              <div className="flex items-center mt-10 gap-6">
            <h1 className="text-[#51a2ff]  flex flex-row text-left">
             Set it up
            </h1>
            <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform duration-200 text-blue-500 ml-2 cursor-pointer " />

          </div>
          </div>
        </div>
        <div className="border p-4 text-center  rounded-2xl bg-[#10173a] hover:outline-1 hover:outline-[#3d4b64]">
          <div>
            <img
              src={
                "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_4_f38d5a64b1.svg"
              }
            />
          </div>
          <h1 className="text-slate-50 mt-10 ml-0 text-xl font-bold flex flex-row">
            Scale Up
          </h1>
          <p className="text-slate-50  ml-0 text-left">
            Set up different execution modes based on your needs. Queue mode
            runs multiple instances with workers doing the brunt of the work and
            one main instance receiving workflow information. n8n handles up to
            220 workflow executions per second on a single instance.
          </p>
          <div>
            <h1 className="text-blue-500 mt-10 ml-0 text-xl font-bold  ">
               <div className="flex items-center mt-10 gap-6">
           <h1 className="text-[#51a2ff] flex flex-row text-lef">
              Get the details
            </h1>
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200 text-blue-500 ml-2 cursor-pointer " />

          </div>
            </h1>
          </div>
        </div>
        <div className="border p-4 text-center col-span-4 rounded-2xl bg-[#10173a] hover:outline-1 hover:outline-[#3d4b64]">
          <h1 className="text-slate-50 mt-10 ml-0 text-xl font-bold flex flex-row">
            Trust SOC 2
          </h1>
          <p className="text-slate-50  ml-0 text-left">
            Your data's security is our commitment. We are SOC 2 audited and
            regularly perform external pen tests.
          </p>
           <div className="flex items-center mt-10 gap-6">
            <h1 className="text-[#51a2ff]  flex flex-row text-lef">
              Read more
          
            </h1>
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200 text-blue-500 ml-2 cursor-pointer " />

          </div>
          <div className=" mt-5 justify-items-center">
            <img
              src={
                "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/card_2_60331a4920.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DuplicateFile;


import "./App.css";
import { ArrowRight } from "lucide-react";
const features = [
  {
    title: "Use enviornments",
    description:
      "We use Git-based source control to support environments. Use a push-pull pattern to move work between environments.",
    link: "More on enviornments",
    icon: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_3_3f4b48d072.svg",
    bgColor: "from-purple-600/10 to-blue-600/10",
    colSpan: "md:col-span-4",
  },
  {
    title: "Host on premise",
    description:
      "We build our product on a fair code license. Check it out on GitHub and pick your favorite deployment option. Go fully on-premise with Docker or K8s in minutes. Run it air-gapped on your private network, or use our robust cloud solution. The community version is free, an enterprise license isn't.",
    link: "Set it up",
    bgColor: "from-purple-600/10 to-blue-600/10",
    colSpan: "md:col-span-8",
    icon: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_1_758edcf31a.webp",
  },
  {
    title: "Scale Up",
    description:
      "Set up different execution modes based on your needs. Queue mode runs multiple instances with workers doing the brunt of the work and one main instance receiving workflow information. n8n handles up to 220 workflow executions per second on a single instance.",
    link: "Get the details",
    bgColor: "from-purple-600/10 to-blue-600/10",
    colSpan: "md:col-span-8",
    icon: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/test_4_f38d5a64b1.svg",
  },
  {
    title: "Trust SOC 2",
    description:
      "Your data's security is our commitment. We are SOC 2 audited and regularly perform external pen tests.",
    link: "Read more",
    bIcon:
      "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/card_2_60331a4920.png",
    bgColor: "from-purple-600/10 to-blue-600/10",
    colSpan: "md:col-span-4",
  },
];
function MainFile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 to-slate-800 p-8 md:p-16">
      <div className="max-w-7x1 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br ${feature.bgColor} backdrop-blur-xl p-8 transition-all duration-300 hover:border-slate-600 hover:shadow-2x1 hover:shadow-slate-600/20  `}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute-inset-0 rounded-2x1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
              </div>

              <div className="relative 2-10">
                {feature.icon && (
                  <img src={feature.icon} className="mb-6 text-4x1" />
                )}

                <h3 className="text-xl md:text-2x1 font-bold text-white mb-3 text-left">
                  {feature.title}
                </h3>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 text-left">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-2000 cursor-pointer group/link">
                  <span className="font-semibold text-sm md:text-base">
                    {feature.link}
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </div>

                {feature.bIcon && (
                  <div className="flex items-center justify-center mt-4">
                    <img src={feature.bIcon} className="mb-6 text-4x1 " />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainFile;

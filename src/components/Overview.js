import React from "react";
// Images.
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const data = [
  {
    title: "Page Views",
    icon: facebook,
    count: 87,
    percentage: 3,
    color: "text-emerald-600",
  },
  {
    title: "Likes",
    icon: facebook,
    count: 52,
    percentage: -2,
    color: "text-rose-600",
  },
  {
    title: "Likes",
    icon: instagram,
    count: 5462,
    percentage: 2257,
    color: "text-emerald-600",
  },
  {
    title: "Profile Views",
    icon: instagram,
    count: "52k",
    percentage: 1375,
    color: "text-emerald-600",
  },
  {
    title: "Retweets",
    icon: twitter,
    count: 117,
    percentage: 303,
    color: "text-emerald-600",
  },
  {
    title: "Likes",
    icon: instagram,
    count: 507,
    percentage: 553,
    color: "text-emerald-600",
  },
  {
    title: "Likes",
    icon: youtube,
    count: 107,
    percentage: -19,
    color: "text-rose-600",
  },
  {
    title: "Total Views",
    icon: youtube,
    count: 1407,
    percentage: -12,
    color: "text-rose-600",
  },
];

const Overview = () => {
  return (
    <>
      <h2 className="text-white font-semibold text-base md:text-3xl pb-5">Overview - Today</h2>
      <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <article key={index} className="bg-slate-800 p-5 rounded shadow shadow-slate-700">
            <ul className="flex items-center justify-between mb-5">
              <li className="text-slate-400 font-bold">{item.title}</li>
              <li><img src={item.icon} alt={item.title} /></li>
            </ul>
            <ul className="flex items-center justify-between">
              <li className="font-bold text-slate-300 text-3xl">{item.count}</li>
              <li className={`flex items-center font-bold text-sm ${item.color}`}>
                <img src={item.percentage >= 0 ? up : down} alt="" className="w-3 mr-2" />{Math.abs(item.percentage)}%
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  );
};

export default Overview;




























// import React from "react";
// // Images.
// import facebook from "../images/icon-facebook.svg";
// import twitter from "../images/icon-twitter.svg";
// import instagram from "../images/icon-instagram.svg";
// import youtube from "../images/icon-youtube.svg";
// import up from "../images/icon-up.svg";
// import down from "../images/icon-down.svg";

// const OverviewItem = ({ label, icon, value, trend, trendColor }) => {
//   return (
//     <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700">
//       <ul className="flex items-center justify-between mb-5">
//         <li className="text-slate-600 font-bold dark:text-slate-400">{label}</li>
//         <li><img src={icon} alt={label} /></li>
//       </ul>
//       <ul className="flex items-center justify-between">
//         <li className="font-bold text-slate-800 text-3xl dark:text-white">{value}</li>
//         <li className={`flex items-center font-bold text-sm ${trendColor}`}>
//           <img src={trend} alt="" className="w-3 mr-2" />
//           {trend}
//         </li>
//       </ul>
//     </article>
//   );
// };

// const Overview = () => {
//   return (
//     <>
//       <h2 className="text-white font-semibold text-base md:text-3xl pb-5">Overview - Today</h2>
//       <section className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

//         <OverviewItem
//           label="Page Views"
//           icon={facebook}
//           value="87"
//           trend="3%"
//           trendColor="text-emerald-600"
//         />

//         <OverviewItem
//           label="Likes"
//           icon={facebook}
//           value="52"
//           trend="2%"
//           trendColor="text-rose-600"
//         />

//         <OverviewItem
//           label="Likes"
//           icon={instagram}
//           value="5462"
//           trend="2257%"
//           trendColor="text-emerald-600"
//         />

//         <OverviewItem
//           label="Profile Views"
//           icon={instagram}
//           value="52k"
//           trend="1375%"
//           trendColor="text-emerald-600"
//         />

//         <OverviewItem
//           label="Retweets"
//           icon={twitter}
//           value="117"
//           trend="303%"
//           trendColor="text-emerald-600"
//         />

//         <OverviewItem
//           label="Likes"
//           icon={instagram}
//           value="507"
//           trend="553%"
//           trendColor="text-emerald-600"
//         />

//         <OverviewItem
//           label="Likes"
//           icon={youtube}
//           value="107"
//           trend="19%"
//           trendColor="text-rose-600"
//         />

//         <OverviewItem
//           label="Total Views"
//           icon={youtube}
//           value="1407"
//           trend="12%"
//           trendColor="text-rose-600"
//         />

//       </section>
//     </>
//   );
// };

// export default Overview;

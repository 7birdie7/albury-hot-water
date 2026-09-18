import PageHero from "@/components/PageHero"; import Link from "next/link";
export const metadata={title:"Hot Water Advice & Blog | Albury–Wodonga",description:"Practical hot-water advice for Albury–Wodonga homes, including repairs, replacement and heat-pump considerations."};
const posts=[
 ["No hot water? What to check before requesting help","/blog/no-hot-water-what-to-check","A safe, practical checklist that helps you describe the fault clearly.","/images/steam-shower.webp"],
 ["Is a heat-pump system suitable for Albury–Wodonga?","/blog/heat-pump-hot-water-albury-wodonga","Placement, winter conditions, household demand and the questions worth asking.","/images/heat-pump.webp"],
 ["Repair or replace your hot-water system?","/blog/repair-or-replace-hot-water-system","Use age, condition, fault type and likely repair cost to guide the conversation.","/images/system-inspection.webp"],
 ["Hot-water rebates for Albury and Wodonga","/blog/hot-water-rebates-albury-wodonga","A current starting point for NSW, Victorian and federal incentives.","/images/heat-pump.webp"],
 ["What is the best hot-water system for the Albury area?","/blog/best-hot-water-system-albury","Compare common options against climate, household demand and the property.","/images/system-options.webp"],
 ["Warning signs your hot-water system may be failing","/blog/hot-water-system-warning-signs","Recognise changes worth investigating before the water runs cold.","/images/twilight-home.webp"]
];
export default function Blog(){return <><PageHero eyebrow="Hot-water advice" title="Practical answers for better hot-water decisions" intro="Straightforward information for households, landlords and property managers across the border region." image="/images/murray-region.webp"/><main><section className="section"><div className="blog-grid">{posts.map(([t,h,d,img])=><article className="blog-card" key={h}><img src={img} alt=""/><div><p className="eyebrow">Advice</p><h2>{t}</h2><p>{d}</p><Link className="text-link" href={h}>Read article</Link></div></article>)}</div></section></main></>}

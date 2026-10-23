export interface StormStat {
  label: string;
  value: string;
}

export interface StormEvent {
  date: string;
  event: string;
}

export interface StormSection {
  title: string;
  body: string;
}

export interface StormHistorical {
  year: number;
  classification: string;
  summary: string;
  stats: StormStat[];
  comparison: string;
}

export interface StormFaq {
  question: string;
  answer: string;
}

export interface StormLink {
  title: string;
  href: string;
  body: string;
}

export interface StormArchive {
  name: string;
  code: string;
  year: number;
  classification: string;
  status: string;
  basin: string;
  pronunciation: string;
  summary: string;
  heroStats: StormStat[];
  live: {
    bulletin: string;
    rows: StormStat[];
    advisoryNumber: string;
    advisoryTime: string;
    nhcAdvisoryUrl: string;
    nhcSourceUrl: string;
  };
  timeline: StormEvent[];
  impact: StormSection[];
  historical: StormHistorical[];
  forecast: StormSection[];
  preparedness: StormSection[];
  faqs: StormFaq[];
  related: StormLink[];
}

export const arthur: StormArchive = {
  name: "Arthur",
  code: "AL012026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Post-tropical at final NHC advisory (0300 UTC June 18)",
  basin: "Atlantic",
  pronunciation: "AR-thur",
  summary:
    "Arthur was the first named storm of the 2026 Atlantic hurricane season. NHC's season summary, checked October 23, lists a peak intensity of 40 kt (about 45 mph) and a minimum pressure of 999 mb. Its June 17 advisories documented a short-lived tropical storm near the Texas coast and warned of dangerous inland rainfall. This archive separates those operational forecasts from observed positions; it does not present unverified casualty totals, damage estimates, or forecast rainfall as final observed impacts.",
  heroStats: [
    { label: "Peak winds (season summary)", value: "45 mph (40 kt)" },
    { label: "Min pressure", value: "999 mb" },
    { label: "ACE", value: "0.4 x10⁴ kt²" },
    { label: "Dates", value: "Jun 17–18, 2026" },
    { label: "Final NHC area", value: "Upper Texas coast" },
    { label: "NHC code", value: "AL012026" }
  ],
  live: {
    bulletin:
      "NHC's final public advisory was Advisory 8, issued at 10:00 PM CDT June 17 (0300 UTC June 18). It classified Arthur as post-tropical near 29.7N, 94.5W, about 35 miles north-northeast of Galveston, with 35 mph winds and 1000 mb pressure. NHC discontinued coastal watches and warnings but continued to warn of inland flooding. The season-summary figures below are separate from this final operational snapshot and may be revised; no storm-specific final Tropical Cyclone Report is linked in the reviewed October 23 summary.",
    rows: [
      { label: "Final advisory classification", value: "Post-Tropical Cyclone" },
      { label: "Season-summary peak", value: "40 kt (about 45 mph), minimum pressure 999 mb" },
      { label: "Final advisory position", value: "29.7N, 94.5W (Upper Texas coast)" },
      { label: "Final advisory wind / pressure", value: "35 mph / 1000 mb" },
      { label: "Final advisory movement", value: "Northeast at 9 mph" },
      { label: "Rainfall forecast in Advisory 8", value: "5-10 in; isolated totals near 20 in through early Friday" },
      { label: "Observed rainfall / surge totals", value: "Not established by the cited advisories" },
      { label: "Casualties / damage", value: "No storm-specific verified totals presented here" }
    ],
    advisoryNumber: "8 - final public advisory",
    advisoryTime: "0300 UTC June 18, 2026 (10 PM CDT June 17)",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/archive/2026/al01/al012026.public.008.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?text"
  },
  timeline: [
    { date: "Jun 16, 2026", event: "System designated Potential Tropical Cyclone One while organizing in the northwestern Gulf of Mexico." },
    { date: "Jun 17, 2026, 1630 UTC", event: "Special Advisory 6 reports Tropical Storm Arthur with maximum sustained winds of 45 mph." },
    { date: "Jun 17, 2026, 2100 UTC", event: "Advisory 7 locates Arthur about 20 miles north-northwest of Matagorda, Texas, with 45 mph winds, moving north-northeast at 7 mph." },
    { date: "Jun 18, 2026, 0300 UTC", event: "Final Advisory 8 classifies Arthur as post-tropical near the Upper Texas coast with 35 mph winds. Coastal watches and warnings end; the inland rainfall threat continues." },
    { date: "Oct 23, 2026 source check", event: "NHC's season summary lists Arthur for June 17-18, with 40 kt peak winds, 999 mb minimum pressure, and ACE of 0.4. These summary values are not a substitute for a final storm-specific report." }
  ],
  impact: [
    {
      title: "The rainfall forecast remained dangerous after weakening",
      body:
        "Final Advisory 8 forecast 5-10 inches of rain, with isolated totals near 20 inches, through early Friday from the Mid and Upper Texas coast into portions of Louisiana, Mississippi, Alabama, western Georgia, and the Florida Panhandle. NHC described the potential for dangerous to life-threatening flash flooding. Those numbers describe forecast storm totals and geographic possibilities, not a verified maximum at a rain gauge. Observed rainfall requires a dated WPC storm summary or station report. A storm losing its tropical classification does not end a local flood warning or make a flooded road safe."
    },
    {
      title: "Storm surge and coastal flooding",
      body:
        "Advisory 7 forecast the possibility of 1-3 feet of above-ground inundation somewhere from Matagorda, Texas, to the mouth of the Mississippi River if peak surge coincided with high tide. It emphasized that local water levels depend on timing and vary over short distances. Advisory 8 later reported elevated water along the Upper Texas coast and expected it to subside overnight. Neither statement establishes a measured peak depth at a particular location. Waves, rip currents, and rainfall flooding are separate hazards that require their own observations and official products."
    },
    {
      title: "Limits of the available impact record",
      body:
        "This page does not assign fatalities, financial losses, refinery shutdowns, or a precise landfall point from assumptions about the forecast track. The reviewed NHC season table does not provide storm-specific casualty or damage totals for Arthur, and no linked final Arthur report was available there at the October 23 check. A blank table entry is not evidence that no harm occurred. Readers researching a particular impact should use the storm-specific report when available and dated local emergency, rainfall, and coastal observations, keeping their measurement periods and locations attached to each number."
    },
    {
      title: "How 2026 Arthur compares with past Arthur storms",
      body:
        "Storm names are reused, so a name alone is not an identifier for a track or impact. Arthur in 2014 was a North Carolina hurricane; Arthur in 2020 was an offshore tropical storm; the 2026 record concerns AL012026 near the Texas coast. Keep the year and basin identifier with any archived map. A historical comparison can explain the range of hazards associated with a name, but cannot predict the path, strength, rainfall, or evacuation requirements of a later storm."
    }
  ],
  historical: [
    {
      year: 2014,
      classification: "Category 2 Hurricane",
      summary:
        "The 2014 Arthur was a Category 2 hurricane affecting the North Carolina Outer Banks. It is a separate storm from the 2026 Texas-coast system.",
      stats: [
        { label: "Peak winds", value: "100 mph (Category 2)" },
        { label: "Min pressure", value: "973 mb" },
        { label: "Landfall", value: "Shackleford Banks, NC" },
        { label: "NHC identifier", value: "AL012014" }
      ],
      comparison:
        "Compare the 2014 NHC report with the 2026 advisories rather than transferring wind, surge, or casualty figures between years."
    },
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "The 2020 Arthur was a May tropical storm near the U.S. Southeast coast. Its offshore track is a different record from Arthur's 2026 Texas-coast advisory history.",
      stats: [
        { label: "NHC identifier", value: "AL012020" },
        { label: "Season", value: "2020 - separate historical storm" }
      ],
      comparison:
        "Use the 2020 NHC archive for that storm's observations; none of its measurements establish conditions or impacts in 2026."
    }
  ],
  forecast: [
    {
      title: "NHC track and intensity forecast",
      body:
        "Advisory 7 reported 45 mph maximum sustained winds and 1001 mb pressure, and expected weakening as Arthur moved farther inland. At that time the center was north-northwest of Matagorda, moving north-northeast at 7 mph. Six hours later, Advisory 8 placed the post-tropical center north-northeast of Galveston, moving northeast at 9 mph. These are dated operational estimates, not an interpolation of the center's exact path between observations. For detailed track research, read the complete advisory archive and later best-track analysis rather than drawing a landfall conclusion from a single plotted point."
    },
    {
      title: "Why the rainfall forecast mattered most",
      body:
        "NHC's final advisory expected the remnants to cross the southeastern United States Thursday through Friday. It retained the heavy-rain forecast after all coastal watches and warnings were discontinued, and also described possible tornadoes and dangerous surf. This illustrates why tropical cyclone status and local hazard status must be checked separately. Forecast rainfall totals cover a stated time window; they should not be added to earlier forecasts as though every issuance predicts a new storm-total amount. For present-day decisions, historical advisories provide context only: use current WPC rainfall guidance, local NWS warnings, and local road and emergency information."
    }
  ],
  preparedness: [
    {
      title: "Treat weak storms as flood threats",
      body:
        "Arthur's lesson is that category and wind speed do not equal danger. If you live on the Gulf Coast, keep a flood plan: know your flood zone, elevate valuables, and never drive through flooded roads. A foot of moving water can float most vehicles."
    },
    {
      title: "Watch the rainfall, not just the cone",
      body:
        "The forecast cone shows where the center may go, not where rain will fall. Use NWS local forecasts and flood watches alongside the NHC track, especially when a system is slow or near land."
    },
    {
      title: "Pre-stage before landfall",
      body:
        "Charge devices, fill containers with water, and review your evacuation zone before a tropical storm approaches. Finish preparations while conditions and official instructions permit safe action."
    }
  ],
  faqs: [
    {
      question: "Was Arthur the first named storm of the 2026 season?",
      answer: "Yes. The National Hurricane Center upgraded Potential Tropical Cyclone One to Tropical Storm Arthur on June 17, 2026, making it the season's first named system."
    },
    {
      question: "Where was Arthur in its last 2026 NHC advisory?",
      answer: "At 0300 UTC June 18, Advisory 8 located post-tropical Arthur near 29.7N, 94.5W, about 35 miles north-northeast of Galveston. This operational position does not establish a precise final landfall location."
    },
    {
      question: "Why was Arthur dangerous if it was only a tropical storm?",
      answer: "Its danger came from rainfall and flooding, not wind. NHC warned of 5–10 inches of rain with isolated totals near 20 inches across the Gulf Coast and Southeast."
    },
    {
      question: "How does 2026 Arthur differ from 2014 Arthur?",
      answer: "2014 Arthur was a Category 2 North Carolina hurricane. The 2026 Arthur was a short-lived tropical storm near Texas whose advisories emphasized inland flooding. Their years, tracks, and observations must be kept separate."
    },
    {
      question: "Where can I verify Arthur's official data?",
      answer: "Use NHC's 2026 season summary and the persistent Arthur advisory archive. Advisory 8 is the final operational public advisory, not a post-season Tropical Cyclone Report. The season summary and any later report may revise operational estimates."
    }
  ],
  related: [
    { title: "Arthur 2026 advisory archive", href: "https://www.nhc.noaa.gov/archive/2026/ARTHUR.shtml", body: "Read the original dated NHC public advisories and forecast discussions." },
    { title: "Arthur 2014 advisory archive", href: "https://www.nhc.noaa.gov/archive/2014/ARTHUR.shtml", body: "Check the separate North Carolina hurricane record." },
    { title: "Arthur 2020 advisory archive", href: "https://www.nhc.noaa.gov/archive/2020/ARTHUR.shtml", body: "Check the separate May 2020 storm record." },
    { title: "Named storm trackers", href: "/hurricane-tracker/storm/", body: "Open live and archived trackers for active and past named storms." },
    { title: "Live hurricane tracker", href: "/hurricane-tracker/live/", body: "See all active NHC systems, radar, and current advisory links." },
    { title: "Texas hurricane tracker", href: "/tracker/texas/", body: "Texas-specific NWS alerts, surge, and local risk context." },
    { title: "Louisiana hurricane tracker", href: "/tracker/louisiana/", body: "Louisiana coastal alerts and planning context." },
    { title: "Storm surge forecasting", href: "/blog/hurricane-storm-surge-forecasting/", body: "Understand how surge is predicted and why it kills." },
    { title: "Read the hurricane cone", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", body: "Learn what the forecast cone does and does not show." },
    { title: "Storm distance calculator", href: "/tools/storm-distance-calculator/", body: "Compare your location with current NHC storm positions." },
    { title: "Storm archive", href: "/storm-archive/", body: "Browse current and historical storm records in one place." }
  ]
};

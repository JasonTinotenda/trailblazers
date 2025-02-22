import { ShieldCheckIcon, BoltIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const features = [
  {
    name: "1. Leadership Development",
    description: [
      "- Enhance leadership skills of young adults’ leaders and committees.",
      "- Discover gifts and identify future leaders.",
      "- Develop the gifts and leadership potential of individuals.",
      "- Deploy and launch gifted leaders into key places of influence.",
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: "2. Socio-economic Empowerment",
    description: [
      "- Create platforms that will address social issues affecting young people within PAOZ and young people in our communities.", 
      "- Provide economic empowerment and build influential young people with skills to generate income and entrepreneur skills which will see them making an impact in our church and beyond."
    ],
    icon: BoltIcon,
  },
  {
    name: "3. Networking",
    description: [
      "- Increase field visit and support amongst local churches, districts, provinces and regions.",
      "- Fostering fellowship amongst our young adults from local churches, district, provinces and regions.",
      "- The cross pollination of ideas and experiences in young adult’s ministry.",
      "- Encourage"
    ],
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "4. College and University Ministry",
    description: [
      "- Establish vibrant ministries in colleges and universities.",
      "- Offer practical, pastoral, spiritual and moral assistance to our PAOZ students based in these institutions.",
      "- Retain the membership of our students within the PAOZ Family regardless of where they are doing their studies.",
      "- Reach out to the lost students in a dynamic and relevant manner within the confines of our institutions of higher learning.",
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: "5. Spiritual impact",
    description: [
      "- Nurture young people spiritually.", 
      "- Foster spiritual growth in our young people.",
      "- Raise a generation of young people who have a hunger and thirst for God .",
      "- Build spiritually and doctrinally sound young people."
    ],
    icon: BoltIcon,
  },
  {
    name: "6. Ministry Impact",
    description: [
      "- Improve the quality and relevance of local church ministry.",
      "- To increase attendance and Participation of young adults in local meetings.",
      "- Enhance the PAOZ Brand through various activities and fulfilment of the PAOZ vision.",
      "- Encourage and expose our young people and help them realize their God given mandate.",
      "- Launch young adult’s ministry in all our local churches. "
    ],
    icon: DevicePhoneMobileIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-base font-semibold text-orange-600">Core Values</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
          Ministry Pillars & Objectives
          </p>
        <p className="m-6 text-lg text-gray-600">
          Dedicated to knowing Christ, sharing his message, and transforming lives.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-3 text-left">{feature.name}</h3>
              <ol className="text-gray-600  space-y-2">
                {feature.description.map((item, index) => (
                  <li key={index} className="mb-2 font-normal text-left">{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

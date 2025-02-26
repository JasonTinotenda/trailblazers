import { AcademicCapIcon, PresentationChartLineIcon } from '@heroicons/react/20/solid';
import wallpaper from '../assets/wallpaper07.jpg';

const features = [
  {
    name: 'Vision',
    description: 'To know Christ, Make Him known and Change the World',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Mission',
    description:
      'We are a Bible-based Pentecostal Church passionately fulfilling the Great Commission and engaged in social transformation.',
    icon: AcademicCapIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 px-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:px-8">
            <h2 className="text-base font-semibold text-orange-600">Learn More</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
              About Us
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Dedicated to knowing Christ, sharing his message, and transforming lives.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-700">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                  <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Image - Matches Left Container */}
          <div className="lg:px-8">
            <img
              alt="Product screenshot"
              src={wallpaper}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

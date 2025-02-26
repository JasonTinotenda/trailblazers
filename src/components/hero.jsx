import wallpaper from '../assets/wallpaper05.jpg';

const links = [
  { name: 'Mentorship Programs', href: '#' },
  { name: 'Socio-economic Empowerment', href: '#' },
  { name: 'Networking', href: '#' },
  { name: 'Campus Outreach', href: '#' },
  { name: 'Ministry & Spiritual Impact', href: '#' }
];

const stats = [
  { name: 'Active Trailblazers Programs', value: '350+' },
  { name: 'Active Campus Ministries', value: '5+' },
  { name: 'Ongoing Projects', value: '10' },
  { name: 'Active Weekly Services', value: '200' }
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Background Image */}
      <img
        alt=""
        src={wallpaper}
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black opacity-55"></div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 lg:px-4">
        <h2 className="text-5xl font-semibold  text-orange-600 sm:text-7xl">
          Welcome
        </h2>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          We are the Trailblazers
        </h3>
        <p className="mt-4 text-sm font-medium text-gray-300 sm:text-xl max-w-2xl">
        Seeing The Love and The Generosity of God
        As We Ignite The Local Church for Community Transformation
        </p>

        {/* Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-7 text-lg font-semibold text-white">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-orange-600">
              {link.name} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse gap-1 text-center">
              <dt className="text-base text-gray-300">{stat.name}</dt>
              <dd className="text-4xl font-semibold text-orange-600">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

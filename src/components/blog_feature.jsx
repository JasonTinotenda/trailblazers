import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import image01 from '../assets/image01.jpeg';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    imageUrl: image01,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    tags: ['Conversion', 'Sales', 'Growth'],
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    imageUrl: image01,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    tags: ['Conversion', 'Sales', 'Growth'],
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    imageUrl: image01,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    tags: ['Conversion', 'Sales', 'Growth'],
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-16 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold text-orange-600">Latest News</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
            From the Blog
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Stay up to date with the latest news and stories from the Trailblazers community.
          </p>
        </div>
        <div className="mt-10 sm:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <article className="flex flex-col items-start justify-between space-y-4">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">{post.description}</p>
                  <a href={post.href} className="text-blue-600 hover:underline text-sm font-semibold">Read More</a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:grid sm:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between space-y-4">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm text-gray-600">{post.description}</p>
              <a href={post.href} className="text-blue-600 hover:underline text-sm font-semibold">Read More</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

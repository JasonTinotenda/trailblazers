import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function NewsLetter() {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-600">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-500">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-neutral-100 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-400 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray-600" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-600">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-500">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-gray-600" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-600">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-500">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

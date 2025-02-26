import  { Component } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export class Faq extends Component {
  render() {
    return (
      <div>
        <section className="bg-white ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Frequently Asked Questions
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16  md:grid-cols-2">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    What do you mean by "Figma assets"?
                  </h3>
                  <p className="text-gray-500 ">
                    You will have access to download the full Figma project including all of the pages, the components,
                    responsive pages, and also the icons, illustrations, and images included in the screens.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    What does "lifetime access" exactly mean?
                  </h3>
                  <p className="text-gray-500 ">
                    Once you have purchased either the design, code, or both packages, you will have access to all of
                    the future updates based on the roadmap, free of charge.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    What does "free updates" include?
                  </h3>
                  <p className="text-gray-500 ">
                    The free updates that will be provided are based on the{' '}
                    <a href="#" className="font-medium underline text-primary-600  hover:no-underline">
                      roadmap
                    </a>{' '}
                    that we have laid out for this project. It is also possible that we will provide extra updates
                    outside of the roadmap as well.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    Can I use Windster in open-source projects?
                  </h3>
                  <p className="text-gray-500 ">
                    Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library,
                    a theme, a template, or a page-builder that would be considered an alternative to Windster itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Faq;

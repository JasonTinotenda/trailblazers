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
                    What is the trailblazers ministry?
                  </h3>
                  <p className="text-gray-500 ">
                    The trailblazers ministry is a community for individuals (13 - marriage) to grow in their faith, build relationships, and serve together.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    Do I have to be a member of the church to attend?
                  </h3>
                  <p className="text-gray-500 ">
                    No! Everyone is welcome, whether you are a church member or just looking to connect.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    Do I need to know a lot about the Bible to join?
                  </h3>
                  <p className="text-gray-500 ">
                    Not at all! Our group is open to all, whether you're new to faith or have been following Christ for years.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    <QuestionMarkCircleIcon className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " />
                    What topics do you study?
                  </h3>
                  <p className="text-gray-500 ">
                    We cover various topics, including books of the Bible, Christian living, relationships, and faith in everyday life.
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

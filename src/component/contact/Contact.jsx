import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

function SubmitForm(props) {


}





export const Contact = () => {
  return (
    <div>
    <h2 id="contact" class="mb-4 text-center mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Contact</h2>
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 container mx-auto " >
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
          
                    <form>
                      {/* <!--Name input--> */}
                      <p>Name</p>
                      <TEInput
                        type="text"
                        className="mb-6  border-2"
                      ></TEInput>
                      {/* <!--E-mail input--> */}
                      <p>Email</p>
                      <TEInput
                        type="email"
                        className="mb-6 border-2"
                      ></TEInput>

                      {/* <!--Message textarea--> */}
                      <p>Message</p>
                      <div className="relative mb-6">
                        <textarea
                          className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
                          id="exampleFormControlTextarea13"
                          rows={3}
                        ></textarea>
                        <label
                          htmlFor="exampleFormControlTextarea13"
                          className="peer-focus:bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary dark:peer-focus:bg-neutral-700"
                        >
                        </label>
                      </div>

                      {/* <!--Submit button--> */}
                      <TERipple rippleColor="light" className="w-full">
                        <button id="submit"
                          type="button"
                          className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          SEND MESSAGE
                        </button>
                      </TERipple>
                    </form>``

                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h2 className="mb-6 text-xl font-semibold">
                      Thank you for reaching out. 
                    </h2>
                    <p className="text-sm">
                      Please send me a message if you have any further questions or need more details about my projects.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
import DingImg from "./assets/UX/Ding/mobDing.png";

function BlogDetail() {
  return (
    <>
      {/* <!-- http://drive.google.com/uc?export=view&id=1oR8IS8-zduKYzl4YdMachbtCpoP6zz-9 --> */}
      <div className="flex justify-center text-white bg-slate-800">
        <div className="flex items-center flex-col">
          <img
            className="flex lg:h-1/2 w-full object-cover lg:rounded-md
                    lg:w-5/6"
            src={DingImg}
            alt="Ding design"
          />

          <div
            className=" flex flex-col w-full h-screen
                    items-center"
          >
            <div
              className=" flex flex-wrap w-3/4 justify-start
                        text-justify
                        text-sm"
            >
              <div className="w-full lg:w-1/2 lg:pr-6">
                {/* <!-- content title of the blog --> */}
                <div
                  className="flex items-center h-8
                                justify-between
                                mt-8
                                mb-4"
                >
                  <h2
                    className="flex flex-col text-xl font-semibold
                                    text-orange-500"
                  >
                    Ding Mobile Topup
                  </h2>

                  <div className="flex items-center">
                    <span className="text-sm">3 👍</span>
                    <span className="text-sm mx-6">jan 2 , 2022</span>
                  </div>
                </div>

                {/* <!-- blog details in paragraph --> */}
                <p className="mt-6">
                  It is estimated that more than 3 million Ethiopians reside
                  abroad. North America, Europe, and the Gulf are Ethiopian
                  migrants' top destinations. Most of the time, they find it
                  tough to find ways to assist their loved ones, and most of the
                  time it takes longer time, and about 90% of them have
                  relatives living inside of Ethiopia, which they support by any
                  form of income they gained there. The majority of them
                  struggle with how to transmit any kind of assistance, like
                  money, documents, or in our case, cell top-up platforms,
                  across the country. However, there are some that can aid them
                  with this process but are a bit challenging for them to use.
                </p>
                <p className="mt-6">
                  I discovered a website called [Ding] that aids those other
                  nations in assisting them in resolving the issues they were
                  having, in showing their love and support for those in need
                  by, among other things, providing them with gifts that include
                  mobile top-ups from their country, which will greatly benefit
                  them and make them smile. This sample design is simply a copy
                  of the website changed into a mobile application, which I had
                  the opportunity to register for and use a few times. It's a
                  wonderful way to support your family and a kind gesture. Once
                  you enter their phone number on the app, sending a mobile
                  top-up to your loved ones living in Ethiopia takes just one
                  click. You can even send them money on a weekly, biweekly, or
                  monthly basis.
                </p>

                <p className="mt-6">
                  I truly hope that this concept is embraced by my country and
                  that many of my fellow countrymen use it. It is estimated that
                  more than 3 million Ethiopians reside abroad. North America,
                  Europe, and the Gulf are Ethiopian migrants' top destinations.
                  Most of the time, they find it tough to find ways to assist
                  their loved ones, and most of the time it takes longer time,
                  and about 90% of them have relatives living inside of
                  Ethiopia, which they support by any form of income they gained
                  there. The majority of them struggle with how to transmit any
                  kind of assistance, like money, documents, or in our case,
                  cell top-up platforms, across the country. However, there are
                  some that can aid them with this process but are a bit
                  challenging for them to use.
                </p>
              </div>

              {/* <!-- side detail with the tags of the blog --> */}
              <div className="w-full lg:w-1/2 lg:pl-6 lg:mt-16">
                <p className="mt-6">
                  It is estimated that more than 3 million Ethiopians reside
                  abroad. North America, Europe, and the Gulf are Ethiopian
                  migrants' top destinations. Most of the time, they find it
                  tough to find ways to assist their loved ones, and most of the
                  time it takes longer time, and about 90% of them have
                  relatives living inside of Ethiopia, which they support by any
                  form of income they gained there. The majority of them
                  struggle with how to transmit any kind of assistance, like
                  money, documents, or in our case, cell top-up platforms,
                  across the country. However, there are some that can aid them
                  with this process but are a bit challenging for them to use.
                  It is estimated that more than 3 million Ethiopians reside
                  abroad.
                </p>

                <p className="mt-6">
                  North America, Europe, and the Gulf are Ethiopian migrants'
                  top destinations. Most of the time, they find it tough to find
                  ways to assist their loved ones, and most of the time it takes
                  longer time, and about 90% of them have relatives living
                  inside of Ethiopia, which they support by any form of income
                  they gained there. The majority of them struggle with how to
                  transmit any kind of assistance, like money, documents, or in
                  our case, cell top-up platforms, across the country. However,
                  there are some that can aid them with this process but are a
                  bit challenging for them to use.
                </p>

                <div className="flex text-sm flex-wrap gap-3 my-6 ">
                  <div className="tag2">Developed</div>
                  <div className="tag2">UI Design</div>
                  <div className="tag2">Case Studies</div>

                  <div className="tag2">Business Cards</div>
                  <div className="tag2">Booklets</div>
                  <div className="tag2">UI Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div className="flex flex-col rounded-xl w-max h-min sticky top-10 
        bg-slate-50">
        <h2 className="m-6 text-slate-500 text-xl font-semibold">Comments</h2>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 1</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 2</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="rounded-xl flex bg-slate-100 p-4 mt-1 mx-8
                    "
        >
          <div className="bg-slate-500 h-[50px] w-[50px] rounded-md "></div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">Anonymus user 3</h3>
              <span className="text-xs">June 12 ,2022</span>
            </div>

            <p className="w-11/12">
              I really would like to appreciate what you did there and keep it
              up..
            </p>
          </div>
        </div>
        <div
          className="shadow-2xl
                    flex
                    bg-white justify-between
                    m-8
                    p-3 items-center rounded

                    "
        >
          <Input
            type="search"
            placeholder="Type something here..."
            className="
                        outline-none h-10 rounded w-11/12 p-2 border-none
                        "
          ></Input>
          <div
            className="h-10 w-10 rounded shadow-lg items-center
                    justify-center flex
                    bg-slate-200"
          >
            📤
          </div>
        </div>{" "}
        --> */}
      </div>

      <div className="h-32"></div>
    </>
  );
}

export default BlogDetail;

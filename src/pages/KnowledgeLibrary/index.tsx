
const KnowledgeLibrary = () => {

    return (
<>
      <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              KDD
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Developers, Developers, Developers!
            </p>
          </div>


          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Development Documentation
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Data Documentation
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Integration Documentation
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Architecture Documentation
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-12 text-xl font-bold underline ">Products</h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
          {Array.from(Array(10).keys()).map((item, i) => {return (
            <li key={i} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 ">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      Road Builder 9000
                    </h3>

                  </div>
                  <p className="mt-1  text-sm text-gray-500">
                    The Road Builder 9000 is a revolutionary new product that will revolutionize the way we build roads.
                  </p>
                </div>
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src="https://cdn-icons-png.flaticon.com/512/201/201945.png"
                  alt=""
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href="mailto:janecooper@example.com"
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      
                      <span className="ml-3">Manage</span>
                    </a>
                  </div>
                 
                </div>
              </div>
            </li>
          )})
          }
            

          </ul>


        </div>
      </div>
    </>
    )
}

export default KnowledgeLibrary;
import ProductsLayout from "@/components/ProductsLayout";

const InfrastructureHealth = () => {
  return (
    <ProductsLayout>
      <div className="p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pt-6">
          Infrastructure Health
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Production Services Availability
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
     
                <span className="ml-2 text-sm font-medium text-gray-500">
                  API
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                Up
              </div>
            </dd>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
     
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Web
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                Up
              </div>
            </dd>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
     
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Database
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                Up
              </div>
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Time to Restore Service
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                1
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Month
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only"> Increased by </span>
                12%
              </div>
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Lead time for Change
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                2
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Months
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only"> Increased by </span>
                12%
              </div>
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="text-base font-normal text-gray-900">
              Change Failure Rate
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                3
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Issues
                </span>
              </div>

              <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                <svg
                  className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only"> Increased by </span>
                12%
              </div>
            </dd>
          </div>
        </dl>
      </div>

      <div className="p-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                Long Running Queries
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                All the queries in the last 5 days lasting longer than 5
                seconds.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Query
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          May 4, 2021 12:00:00 AM
                        </td>

                        <td className=" px-3 py-4 text-sm text-gray-500 break-normal">
                          SELECT DISTINCT Name FROM Production.Product WHERE
                          ProductModelID IN (SELECT ProductModelID FROM
                          Production.ProductModel AS pm WHERE p.ProductModelID =
                          pm.ProductModelID AND Name LIKE );
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Log</h1>
              <p className="mt-2 text-sm text-gray-700">
                All the queries in the last 5 days lasting longer than 5
                seconds.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Environment
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Severity
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Message
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          May 4, 2021 12:00:00 AM
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          Production
                        </td>
                        <td className=" px-3 py-4 text-sm text-red-500 break-normal ">
                          Error
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          John
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          Check the render method of `ProductsLayout`. See
                          https://reactjs.org/link/warning-keys for more
                          information. <br />
                          at ProductsLayout
                          (webpack-internal:///./src/components/ProductsLayout.tsx:58:74)
                          <br />
                          at ProjectHealth
                          <br />
                          at App
                          (webpack-internal:///./src/pages/_app.tsx:12:11)
                          <br />
                          at PathnameContextProviderAdapter
                          (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:62:11)
                          <br />
                          at ErrorBoundary
                          (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:301:63)
                          <br />
                          at ReactDevOverlay
                          (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:850:919)
                          <br />
                          at Container
                          (webpack-internal:///./node_modules/next/dist/client/index.js:62:1)
                          <br />
                          at AppContainer
                          (webpack-internal:///./node_modules/next/dist/client/index.js:172:11)
                          <br />
                          at Root
                          (webpack-internal:///./node_modules/next/dist/client/index.js:347:11)
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductsLayout>
  );
};

export default InfrastructureHealth;

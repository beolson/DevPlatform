import ProductsLayout from "@/components/ProductsLayout";

const InfrastructureHealth = () => {
  return (
    <ProductsLayout>
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
            <h1 className="text-xl font-semibold text-gray-900">
              Log
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              All the queries in the last 5 days lasting longer than 5 seconds.
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

                      <td className=" px-3 py-4 text-sm text-red-500 break-normal ">
                        Error
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        John
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Check the render method of `ProductsLayout`. See https://reactjs.org/link/warning-keys for more information. <br/>
                        at ProductsLayout (webpack-internal:///./src/components/ProductsLayout.tsx:58:74)<br/>
                        at ProjectHealth<br/>
                        at App (webpack-internal:///./src/pages/_app.tsx:12:11)<br/>
                        at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:62:11)<br/>
                        at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:301:63)<br/>
                        at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:850:919)<br/>
                        at Container (webpack-internal:///./node_modules/next/dist/client/index.js:62:1)<br/>
                        at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:172:11)<br/>
                        at Root (webpack-internal:///./node_modules/next/dist/client/index.js:347:11)<br/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </ProductsLayout>
  );
};

export default InfrastructureHealth;

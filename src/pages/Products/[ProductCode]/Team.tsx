import ProductsLayout from "@/components/ProductsLayout"


const Team = () => {
    return (


<ProductsLayout>
<div className="py-6">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
  </div>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div className="py-4">
    <div className="px-4 sm:px-6 lg:px-8">
  <div className="sm:flex sm:items-center">
    <div className="sm:flex-auto">

      <p className="mt-2 text-sm text-gray-700"></p>
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add user</button>
    </div>
  </div>
  <div className="mt-8 flex flex-col">
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Bob The Great</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Developer</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Product Owner</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Jimmy</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">QA</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></a>
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
  </div>
</div>
</ProductsLayout>
    )
}

export default Team
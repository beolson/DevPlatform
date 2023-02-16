import { useState } from "react";

const CreateProductModal = (props: { onFinish: () => void }) => {
  
  const [productCode, setProductCode] = useState("");

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => props.onFinish()}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-5 sm:mt-4  sm:flex-row-reverse">
              <form className="space-y-8 ">
                <div className="space-y-8">
                  <div className="space-y-6 sm:space-y-5">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        New Product
                      </h3>
                    </div>
                  </div>

                  <div className="">
                    <div className="space-y-6 sm:space-y-5">
                      <div className="sm:grid sm:grid-cols-3 sm:items-start ">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          3 Letter Product Code
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                          <input
                            type="text"
                            name="ProductCode"
                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                            value={productCode}
                            onChange={(e) => setProductCode(e.target.value)}
                          />
                          {productCode === "abc" && (
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-red-700 sm:mt-px sm:pt-2"
                            >
                              Code Not Found
                            </label>
                          )}

                          {productCode === "bcd" && (
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-red-700 sm:mt-px sm:pt-2"
                            >
                              Product not in Execute Phase
                            </label>
                          )}

                          {productCode === "cde" && (
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-red-700 sm:mt-px sm:pt-2"
                            >
                              Blueprint not found
                            </label>
                          )}
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:items-start ">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Backend Template
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                          <select
                            id="country"
                            name="country"
                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                          >
                            <option>.NET IDesign</option>
                            <option>Python Flask</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:items-start ">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Frontend Template
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                          <select
                            id="country"
                            name="country"
                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                          >
                            <option>CRA React JS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Create Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;

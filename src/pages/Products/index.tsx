import CreateProductModal from "@/components/CreatProductModal";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <CreateProductModal onFinish={() => setShowModal(false)} />}
      <div className="relative bg-gray-50 px-6 pt-8 pb-20 lg:px-8 lg:pt-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex justify-between	">
            <h2 className="text-xl font-bold underline ">Products</h2>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowModal(true)}
            >
              Create new Product
            </button>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
            {Array.from(Array(10).keys()).map((item, i) => {
              return (
                <li
                  key={i}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 ">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900">
                          Road Builder 9000
                        </h3>
                      </div>
                      <p className="mt-1  text-sm text-gray-500">
                        The Road Builder 9000 is a revolutionary new product
                        that will revolutionize the way we build roads.
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
                        <Link
                          href="Products/RBN"
                          className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          <span className="ml-3">Manage</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;

import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const MenuItems = [
  {
    title: "Dashboard",
    page: "",
    badge: 24,
    childMenu: [
      { title: "Project Health", page: "ProjectHealth" },
      {
        title: "Infrastructure Health",
        page: "InfrastructureHealth",
        
      },
      { title: "Product Health", page: "ProductHealth" },
      { title: "Security Health", page: "SecurityHealth" },
      { title: "Code Health", page: "CodeHealth" },
    ],
  },
  { title: "Team", page: "Team" },
  { title: "Environments", page: "Environments" },
  { title: "Documentation", page: "Documentation" },
];

export default function ProductsLayout(props: { children: ReactNode }) {
  const router = useRouter();
  const { ProductCode } = router.query;

  console.log("here", router.query);

  return (
    <div className="bg-gray-200">
      <div className="relative z-40 md:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
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

            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              Road Builder 9000
            </div>
            <div className="mt-5 h-0 flex-1 overflow-y-auto">
              <nav className="space-y-1 px-2">
                {MenuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={`/Products/${ProductCode}/${item.page}`}
                    // className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    className=" text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Dashboard
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
        </div>
      </div>

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col ">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto mr-4"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            Road Builder 9000
          </div>
          <div className="mt-5 flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {MenuItems.map((item) => (
                <>
                  <Link
                    key={item.page}
                    href={`/Products/${ProductCode}/${item.page}`}
                    // className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    className=" text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    {item.title}{" "}
                    {item.badge && (
                      <span className="bg-gray-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>{" "}
                  <ul
                    role="list"
                    className=" ml-5 mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                  >
                    {item.childMenu &&
                      item.childMenu.map((child) => (
                        <li key={child.page} className="relative">
                          <Link
                            className=" text-sm block w-full pl-3.5 before:pointer-events-none before:absolute 
                                
                                 text-slate-500 before:hidden 
                                hover:text-slate-600  dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                            href={`/Products/${ProductCode}/${child.page}`}
                          >
                            {child.title}
                            {/* {child.badge && (
                              <span className="bg-red-100 group-hover:bg-gray-200 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full">
                                {child.badge}
                              </span>
                            )} */}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64 bg-gray-200">
        <main className="flex-1">{props.children}</main>
      </div>
    </div>
  );
}

import { useState } from "react";
import Panel from "./panel";
import { Link, useLoaderData } from "@remix-run/react";
import {
  DESCRIPTION_SHORT_APP,
  NAME_APP,
  URL_GROUP_WHATSAPP_FREE,
} from "../../utils/info";
import ModalForVIP from "./modalForVIP";

export default function Layout({ children }) {
  const [showPanel, setshowPanel] = useState(false);
  const [showModalVIP, setshowModalVIP] = useState(false);
  const { user, userIsLogin } = useLoaderData();
  const isVIP = user?.isVIP;

  return (
    <>
      <ModalForVIP show={showModalVIP} setShow={setshowModalVIP} />
      <div id="__next">
        <div className="overflow-hidden w-full h-full relative flex z-0">
          <Panel showPanel={showPanel} />

          <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
            <div className="flex h-full max-w-full flex-1 flex-col">
              <div
                className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden"
                id="he_mo"
              >
                <button
                  onClick={() => setshowPanel(!showPanel)}
                  type="button"
                  className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white"
                >
                  {showPanel ? (
                    <i
                      className="fa-solid fa-xmark"
                      style={{ fontSize: "18px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-bars"
                      style={{ fontSize: "18px" }}
                    ></i>
                  )}
                </button>
                <h1 className="flex-1 text-center text-base font-normal">
                  {DESCRIPTION_SHORT_APP}...
                </h1>
                <Link to={URL_GROUP_WHATSAPP_FREE} target="_blank">
                  <button type="button" className="px-3" id="btn_wp">
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ fontSize: "28px" }}
                    ></i>
                  </button>
                </Link>
              </div>

              <main className="relative bg_2_global h-full w-full transition-width overflow-auto flex-1">
                <div role="presentation" className="flex h-full">
                  <div className="flex-1 overflow-hidden">
                    <div className="react-scroll-to-bottom--css-zbswv-79elbk h-full dark:bg-gray-800">
                      <div className="react-scroll-to-bottom--css-zbswv-1n7m0yu">
                        <div className="flex flex-col text-sm dark:bg-gray-800 h-full">
                          <div className="flex h-full relative flex-col items-center justify-between pb-64">
                            <div className="px-2 w-full flex flex-col py-2 md:py-6 sticky top-0">
                              <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                                <div className="relative flex rounded-xl bg_3_global p-1 dark:bg-gray-900">
                                  <ul className="flex w-full list-none gap-1 sm:w-auto">
                                    <li
                                      className="group/toggle w-full"
                                      data-testid="text-davinci-002-render-sha"
                                    >
                                      <button
                                        type="button"
                                        id="radix-:rff:"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                        className="w-full cursor-pointer"
                                      >
                                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                                          <span className="truncate text-sm font-medium md:pr-1.5">
                                            VERSION GRATIS
                                          </span>
                                          <span className="max-[370px]:hidden relative">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              className="icon-sm transition-colors text-brand-green"
                                              width="16"
                                              height="16"
                                            >
                                              <path
                                                d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
                                                fill="currentColor"
                                              ></path>
                                            </svg>
                                          </span>
                                          <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon-sm toggle-item-button-closed ml-0.5 text-gray-500"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                          </svg>
                                        </div>
                                      </button>
                                    </li>
                                    <li
                                      className="group/toggle w-full"
                                      data-testid="gpt-4-upsell"
                                    >
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (!isVIP) {
                                            setshowModalVIP(true);
                                          }
                                        }}
                                        id="radix-:rfh:"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                        className="w-full cursor-pointer"
                                      >
                                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:dark:text-gray-100">
                                          <span className="truncate text-sm font-medium md:pr-1.5">
                                            VERSION VIP
                                          </span>
                                          {isVIP ? (
                                            <i className="fa-solid fa-lock-open"></i>
                                          ) : (
                                            <>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="icon-sm   transition-colors sm:ml-0 group-hover/options:text-gray-500 !text-gray-500 -ml-2 group-hover/button:text-brand-purple"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                                  clipRule="evenodd"
                                                ></path>
                                              </svg>
                                              <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon-sm toggle-item-button-closed ml-0.5 text-gray-500"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                              </svg>
                                            </>
                                          )}
                                        </div>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div
                              id="content_main"
                              className="align-center relative overflow-y-scroll overscroll-auto text-white font-medium flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh] flex-grow"
                            >
                              <h1 className="ttapp text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-0  flex gap-2 items-center justify-center flex-grow">
                                {NAME_APP}
                              </h1>
                              <div
                              id="sm_content"
                                style={{
                                  color: "whitesmoke",
                                  fontSize: "18px",
                                }}
                                className="p-4 pb-7 fixed w-full overflow-y-scroll"
                              >
                                {children}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

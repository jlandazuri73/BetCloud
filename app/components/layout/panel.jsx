import { Form, Link, useLoaderData } from "@remix-run/react";
import {
  NAME_APP,
  URL_GROUP_WHATSAPP_FREE,
  URL_GROUP_WHATSAPP_VIP,
} from "../../utils/info";

export default function Panel({ showPanel }) {
  const { userIsLogin, user } = useLoaderData();
  const isVIP = user?.isVIP;
  const isAdmin = user?.role?.name === "ADMIN";

  return (
    <>
      <div
        id="panel_items"
        className={`flex-shrink-0 overflow-x-hidden dark hidden sm:hidden bg-gray-900 md:block ${
          showPanel ? "panel_mobile" : ""
        } `}
        style={{ width: "260px" }}
      >
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col ">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <nav
                className="flex h-full w-full flex-col p-2"
                aria-label="Historial del Chat"
              >
                <div className="mb-1 flex flex-row gap-2">
                  <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white text-sm rounded-md dark:border-white/20  h-11 bg-white dark:bg-transparent flex-grow overflow-hidden">
                    {user?.profile ? (
                      <img
                        src={user?.profile}
                        alt={"Perfil de " + user?.name + " en " + NAME_APP}
                        className="w-7 h-7 rounded-full"
                      />
                    ) : (
                      <i className="fa-solid fa-user"></i>
                    )}
                    <span className="truncate">
                      {user?.name || "Estas desconectado (a)"}
                    </span>
                  </a>
                </div>
                <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                  <div className="flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm">
                    <div>
                      <span>
                        <div
                          className="relative"
                          style={{ height: "auto", opacity: "1" }}
                        >
                          <ol>
                            <li
                              className="relative z-[15]"
                              style={{ opacity: "1", height: "auto" }}
                            >
                              <a className="flex py-3 px-3 item_panel items-center gap-3 relative rounded-md  cursor-pointer break-all bg-gray-50 hover:pr-4 dark:bg-gray-900 group">
                                <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                  ¿Como apostar?
                                </div>
                              </a>
                            </li>
                            <li
                              className="relative z-[15]"
                              style={{ opacity: "1", height: "auto" }}
                            >
                              <a className="flex py-3 px-3 item_panel items-center gap-3 relative rounded-md  cursor-pointer break-all bg-gray-50 hover:pr-4 dark:bg-gray-900 group">
                                <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                  Nuestras recomendaciones
                                </div>
                              </a>
                            </li>
                            <li
                              className="relative z-[15]"
                              style={{ opacity: "1", height: "auto" }}
                            >
                              <a className="flex py-3 px-3 item_panel items-center gap-3 relative rounded-md  cursor-pointer break-all bg-gray-50 hover:pr-4 dark:bg-gray-900 group">
                                <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                  Mercados más efectivos
                                </div>
                              </a>
                            </li>
                            <li
                              className="relative z-[15]"
                              style={{ opacity: "1", height: "auto" }}
                            >
                              <a className="flex py-3 px-3 item_panel items-center gap-3 relative rounded-md  cursor-pointer break-all bg-gray-50 hover:pr-4 dark:bg-gray-900 group">
                                <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                  Mejores casas de apuestas
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-black/20 pt-2 empty:hidden dark:border-white/20">
                  {showPanel && (
                    <div className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm   rounded-md">
                      <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                        <span className="gold-new-button flex items-center gap-3">
                          {user?.profile ? (
                            <img
                              src={user?.profile}
                              alt={
                                "Perfil de " + user?.name + " en " + NAME_APP
                              }
                              className="w-7 h-7 rounded-full"
                            />
                          ) : (
                            <i className="fa-solid fa-user"></i>
                          )}
                          {user?.name || "Estas desconectado (a)"}
                        </span>
                      </span>
                    </div>
                  )}

                  {isAdmin && (
                    <Link
                      to={"/admin/"}
                      className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-blue-800 rounded-md"
                    >
                      <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                        <span className="gold-new-button flex items-center gap-3">
                          <i
                            className="fa-solid fa-shield-halved"
                            style={{ fontSize: "20px" }}
                          ></i>
                          Administración
                        </span>
                      </span>
                    </Link>
                  )}

                  <Link
                    to={
                      isVIP ? URL_GROUP_WHATSAPP_VIP : URL_GROUP_WHATSAPP_FREE
                    }
                    target="_blank"
                    id="btn_go_wp"
                    className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  >
                    <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                      <span className="gold-new-button flex items-center gap-3">
                        <i
                          className="fa-brands fa-whatsapp"
                          style={{ fontSize: "22px" }}
                        ></i>
                        Grupo de WhatsApp
                      </span>
                      <span className="rounded-md bg-blue-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
                        {isVIP ? "VIP" : "GRATIS"}
                      </span>
                    </span>
                  </Link>
                  <div className="group relative">
                    {userIsLogin ? (
                      <Form method="post" action="/logout">
                        <button
                          className="flex btn_logout w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors duration-200 group-ui-open:bg-gray-100  dark:group-ui-open:bg-gray-800"
                          type="submit"
                          id="headlessui-menu-button-:ro0:"
                        >
                          <div className="grow overflow-hidden text-ellipsis whitespace-nowrap flex items-center text-left text-gray-700 dark:text-white">
                            <i
                              className="fa-solid fa-right-from-bracket mr-3"
                              style={{ fontSize: "20px" }}
                            ></i>
                            <div className="font-semibold">Cerrar sesión</div>
                            <div className="text-xs text-gray-500"></div>
                          </div>
                        </button>
                      </Form>
                    ) : (
                      <Link to={"/accounts/login"}>
                        <button className="flex mt-2 text-white hover:bg-blue-600 font-bold text-md bg-blue-500 w-full items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-200">
                          <i className="fa-solid fa-user"></i>
                          Entrar o registrarme
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

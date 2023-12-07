import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const SalesReportingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_9.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg_85X85.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start p-2 w-full">
                    <Line className="bg-blue-A700 h-6 my-[9px] w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-center my-2 w-[36%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_analyticssolid.svg"
                        alt="analyticsSolid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Report
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
              <Text
                className="text-gray-900_01 text-lg"
                size="txtGilroySemiBold18Gray90001"
              >
                Dashboard
              </Text>
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between rounded-md w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[65px] grid sm:grid-cols-1 grid-cols-2 w-[47%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-2 rounded-md shadow-bs2 w-full">
                      <Text
                        className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                        size="txtGilroySemiBold28BlueA700"
                      >
                        $2500
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtGilroyMedium16Black900"
                      >
                        January
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-2 rounded-md shadow-bs2 w-full">
                      <Text
                        className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                        size="txtGilroySemiBold28BlueA700"
                      >
                        $3700
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtGilroyMedium16Black900"
                      >
                        February
                      </Text>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col gap-[21px] items-start justify-end p-[13px] rounded-md shadow-bs2">
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                      size="txtGilroySemiBold28BlueA700"
                    >
                      $1660
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      March
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end p-2 rounded-md shadow-bs2">
                    <Text
                      className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                      size="txtGilroySemiBold28BlueA700"
                    >
                      $1280
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      April
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-5 items-start justify-start p-4 rounded-lg w-[71%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] w-[97%] md:w-full">
                        <Text
                          className="text-gray-900_01 text-lg"
                          size="txtGilroySemiBold18Gray90001"
                        >
                          Total Revenue
                        </Text>
                        <div className="bg-blue-50 flex sm:flex-col flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[150px] p-2 rounded-md w-[57%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[38px] ml-2 sm:ml-[0] text-center text-xs"
                            shape="round"
                          >
                            24H
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[33px] text-center text-xs"
                            shape="round"
                          >
                            1W
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[30px] text-center text-xs"
                            shape="round"
                          >
                            1M
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[33px] text-center text-xs"
                            shape="round"
                          >
                            3M
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[33px] text-center text-xs"
                            shape="round"
                          >
                            6M
                          </Button>
                          <Button
                            className="cursor-pointer font-bold text-center text-xs w-[29px]"
                            shape="round"
                            color="blue_A700"
                          >
                            1Y
                          </Button>
                          <Button
                            className="cursor-pointer font-medium min-w-[59px] mr-2 text-center text-xs"
                            shape="round"
                          >
                            All Time
                          </Button>
                        </div>
                        <Img
                          className="h-6 ml-4 md:ml-[0] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-start ml-2 md:ml-[0] w-[35%] md:w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01"
                          size="txtGilroyBold28Gray90001"
                        >
                          $236,535
                        </Text>
                        <div className="flex flex-row gap-3.5 items-center justify-between w-[46%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_floatingicon.svg"
                            alt="floatingicon"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-[15px] text-blue-A700"
                              size="txtGilroyMedium15"
                            >
                              0.8%
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyRegular12Bluegray400"
                            >
                              Than last Day
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start ml-2 md:ml-[0] w-[99%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-2">
                            <Text
                              className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              7000$
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              6000$
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              5000$
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              4000$
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              3000$
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              2000$
                            </Text>
                            <Text
                              className="ml-1 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              1000$
                            </Text>
                          </div>
                          <div className="h-[252px] relative w-[91%] md:w-full">
                            <div className="absolute h-[199px] inset-x-[0] mx-auto top-[6%] w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col gap-8 items-center justify-start w-full">
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                  <Line className="bg-blue_gray-300 h-[1.24px] w-full" />
                                </div>
                              </div>
                              <Img
                                className="absolute h-[161px] inset-x-[0] mx-auto top-[6%] w-[83%]"
                                src="images/img_vector.svg"
                                alt="Vector"
                              />
                            </div>
                            <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-[93%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2015
                                </Text>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[52px] grid grid-cols-2 w-[19%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col gap-2.5 items-center justify-start sm:ml-[0] w-full">
                                  <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    2016
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-2.5 items-center justify-start sm:ml-[0] w-full">
                                  <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtGilroyRegular14Bluegray900"
                                  >
                                    2017
                                  </Text>
                                </div>
                              </List>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2018
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2019
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[6%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2020
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2021
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-[6%]">
                                <Line className="bg-blue_gray-300 h-[226px] w-px" />
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-end p-4 rounded-md shadow-bs1 w-[27%] md:w-full">
                      <div className="flex flex-row items-start justify-between mt-2 w-[94%] md:w-full">
                        <Text
                          className="mt-0.5 text-gray-900_01 text-lg"
                          size="txtGilroySemiBold18Gray90001"
                        >
                          Trending Items
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu One"
                        />
                      </div>
                      <List
                        className="flex flex-col gap-[15px] items-center w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_jankoferlicg_40X40.png"
                            alt="jankoferlicG"
                          />
                          <div className="flex flex-row items-center justify-between mt-[5px] w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 1
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_studioportrait_40X40.png"
                            alt="studioportrait"
                          />
                          <div className="flex flex-row items-center justify-between mt-1.5 w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 2
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_youngbeardedm_40X40.png"
                            alt="youngbeardedm"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 3
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_40X40.png"
                            alt="cheerfulindian"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 4
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_1.png"
                            alt="cheerfulindian One"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 5
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_2.png"
                            alt="cheerfulindian Two"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_01 text-sm"
                              size="txtGilroyMedium14Gray90001"
                            >
                              Item 6
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-md w-[49%] md:w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtGilroySemiBold18Black900"
                          >
                            Number of Orders
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu Two"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              75
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              50
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              25
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="ml-2 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              0
                            </Text>
                          </div>
                          <div className="font-gilroy h-[171px] ml-1 sm:ml-[0] relative w-[95%] sm:w-full">
                            <Img
                              className="h-32 mt-1.5 mx-auto w-[94%]"
                              src="images/img_group9863.svg"
                              alt="Group9863"
                            />
                            <div className="absolute flex flex-col gap-[15px] h-full inset-[0] items-center justify-center m-auto w-full">
                              <Img
                                className="h-[140px] rounded-[10px] w-[99%]"
                                src="images/img_graphlines.svg"
                                alt="Graphlines"
                              />
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Jan
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Feb
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Mar
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Apr
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  May
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Jun
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  July
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Aug
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Sept
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Nov
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Dec
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[49%] md:w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtGilroySemiBold18Black900"
                          >
                            Referrals
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu Three"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start w-[95%] md:w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-1/2 sm:w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-blue-A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_01"
                                  size="txtGilroyMedium16Gray90001"
                                >
                                  Social Media
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                20%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-green-600 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_01"
                                  size="txtGilroyMedium16Gray90001"
                                >
                                  Websites
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                15%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-orange-A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_01"
                                  size="txtGilroyMedium16Gray90001"
                                >
                                  Others
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                15%
                              </Text>
                            </div>
                          </div>
                          <div className="h-[171px] relative w-[171px]">
                            <div className="!w-[171px] h-[171px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[171px] h-[171px] m-auto overflow-visible"
                                value={34}
                                strokeWidth={4}
                                styles={{
                                  trail: { strokeWidth: 4, stroke: "#0061ff" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(245deg)",
                                    stroke: "#eaecf0",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                              <div className="!w-[132px] h-[132px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[132px] h-[132px] m-auto overflow-visible"
                                  value={43}
                                  counterClockwise
                                  strokeWidth={5}
                                  styles={{
                                    trail: {
                                      strokeWidth: 5,
                                      stroke: "#349765",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(12deg)",
                                      stroke: "#eaecf0",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <div className="absolute h-[94px] inset-[0] justify-center m-auto w-[94px]">
                                <div className="!w-[94px] h-[94px] m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[94px] h-[94px] m-auto overflow-visible"
                                    value={52}
                                    counterClockwise
                                    strokeWidth={6}
                                    styles={{
                                      trail: {
                                        strokeWidth: 6,
                                        stroke: "#eaecf0",
                                      },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(180deg)",
                                        stroke: "#ff6700",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                </div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto text-blue_gray-400 text-lg w-max"
                                  size="txtGilroyBold18Bluegray400"
                                >
                                  100%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesReportingPage;

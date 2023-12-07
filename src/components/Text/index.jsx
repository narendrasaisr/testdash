import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtMontserratMedium14Black900: "font-medium font-montserrat",
  txtGilroyBold36: "font-bold font-gilroy",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroyRegular12Green600: "font-gilroy font-normal",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyBold18Bluegray400: "font-bold font-gilroy",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
  txtGilroyMedium16Gray90001: "font-gilroy font-medium",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroyRegular12Red700: "font-gilroy font-normal",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium14Gray90001: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroySemiBold28BlueA700: "font-gilroy font-semibold",
  txtGilroyBold28Gray90001: "font-bold font-gilroy",
  txtGilroyRegular12Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray90001: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray900: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

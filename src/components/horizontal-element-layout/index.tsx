interface textList {
  text: string;
  textClass?: string;
  textStyle?: any;
}

type propType = {
  isImage?: boolean;
  isIcon?: boolean;
  isAvatar?: boolean;
  icon?: any;
  image?: any;
  avatar?: any;
  textList: textList[];
  iconClass?: string;
  containerClass?: string;
  onClick?: () => void;
  containerStyle?: any;
  iconStyle?: any;
};

const HorizontalElementLayout = (props: propType) => {
  const {
    isAvatar = false,
    isImage = false,
    isIcon = false,
    textList = [],
    iconClass = "mr1",
    onClick,
    containerClass = "",
    containerStyle = {},
    iconStyle = {},
  } = props;
  return (
    <div
      className={`flex items-center ${containerClass}`}
      onClick={onClick}
      style={{ ...containerStyle, cursor: "pointer" }}
    >
      {isImage && (
        <img
          className={iconClass}
          style={iconStyle}
          src={props?.image}
          alt="img"
        />
      )}{" "}
      {isIcon && <props.icon className={iconClass} sx={iconStyle} />}
      {isAvatar && props?.avatar}
      {textList?.map((item: textList, index: number) => (
        <p key={index} className={item?.textClass} style={item?.textStyle}>
          {item?.text}
        </p>
      ))}
    </div>
  );
};

export default HorizontalElementLayout;

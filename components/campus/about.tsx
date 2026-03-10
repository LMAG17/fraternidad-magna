import { MediaPlayer, MediaProvider } from "@vidstack/react";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";
import Image from "next/image";
import { JSX } from "react";

type Button = {
  text?: string;
  href?: string;
  backgroundColor?: string;
};

type Buttons = {
  primaryButton?: Button;
  secondaryButton?: Button;
};

type Props = {
  href: string;
  titleWhitePart: string;
  text: string | JSX.Element;
  image?: string;
  video?: string | false;
  alt: string;
  reverse?: boolean;
  buttons?: Buttons;
};

type ButtonColors = {
  base: string;
  hover: string;
  active: string;
};

const getColorByVariant = (variant: string): ButtonColors => {
  const variants: Record<string, ButtonColors> = {
    primary: {
      base: "bg-blue-600 text-white",
      hover: "hover:bg-blue-700",
      active: "active:bg-blue-800",
    },
    secondary: {
      base: "bg-gray-600 text-white",
      hover: "hover:bg-gray-700",
      active: "active:bg-gray-800",
    },
    success: {
      base: "bg-green-600 text-white",
      hover: "hover:bg-green-700",
      active: "active:bg-green-800",
    },
    danger: {
      base: "bg-red-600 text-white",
      hover: "hover:bg-red-700",
      active: "active:bg-red-800",
    },
    warning: {
      base: "bg-yellow-500 text-black",
      hover: "hover:bg-yellow-600",
      active: "active:bg-yellow-700",
    },
    info: {
      base: "bg-cyan-600 text-white",
      hover: "hover:bg-cyan-700",
      active: "active:bg-cyan-800",
    },
    light: {
      base: "bg-gray-100 text-black",
      hover: "hover:bg-gray-200",
      active: "active:bg-gray-300",
    },
    dark: {
      base: "bg-gray-900 text-white",
      hover: "hover:bg-gray-800",
      active: "active:bg-gray-700",
    },
  };

  return variants[variant] ?? variants.primary;
};

export default function AboutSection({
  href,
  titleWhitePart,
  text,
  image,
  video = false,
  alt,
  reverse,
  buttons = {
    primaryButton: {
      text: "",
      href: "",
      backgroundColor: "",
    },
    secondaryButton: {
      text: "",
      href: "",
      backgroundColor: "",
    },
  },
}: Props) {
  const {
    primaryButton = {
      text: "",
      href: "",
      backgroundColor: "",
    },
    secondaryButton = {
      text: "",
      href: "",
      backgroundColor: "",
    },
  } = buttons;

  const colorsPrimaryButton = getColorByVariant(
    primaryButton.backgroundColor || "primary",
  );
  const colorsSecondaryButton = getColorByVariant(
    secondaryButton.backgroundColor || "primary",
  );
  const MediaComponent = () => {
    if (video) {
      return (
        <MediaPlayer
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="my-auto w-full h-full object-cover"
        >
          <MediaProvider className="w-full h-full object-cover" />
        </MediaPlayer>
      );
    } else if (image) {
      return (
        <div className="relative w-full h-full">
          <Image src={image!} className="my-auto object-cover" alt={alt} fill />
        </div>
      );
    }
  };
  return (
    <div id={href} className="box-style no-p m-t-40 max-w-7xl mx-auto">
      <div className={`grid grid-cols-1 md:grid-cols-12`}>
        {/* Media Section */}
        {!reverse && (
          <div className="col-span-12 md:col-span-5 no-p">
            <MediaComponent />
          </div>
        )}
        {/* Text Section */}
        <div className="col-span-12 md:col-span-7 no-p p-40 z-50">
          <div
            className={reverse ? "about-title-reverse" : "about-title"}
            style={{ position: "relative" }}
          >
            <h1>
              <span className="text-white">{titleWhitePart}</span>
            </h1>
          </div>

          <div className="about-para-line"></div>
          <div className="about-para-line-reverse"></div>

          <div className={reverse ? "about-para-reverse" : "about-para"}>
            <p>{text}</p>
          </div>

          {/* Buttons */}
          <div
            className="buttons-container flex flex-wrap justify-end w-full"
            style={{
              flexDirection: "row",
              marginLeft: reverse ? 40 : 0,
            }}
          >
            {buttons && primaryButton.text !== "" && (
              <div
                className={`w-full md:w-1/2 inline-flex items-center justify-center px-4 py-2 rounded-md transition ${colorsPrimaryButton.base} ${colorsPrimaryButton.hover} ${colorsPrimaryButton.active}`}
                style={{ margin: 8 }}
              >
                <a
                  href={primaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn`}
                >
                  {primaryButton.text}
                </a>
              </div>
            )}

            {buttons && secondaryButton.text !== "" && (
              <div
                className={`w-full md:w-1/2 inline-flex items-center justify-center px-4 py-2 rounded-md transition ${colorsSecondaryButton.base} ${colorsSecondaryButton.hover} ${colorsSecondaryButton.active}`}
                style={{ margin: 8 }}
              >
                <a
                  href={secondaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn`}
                >
                  {secondaryButton.text}
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Media Section */}
        {reverse && (
          <div className="col-span-12 md:col-span-5 no-p">
            <MediaComponent />
          </div>
        )}
      </div>
    </div>
  );
}

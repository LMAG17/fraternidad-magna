import { getCampusConstants } from "@/constants/campus";
import Image from "next/image";

type Props = {
  lang: "es" | "en";
};

export default function Header({ lang }: Props) {
  const {
    banner: { alt, subtitle, shotype, showInvitation },
  } = getCampusConstants(lang);

  return (
    <div>
      <div className="box-style p-20 max-w-7xl mx-auto bg-black rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 no-p">
          <div
            className="col-span-12 md:col-span-6 flex flex-col items-center justify-center"
            style={{
              flex: 1,
              padding: "auto",
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-60 h-60 md:w-100 md:h-100">
                <Image
                  src="/images/campus/logo.png"
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="w-3/4 text-center text-[#FEEB03]">{subtitle}</h2>

              <p className="w-1/2 text-center">{shotype}</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 no-p">
            <div className="relative w-100 h-60 md:w-160 md:h-100">
              <Image
                src="/images/campus/header.png"
                alt={alt}
                fill
                className="object-cover"
              />
            </div>

            <p
              style={{
                width: "80%",
                textAlign: "center",
                marginLeft: 30,
                fontSize: 24,
              }}
            >
              {showInvitation}
            </p>
          </div>
        </div>

        <div className="spacer-40"></div>
      </div>
    </div>
  );
}

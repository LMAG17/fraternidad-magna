import { getCampusConstants } from "@/constants/campus";
import Link from "next/link";
type Props = {
  lang: "es" | "en";
};
export default function Products({ lang }: Props) {
  const { navItems } = getCampusConstants(lang);
  const products = [
    {
      title: navItems[1].name,
      href: navItems[1].href,
      subtitle: "",
      colClassName: "no-p m-p-r-10",
      className: "box-style p-40 stat-bg-1 bounce-hover",
      md: 8,
    },
    {
      title: navItems[2].name,
      href: navItems[2].href,
      subtitle: "",
      colClassName: "no-p m-p-r-10",
      className: "box-style p-40 stat-bg-2 stats-title-2 bounce-hover",
      md: 4,
    },
    {
      title: navItems[3].name,
      href: navItems[3].href,
      subtitle: "",
      colClassName: "no-p m-p-r-10",
      className: "box-style p-40 stat-bg-4 bounce-hover",
      md: 6,
    },
    {
      title: navItems[4].name,
      href: navItems[4].href,
      subtitle: "",
      colClassName: "no-p m-p-r-10",
      className: "box-style p-40 stat-bg-3 bounce-hover",
      md: 6,
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {products.map((product, index) => {
            const colSpan =
              product.md === 8
                ? "md:col-span-8"
                : product.md === 6
                  ? "md:col-span-6"
                  : "md:col-span-4";

            return (
              <div
                key={index}
                className={`${product.colClassName} col-span-12 ${colSpan}`}
              >
                <Link href={product.href}>
                  <div
                    className={product.className}
                    style={{ alignItems: "center" }}
                  >
                    <h1 className="stats-title">{product.title}</h1>

                    <p className="stats-subtitle">{product.subtitle}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import AboutSection from "@/components/campus/about";
import AwardsSection from "@/components/campus/awards";
import Footer from "@/components/campus/footer";
import Header from "@/components/campus/header";
import NavBar from "@/components/campus/nav-bar";
import PortfolioSection from "@/components/campus/portfolio";
import Products from "@/components/campus/products";
import Team from "@/components/campus/team";
import {
  additionals1,
  additionals2,
  corto,
  galleryImages,
  getCampusConstants,
  proccessImages,
  selection,
} from "@/constants/campus";
import "./page.css";

type Props = {
  params: Promise<{
    lang: "es" | "en";
  }>;
};

export default async function CampusStellae({ params }: Props) {
  const { lang } = await params;

  const {
    book,
    history,
    project,
    serie,
    show,
    videoGame,
    team,
    transmediaProject,
    awards,
  } = getCampusConstants(lang ?? "es");

  return (
    <div id="campus-stellae" className="bg-white">
      <NavBar lang={lang} />
      <div>
        <div className="p-20 ng-scope">
          <div
            style={{
              position: "fixed",
              zIndex: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="about-big-stars"></div>
            <div className="about-small-stars-1"></div>
            <div className="about-small-stars-2"></div>
          </div>
          <div style={{ zIndex: 10, position: "relative" }}>
            <div className="spacer-40"></div>

            <Header lang={lang} />

            <Products lang={lang} />

            <AboutSection
              href={project.href}
              titleWhitePart={project.initialTitle}
              text={project.title + " " + project.description}
              image={project.image}
              alt={project.alt}
              reverse={false}
            />

            <PortfolioSection galleryImages={galleryImages} />

            <AboutSection
              href={"project"}
              titleWhitePart={transmediaProject.title}
              text={transmediaProject.description}
              image={transmediaProject.image}
              alt={project.alt}
              reverse={true}
            />

            <PortfolioSection galleryImages={selection} />

            <AboutSection
              href={"history"}
              titleWhitePart={history.title}
              text={history.description}
              image={history.image}
              alt={history.alt}
              reverse={false}
            />

            <PortfolioSection galleryImages={corto} />

            <AboutSection
              href={"show"}
              titleWhitePart={show.title}
              text={show.description}
              image={show.image}
              alt={show.alt}
              reverse={true}
              buttons={show.buttons}
            />

            <PortfolioSection galleryImages={additionals1} />

            <AboutSection
              href={"serie"}
              titleWhitePart={serie.title}
              text={serie.description}
              image={serie.image}
              alt={serie.alt}
              reverse={false}
              buttons={serie.buttons}
            />

            <PortfolioSection galleryImages={additionals2} />

            <AboutSection
              href={"game"}
              titleWhitePart={videoGame.title}
              text={videoGame.description}
              image={videoGame.image}
              alt={videoGame.alt}
              reverse={true}
              buttons={videoGame.buttons}
            />

            <PortfolioSection galleryImages={proccessImages} />

            <AboutSection
              href={"book"}
              titleWhitePart={book.title}
              text={book.description}
              image={book.itemRight.image}
              alt={book.itemRight.alt}
              reverse={false}
              buttons={book.buttons}
              video={book.video}
            />

            <AwardsSection awards={awards} />

            <Team
              title={team.title}
              description={team.description}
              lang={lang}
            />

            <Footer lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}

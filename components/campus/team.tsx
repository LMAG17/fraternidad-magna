import TeamCarousel from "./team-carousel";

type Props = {
  title: string;
  description: string;
  lang: "es" | "en";
};

export default function Team({ title, description, lang }: Props) {
  return (
    <div id="team" className="box-style p-40 text-center max-w-7xl mx-auto">
      <h1>{title}</h1>

      <p>{description}</p>

      <TeamCarousel lang={lang} />
    </div>
  );
}

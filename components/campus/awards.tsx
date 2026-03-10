type Award = {
  href: string;
  image: string;
  name: string;
  date: string;
  description: string;
  buttonText: string;
};

type Props = {
  awards: Award[];
};

export default function AwardsSection({ awards }: Props) {
  return (
    <div>
      <div className="container no-p max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-4 no-p wp-blog-p bounce-hover"
            >
              <div className="box-style">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  //   onClick={toggleSatis}
                  href={award.href}
                >
                  <div
                    className="post-thumbnail"
                    style={{
                      backgroundImage: `url('${award.image}')`,
                    }}
                  ></div>
                </a>

                <div className="post-title p-30">
                  <div className="blog-star rotate-star ng-hide"></div>

                  {/* <div className="blog-cat cat-colour-Blog">
                    Blog
                  </div> */}

                  <h6>
                    <strong>{award.name}</strong>
                    <span>...</span>
                  </h6>

                  <h3>{award.date}</h3>

                  <span>{award.description}</span>

                  <span>...</span>

                  <br />
                  <br />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // onClick={toggleSatis}
                    href={award.href}
                  >
                    <p>{award.buttonText}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Parallax } from "react-parallax";
const Cover = ({ img, title, description}) => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={img}
      bgImageAlt="the dog"
    >
      <div className="hero h-[500px] md:h-[700px]">
        <div className="hero-content text-neutral-content text-center">
          <div className="bg-black/60 text-center py-4 px-6 md:py-24 md:px-20">
            <h1 className="text-2xl uppercase md:text-6xl mb-2 text-white">{title}</h1>
            <p className="max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

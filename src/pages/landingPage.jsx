import imgAssets from "../assets/photo-1558769132-cb1aea458c5e.avif";
import imgHero from "../assets/img-hero.png";
import Layout from "../components/layout";
import Button from "../components/button";
import Card from "../components/card";

function landingPage() {
  return (
    <Layout>
      <header className="flex flex-row items-center justify-center h-screen">
        <div className="w-3/5">
          <h1 className="text-5xl font-bold">Discover Your Perfect Fit</h1>
          <h2 className="text-xl font-semibold">
            Guiding Women in Choosing Clothing that Reflects Their True Selves
          </h2>
          <p className="w-9/12 my-2 text-md">
            Wardrobe Fit, you can look stunning on any occasion! Find your
            style, create the perfect look, and be the center of attention at
            any party, date night, or wedding. Achieve your perfect style with
            Wardrobe Fit
          </p>
          <Button
            label="Let's Try"
            type="submit"
            className="w-2/5 my-5 font-semibold text-gray-900 btn btn-primary"
          />
        </div>
        <div className="mx-5">
          <img src={imgHero} alt="imgHeader" width={500} height={500} />
        </div>
      </header>
      <main className="h-screen">
        <div className="py-5">
          <h2 className="text-2xl font-semibold">Top Selections</h2>
          <div className="flex flex-row justify-center">
            <Card
              imageSrc={imgAssets}
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Take it"
            />
            <Card
              imageSrc={imgAssets}
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Take it"
            />
            <Card
              imageSrc={imgAssets}
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Take it"
            />
          </div>
          <div className="mx-auto bg-[#E8D9AD] w-1/2 my-10 rounded-lg">
            <div className="py-24 text-center">
              <h1 className="text-xl">
                The Easy Way to Pick Your Favorite Wardrobe
              </h1>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </Layout>
  );
}

export default landingPage;

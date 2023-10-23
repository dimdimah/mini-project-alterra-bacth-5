import Layout from "@/components/layout";
import Button from "@/components/button";
import { Link } from "react-router-dom";
import Label from "../components/label";
import Card from "../components/card";

export default function Index() {
  return (
    <Layout>
      <header className="h-screen rounded-md">
        <div className="flex flex-col items-center justify-center w-full px-5 h-5/6 ">
          <Label
            text={"Choose an outfit that makes you feel good about it"}
            className={"my-10"}
          />
          <h1 className="font-semibold text-7xl">Discover </h1>
          <h1 className="font-semibold text-7xl">Your Perfect Fit</h1>
          <h2 className="my-5 text-xl font-base">
            Guiding Women in Choosing Clothing that Reflects Their True Selves
          </h2>
          <Link
            to="/login"
            className="w-36 rounded-full my-5 py-3 text-center text-gray-100 bg-[#0D0C22] hover:bg-[#565564]"
          >
            Let's try it
          </Link>
        </div>
      </header>
      <main>
        <div className="h-fit">
          <h2 className="text-2xl font-semibold">Top Selections</h2>
          <div className="flex flex-row justify-center">
            <Card
              imageSrc="https://react-tailwind-portfolio-virid.vercel.app/Frame11.png"
              title="Hangouts"
              description="Stylish & Youth Style"
            />
            <Card
              imageSrc="https://react-tailwind-portfolio-virid.vercel.app/Frame2.png"
              title="Wedding Party"
              description="Simple ellegant"
            />
            <Card
              imageSrc="https://react-tailwind-portfolio-virid.vercel.app/Frame3.png"
              title="Hangouts"
              description="Simple for hangouts"
            />
          </div>
          <div className="w-full my-10 rounded-lg">
            <div className="flex py-24 text-center">
              <h1 className="w-10/12 mr-10 text-6xl">
                The Easy Way to Pick Your Favorite Wardrobe
              </h1>
              <div className="flex flex-col items-start justify-start">
                <p className="mx-5 my-3 text-xl text-start">
                  With Wardrobe Fit, you can look stunning on any occasion, Find
                  your style, create the perfect look, and be the center of
                  attention at any party, date night, or wedding. Achieve your
                  perfect style with Wardrobe Fit
                </p>
                <Button
                  label="Get Started"
                  type="submit"
                  className="w-32 rounded-full mx-5 my-3 py-3 text-gray-100 bg-[#0D0C22] hover:bg-[#565564]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="w-full my-10 rounded-lg">
          <div className="text-center">
            <Label text={"Meet our owner"} />
            <div className="flex flex-col items-start justify-start">
              <p className="mx-5 my-3 text-xl text-start">
                With Wardrobe Fit, you can look stunning on any occasion, Find
                your style, create the perfect look, and be the center of
                attention at any party, date night, or wedding. Achieve your
                perfect style with Wardrobe Fit
              </p>
              <Button
                label="Get Started"
                type="submit"
                className="w-32 rounded-full mx-5 my-3 py-3 text-gray-100 bg-[#0D0C22] hover:bg-[#565564]"
              />
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

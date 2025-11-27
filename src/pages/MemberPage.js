import Timeline from "../components/TimeLineComponent";
import SpaceComponent from "../components/SpaceComponent";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SingleNewsCarousel from "../components/SingleNewsCarousel";

const MemberPage = () => {
  const imgArr = [
    "https://storage.googleapis.com/uriani.appspot.com/1734957300943.jpg",
"https://storage.googleapis.com/uriani.appspot.com/1732521900543.jpg"  ];
  const { t } = useTranslation();

  return (
    <div className="about-us-page w-full flex flex-col items-center">
      <div className="space-compoenent-container w-full">
        <SpaceComponent data={{ data: t("membership") }} />
      </div>
      <div className="about-us-page-inner-container py-5 w-full max-w-5xl">
        <div className="mt-3 mb-10">
          <p>
            No need to download, install, or manage files. Our Kits CDN does it
            all with a single line of code. With Font Awesome Free, you get easy
            access to over 2,000 icons. Upgrade to a Pro plan for even more.
            Entirely new, visually unique "small batch" icon packs designed in
            collaboration with world-class icon designers. Available now in all
            Pro+ plans!
          </p>
        </div>
        <div className="w-full aspect-3/2  mb-10 object-cover">
          <SingleNewsCarousel data={imgArr} />
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-5">
          <div>
            <ol>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 1</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 2</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 3</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 1</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 2</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
              <li className="grid  grid-flow-col grid-rows-[auto_auto] gap-3 mb-5">
                <div className="row-span-2 ">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-1">
                  <h4 className="font-bold">Header 3</h4>
                </div>
                <div className="row-2">
                  <p>
                    Use utilities like max-w-sm and max-w-xl to set an element
                    to a fixed maximum width based on the container scale
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;

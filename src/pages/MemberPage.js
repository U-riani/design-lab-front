import Timeline from "../components/TimeLineComponent";
import SpaceComponent from "../components/SpaceComponent";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SingleNewsCarousel from "../components/SingleNewsCarousel";
import CardsCOmponent from "../components/CardsCOmponent";

const MemberPage = () => {
  const imgArr = [
    "https://storage.googleapis.com/uriani.appspot.com/1734957300943.jpg",
    "https://storage.googleapis.com/uriani.appspot.com/1732521900543.jpg",
  ];
  const { t } = useTranslation();

  return (
    <div className="about-us-page w-full flex flex-col items-center mb-5">
      <div className="space-compoenent-container w-full">
        <SpaceComponent data={{ data: t("membership") }} />
      </div>
      <div className="about-us-page-inner-container py-5 w-full max-w-5xl">
        <div className="mt-3 mb-10">
          <h2 className="font-bold text-xl text-center mb-5">
            საქართველოს დიზაინერთა გაერთიანებასთან არსებული – დიზაინ ლაბის
            შინაგანაწესი
          </h2>
          <p className="font-bold text-md mb-2">ზოგადი ინფორმაცია</p>
          <p>
            დიზაინ ლაბი წარმოადგენს საქართველოს დიზაინერთა გაერთიანების
            ინიციატივით შექმნილ პროფესიულ, ფიზიკურ სივრცეს, რომელიც 2022 წელს
            შეიქმნა. დიზაინ ლაბში ერთიანდებიან საქართველოს ბაზარზე არსებული
            სხვადასხვა პარტნიორი კომპანიები, რომელთა ნიმუშები და კატალოგები
            განთავსებულია ერთ სივრცეში. დიზაინ ლაბის სივცე დაყოფილია
            შეხვედრებისა და ტრეინინგებისა თუ ვორქშოპების ჩასატარებელ სივრცეებად.
            <br />
            <br />
            დიზაინ ლაბის წევრობა შეუძლია ადგილობრივ ან საერთაშორისო ნებისმიერ
            კომპანიას ან ინდივიდს , რომელიც არის საქართველოს დიზაინერთა
            გაერთიანების წევრი და სურს დიზაინ ლაბის სივცის დამატებითი
            ბენეფიტებით სარგებლობა
          </p>
        </div>
        <div className="w-full aspect-3/2  mb-10 object-cover">
          <SingleNewsCarousel data={imgArr} />
        </div>
        <div className="pt-5">
          <h3 className="text-xl font-bold mb-5">გაწევრიანების პირობები:</h3>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-5">
          <div>
            <ol>
              <li className="flex gap-3 mb-5">
                <div className="">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="row-2">
                  <p>უნდა იყოთ საქართველოს დიზაინერთა გაერთიანების წევრი</p>
                </div>
              </li>
              <li className="flex gap-3 mb-5">
                <div className="">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="">
                  <p>
                    გაწევრიანება ხდება დიზაინ ლაბის ვებ–გვერდზე რეგისტრაციის
                    მოთხოვნის გაგზავნით
                  </p>
                </div>
              </li>
              <li className="flex gap-3 mb-5">
                <div className="">
                  <p>
                    <FontAwesomeIcon className="text-xl" icon={faCircleCheck} />{" "}
                  </p>
                </div>
                <div className="">
                  <p>
                    რეგისტრაციის დამტკიცების შემდეგ დგინდება ხელშეკრულება
                    ორგანიზაციასა და წევრს შორის, რომელიც განსაზღვრავს
                    თანამშრომლობის პირობებსა და უფლებებს{" "}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="py-5">
          <h3 className="text-xl font-bold">
            წევრობის სერვისები და ბენეფიტები:
          </h3>
          <Timeline />
        </div>
        <div>
          <div className="my-10">
            <h2 className="text-xl font-bold text-center">დიზაინ ლაბის წევრობა ფასიანია და მოიცავს გადასახადს:</h2>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="">
              <CardsCOmponent
                data={{
                  title:
                    "წევრობა საქართველოში დაფუძლებული კომპანიის ან საქართველოს მოქალაქის წევრობა ",
                  content:
                    "წლიური გადასახადი: 350 ლარი (გადასახადი იყოფა წელიწადში ორ ნაწილად)",
                }}
              />
            </div>
            <div>
              <CardsCOmponent
                data={{
                  title:
                    "სხვა ქვეყანაში დაფუძლებული კომპანიის ან სხვა ქვეყნის  მოქალაქის წევრობა ",
                  content:
                    "წლიური გადასახადი: 450 ლარი (გადასახადი იყოფა წელიწადში ორ ნაწილად)",
                }}
              />
            </div>
            <div>
              <CardsCOmponent
                data={{
                  title: "სტუდენტური წევრობა",
                  content:
                    "წლიური გადასახადი: 262.50 ლარი (საერთო წევრობის -25% ფასდაკლება, გადასახადი იყოფა წელიწადში ორ ნაწილად)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;

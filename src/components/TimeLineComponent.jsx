import useScreenWidth from "../hooks/useScreenWidth";

export default function Timeline() {
  const screenWidth = useScreenWidth();
  return (
    <div>
      {screenWidth < 640 && (
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-2 h-full">
            <div className="border-2-2 absolute left-6 top-0 border-opacity-20 border-gray-700 h-full border"></div>

            <div className="mb-8 flex justify-between items-center gap-3 w-full right-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  წევრის საქმიანობის შესახებ ინფორმაციის განთავსება დიზაინ ლაბის
                  ოფიციალურ ვებ გვერდზე
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  პარტნიორ კომპანიებთან პრეზენტაციებზე ექსკლუზიური დასწრების
                  შესაძლებლობა
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center gap-3 w-full right-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  ნეთვორქინგი დიზაინ-ლაბისა და პარტნიორი ორგანიზაციის წევრებთან
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  მარკეტინგისა და კომუნიკაციების (PR) მიმარულებით კონსულტაცია და
                  მხარდაჭერა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">5</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  ფინანსაური (საბუღალტრო), იურიდიული კონსულტაცია და მხარდაჭერა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  წევრის ინტერვიუ და გავრცელება დიზაინ ლაბის და საქართველოს
                  დიზაინერთა გაერთიანების სოციალურ პლატფორმებზე
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">7</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  წელიწადში საშუალოდ 2 ჯერ წევრის საქმიანობის შესახებ
                  ინფორმაციის გავრცელება დიზაინ ლაბის სოციალურ პლატფორმაზე
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">8</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  დიზაინ ლაბის მხარდაჭერა და ინტერესების დაცვა ადგილობრივ თუ
                  საერთაშორისო ბაზარზე არსებულ კომპანიებთან თანამშომლობისას
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">9</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  სივრცეში არსებული კატალოგებისა და ნიმუშების გაცნობისა და
                  სარგებლობის შესაძლებლობა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">10</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  სფეროს სიახლეებზე მუდმივი წვდომა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">11</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  წელიწადში 4 ჯერ (თითო 2 საათი) უფასო შესაძლებლობა სივრცეში
                  დამკვეთთან შეხვედრის და კატალოგებით სარგებლობა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row gap-3 items-center w-full left-timeline">
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">12</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-full px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  სპეციალური 50%–მდე ფასდაკლება დიზაინ ლაბში ჩატარებულ ფასიან
                  ტრეინინგებზე, მასტერკლასებსა და ვორქშოპებზე
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth >= 640 && (
        <div className="container  mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute left-1/2 border-opacity-20 border-gray-700 h-full border"></div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 "></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  წევრის საქმიანობის შესახებ ინფორმაციის განთავსება დიზაინ ლაბის
                  ოფიციალურ ვებ გვერდზე
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  პარტნიორ კომპანიებთან პრეზენტაციებზე ექსკლუზიური დასწრების
                  შესაძლებლობა
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  ნეთვორქინგი დიზაინ-ლაბისა და პარტნიორი ორგანიზაციის წევრებთან
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  მარკეტინგისა და კომუნიკაციების (PR) მიმარულებით კონსულტაცია და
                  მხარდაჭერა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  ფინანსაური (საბუღალტრო), იურიდიული კონსულტაცია და მხარდაჭერა
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  წევრის ინტერვიუ და გავრცელება დიზაინ ლაბის და საქართველოს
                  დიზაინერთა გაერთიანების სოციალურ პლატფორმებზე
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  წელიწადში საშუალოდ 2 ჯერ წევრის საქმიანობის შესახებ
                  ინფორმაციის გავრცელება დიზაინ ლაბის სოციალურ პლატფორმაზე
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">8</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  დიზაინ ლაბის მხარდაჭერა და ინტერესების დაცვა ადგილობრივ თუ
                  საერთაშორისო ბაზარზე არსებულ კომპანიებთან თანამშომლობისას
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">9</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  სივრცეში არსებული კატალოგებისა და ნიმუშების გაცნობისა და
                  სარგებლობის შესაძლებლობა
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">10</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  სფეროს სიახლეებზე მუდმივი წვდომა
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">11</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  წელიწადში 4 ჯერ (თითო 2 საათი) უფასო შესაძლებლობა სივრცეში
                  დამკვეთთან შეხვედრის და კატალოგებით სარგებლობა
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">12</h1>
              </div>
              <div className="order-1 bg-[#84a444] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  სპეციალური 50%–მდე ფასდაკლება დიზაინ ლაბში ჩატარებულ ფასიან
                  ტრეინინგებზე, მასტერკლასებსა და ვორქშოპებზე
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ProgressTimeLIneComponent = ({ progressData }) => {
  return (
    <div className="flex justify-end">
      <ol class="flex justify-between items-center w-[250px]">
        <li class="relative  sm:mb-0">
          {progressData === 1 || progressData === 2 || progressData === 3 ? (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-2 shrink-0">
                <FontAwesomeIcon
                  className="text-xl text-green-500"
                  icon={faCircleCheck}
                />
              </div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          ) : (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-4 shrink-0"></div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          )}
        </li>
        <li
          className={`${
            progressData === 2 || progressData === 3
              ? "bg-green-500"
              : "bg-gray-200"
          } h-1 w-full mx-3`}
        ></li>
        <li class="relative  sm:mb-0">
          {progressData === 2 || progressData === 3 ? (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-2 shrink-0">
                <FontAwesomeIcon
                  className="text-xl text-green-500"
                  icon={faCircleCheck}
                />
              </div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          ) : (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-4 shrink-0"></div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          )}
        </li>
        <li
          className={`${
            progressData === 3 ? "bg-green-500" : "bg-gray-200"
          } h-1 w-full mx-3`}
        ></li>
        <li class="relative sm:mb-0">
          {progressData === 3 ? (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-2 shrink-0">
                <FontAwesomeIcon
                  className="text-xl text-green-500"
                  icon={faCircleCheck}
                />
              </div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          ) : (
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-2 h-2 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-4 shrink-0"></div>
              <div class="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
            </div>
          )}
        </li>
      </ol>
    </div>
  );
};

export default ProgressTimeLIneComponent;

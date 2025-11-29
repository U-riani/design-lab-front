import { useState } from "react";
import { useTranslation } from "react-i18next";
import SpaceComponent from "../components/SpaceComponent";
import { useCreateDesignerMutation } from "../data/designersSlice";
import ProgressTimeLIneComponent from "../components/ProgressTimeLIneComponent";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const RegistrationEducation = () => {
  const [createDesigner] = useCreateDesignerMutation();
  const { t } = useTranslation();

  const eduStartRefs = useRef([]);
  const eduEndRefs = useRef([]);

  const expStartRefs = useRef([]);
  const expEndRefs = useRef([]);

  // NEW FIELDS: Education + Experience
  const [education, setEducation] = useState([
    { school: "", degree: "", start: "", end: "" },
  ]);

  const [experience, setExperience] = useState([
    { company: "", position: "", start: "", end: "" },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", variant: "" });

  const clearForm = () => {
    setEducation([{ school: "", degree: "", start: "", end: "" }]);
    setExperience([{ company: "", position: "", start: "", end: "" }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      { school: "", degree: "", start: "", end: "" },
    ]);
    eduStartRefs.current.push(null);
    eduEndRefs.current.push(null);
  };

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      { company: "", position: "", start: "", end: "" },
    ]);
    expStartRefs.current.push(null);
    expEndRefs.current.push(null);
  };

  const removeEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
    eduStartRefs.current.splice(index, 1);
    eduEndRefs.current.splice(index, 1);
  };

  const removeExperience = (index) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
    expStartRefs.current.splice(index, 1);
    expEndRefs.current.splice(index, 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage({ text: "", variant: "" });

    const formData = new FormData();

    formData.append("education", JSON.stringify(education));
    formData.append("experience", JSON.stringify(experience));

    try {
      if (true) {
        await createDesigner(formData).unwrap();
        setMessage({ text: "Successfully registered", variant: "success" });
        clearForm();
      } else {
        setMessage({ text: t("fillAllFields"), variant: "info" });
      }
    } catch (error) {
      setMessage({
        text: "Technical issue, please try again",
        variant: "danger",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <SpaceComponent data={{ data: t("registration") }} className="w-full" />

      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full mb-5">
          <ProgressTimeLIneComponent progressData={2}/>
        </div>

        <form className="w-full max-w-2xl lg:max-w-[800px] space-y-6 bg-white p-6 rounded-lg shadow-md">
          {/* EDUCATION BLOCK */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Education</h3>

            {education.map((ed, index) => (
              <div key={index} className="border p-4 rounded-md mb-4 space-y-3">
                <div className="w-full form-control">
                  <input
                    id={`school-${index}-${ed.school}`}
                    type="text"
                    value={ed.school}
                    onChange={(e) =>
                      updateEducation(index, "school", e.target.value)
                    }
                    placeholder={""}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`school-${index}-${ed.school}`}
                  >
                    {t("School")}
                  </label>
                </div>
                <div className="w-full form-control">
                  <input
                    id={`degree-${index}-${ed.school}`}
                    type="text"
                    value={ed.degree}
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                    placeholder={""}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`degree-${index}-${ed.school}`}
                  >
                    {t("degree")}
                  </label>
                </div>
                <div className="flex gap-3">
                  <div
                    className="w-full form-control cursor-pointer"
                    onClick={() => eduStartRefs.current[index]?.showPicker()}
                  >
                    <input
                      ref={(el) => (eduStartRefs.current[index] = el)}
                      type="date"
                      value={ed.start}
                      onChange={(e) =>
                        updateEducation(index, "start", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                  </div>

                  <div
                    className="w-full form-control cursor-pointer"
                    onClick={() => eduEndRefs.current[index]?.showPicker()}
                  >
                    <input
                      ref={(el) => (eduEndRefs.current[index] = el)}
                      type="date"
                      value={ed.end}
                      onChange={(e) =>
                        updateEducation(index, "end", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                  </div>
                </div>
                <div className="flex justify-end">
                  {education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="text-red-600 font-semibold"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addEducation}
              className="py-2 px-4 bg-gray-800 text-white rounded-md"
            >
              + Add Education
            </button>
          </div>

          {/* EXPERIENCE BLOCK */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Work Experience</h3>

            {experience.map((ex, index) => (
              <div key={index} className="border p-4 rounded-md mb-4 space-y-3">
                <div className="w-full form-control">
                  <input
                    id={`company-${index}-${ex.company}`}
                    type="text"
                    value={ex.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    placeholder={""}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`company-${index}-${ex.company}`}
                  >
                    {t("Company")}
                  </label>
                </div>
                <div className="w-full form-control">
                  <input
                    id={`position-${index}-${ex.company}`}
                    type="text"
                    value={ex.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    placeholder={""}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`position-${index}-${ex.company}`}
                  >
                    {t("position")}
                  </label>
                </div>

                <div className="flex gap-3">
                  <div
                    className="w-full form-control cursor-pointer"
                    onClick={() => expStartRefs.current[index]?.showPicker()}
                  >
                    <input
                      ref={(el) => (expStartRefs.current[index] = el)}
                      type="date"
                      value={ex.start}
                      onChange={(e) =>
                        updateExperience(index, "start", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                  </div>

                  <div
                    className="w-full form-control cursor-pointer"
                    onClick={() => expEndRefs.current[index]?.showPicker()}
                  >
                    <input
                      ref={(el) => (expEndRefs.current[index] = el)}
                      type="date"
                      value={ex.end}
                      onChange={(e) =>
                        updateExperience(index, "end", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                  </div>
                </div>
                <div className="flex justify-end">
                  {experience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="text-red-600 font-semibold"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addExperience}
              className="py-2 px-4 bg-gray-800 text-white rounded-md"
            >
              + Add Experience
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex w-full justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full max-w-[250px] py-3 bg-black text-white rounded-md shadow-md"
            >
              {isLoading ? t("loading") : t("submit")}
            </button>
          </div>

          {/* MESSAGE */}
          {message.text && (
            <div
              className={`mt-4 p-4 rounded-md text-white ${
                message.variant === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationEducation;

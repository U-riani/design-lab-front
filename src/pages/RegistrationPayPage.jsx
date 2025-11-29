import { useState } from "react";
import { useTranslation } from "react-i18next";
import SpaceComponent from "../components/SpaceComponent";
import { useCreateDesignerMutation } from "../data/designersSlice";
import ProgressTimeLIneComponent from "../components/ProgressTimeLIneComponent";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const RegistrationPayPage = () => {
  const [createDesigner] = useCreateDesignerMutation();
  const { t } = useTranslation();

  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", variant: "" });

  const clearForm = () => {
    setAmount("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage({ text: "", variant: "" });

    const formData = new FormData();

    formData.append("amount", amount);
    formData.append("email", email);
    formData.append("phone", phone);

    try {
      const response = await createDesigner(formData).unwrap();

      // Backend should return payment URL from UniPay
      if (response.payment_url) {
        window.location.href = response.payment_url;
        return;
      }

      setMessage({ text: "Successfully registered", variant: "success" });
      clearForm();
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
          <ProgressTimeLIneComponent progressData={3} />
        </div>

        <form className="w-full max-w-2xl lg:max-w-[800px] space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="w-full form-control">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <label className="block text-sm font-medium text-gray-700">
              {t("Payment Amount")}
            </label>
          </div>

          <div className="w-full form-control">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
          </div>

          <div className="w-full form-control">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
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

export default RegistrationPayPage;

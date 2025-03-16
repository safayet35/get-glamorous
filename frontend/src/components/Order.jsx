import Button from "./Button.jsx";
import Step from "./Step.jsx";
import { useState, useEffect, useRef, memo } from "react";
import { toast } from "react-toastify";
import { postOrder } from "../api/ordersApi.js";
import { useMutation } from "@tanstack/react-query";
const Order = ({ price, product }) => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [checkBox, setCheckBox] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    product,
    price,
    location: "",
    policeStation: "",
    district: "",
    total: 0
  });

  const districts = [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
    "Barguna",
    "Barishal",
    "Bhola",
    "Jhalokathi",
    "Patuakhali",
    "Pirojpur",
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Cumilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
    "Bagerhat",
    "Chuadanga",
    "Jashore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    "Jamalpur",
    "Mymensingh",
    "Netrokona",
    "Sherpur",
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Chapainawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon"
  ];

  const { isPending, mutate, isSuccess, isError, error } = useMutation({
    mutationFn: formData => postOrder(formData),
    onSuccess: () => {
      toast.success("প্রোডাক্ট টি অর্ডার করা সম্পূর্ণ  হয়েছে");
      setFormData({
        name: "",
        number: "",
        product,
        price,
        location: "",
        policeStation: "",
        district: "",
        total: 0
      });

      document.getElementById("my_modal_3").close();
      setStep(1);
      setCheckBox(false);
    },
    onError: () => toast.error("অর্ডার করা সম্পূর্ণ হয়নি")
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      price,
      product
    }));
  }, [price, product]);

  const checkDeliveryCharge = () => {
    if (formData.district?.toLowerCase() === "dhaka") {
      setDeliveryCharge(70);
    } else {
      setDeliveryCharge(130);
    }
  };
  const inputRef = useRef(null);

  const checkIsEmpty = () => {
    if (step === 1) {
      if (formData.name === "" || formData.number === "") {
        setButtonDisable(true);
      } else {
        setButtonDisable(false);
      }
    }
    if (step === 2) {
      if (formData.district === "" || formData.location === "") {
        setButtonDisable(true);
      } else {
        setButtonDisable(false);
      }
    }
    if (step === 3) {
      if (!inputRef.current.checked) {
        setButtonDisable(true);
      }
    }
  };
  const notify = message => toast(message);
  useEffect(() => {
    checkDeliveryCharge();
    checkIsEmpty();
  }, [formData, step]);

  const handleCheck = () => {
    setCheckBox(inputRef.current.checked);
  };

  const handleStepIncrement = () => {
    if (step <= 2) {
      setStep(prev => prev + 1);
    }

    setFormData(prev => {
      return { ...prev, total: prev.price + deliveryCharge };
    });
  };

  const handleStepDecrement = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    mutate(formData);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">অর্ডার করুন</h3>
        <form className="w-full my-4 font-bangla flex flex-col gap-3">
          {/* step 1 form data */}

          {step == 1 ? (
            <div>
              <label className="floating-label flex flex-col">
                <span>আপনার নাম</span>
                <input
                  type="text w-full"
                  name="name"
                  value={formData.name}
                  onChange={e => handleInputChange(e)}
                  placeholder="নাম"
                  className="border-primary input input-md"
                />
              </label>
              <label className="floating-label flex flex-col">
                <span>আপনার নাম্বার</span>
                <input
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={e => handleInputChange(e)}
                  placeholder="নাম্বার"
                  maxLength="12"
                  title="Must be 11 digits"
                  required
                  className="border-primary input input-md validator "
                />
              </label>
              <label className="floating-label flex flex-col">
                <span>আইটেম</span>
                <input
                  type="text w-full"
                  name="product"
                  disabled={true}
                  value={formData.product}
                  onChange={e => handleInputChange(e)}
                  placeholder="আইটেম"
                  className="border-primary input input-md"
                />
              </label>
            </div>
          ) : null}

          {/* step 1 form data end */}

          {/* step 2 form data */}
          {step == 2 ? (
            <div className="transition-all">
              <label className="floating-label flex flex-col">
                <span>ঠিকানা</span>
                <select
                  className="outline-none input input-md border-primary"
                  value={formData.district}
                  name="district"
                  onChange={e => handleInputChange(e)}
                >
                  <option value="">Select Your District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </label>

              <label className="floating-label flex flex-col">
                <span>থানার নাম</span>
                <input
                  type="text w-full"
                  name="policeStation"
                  value={formData.policeStation}
                  onChange={e => handleInputChange(e)}
                  placeholder="থানার নামে যদি থাকে"
                  className="border-primary input input-md"
                />
              </label>

              <label className="floating-label flex flex-col">
                <span>মূল ঠিকানা</span>
                <input
                  type="text w-full"
                  name="location"
                  value={formData.location}
                  onChange={e => handleInputChange(e)}
                  placeholder="যেখান থেকে আপনি পার্সেল রিসিভ করতে চান"
                  className="border-primary input input-md"
                />
              </label>

              <label className="floating-label flex flex-col">
                <span>দাম</span>
                <input
                  disabled={true}
                  type="text w-full"
                  name="price"
                  value={formData.price}
                  onChange={e => handleInputChange(e)}
                  placeholder="দাম"
                  className="border-primary input input-md"
                />
              </label>
              <p className="my-4 text-md text-secondary">
                ডেলিভারি চার্জ :{deliveryCharge}{" "}
              </p>
              <p className="text-center text-2xl">
                টোটাল : {Number(formData.price + deliveryCharge)}
              </p>
            </div>
          ) : null}

          {/* step 2 form data ends here */}

          {step == 3 ? (
            <div>
              <h1 className="text-[20px] mb-4 text-primary">
                অর্ডার কনফার্ম করার পূর্বে কিছু গুরুত্তপূর্ণ কথা
              </h1>
              <p className="text-red-600">
                আপনি অর্ডার কনফার্ম করার পর পার্সেল কুরিয়ার কোম্পানিদের দিয়ে
                দেই যার কারণে, ২,৩ দিন সময় লাগে এর মাঝে আপনি অর্ডার ক্যান্সেল
                করতে পারবেন না এবং আপনি যদি বলেন আমার ওই দিন লাগবে এইভাবে উল্লেখ
                করে দিলেও আমরা sure দিতে পারবনা যে আপনি ওইদিন ই পাবেন কারণ সব
                কুরিয়ার কোম্পানি দের হাতে থাকে। আপনি উপরোক্ত নিয়ম গুলো মানলে
                অর্ডার কনফার্ম করব?
              </p>
              <div className="gap-3 mt-3 flex items-center justify-start">
                <input
                  ref={inputRef}
                  onChange={handleCheck}
                  type="checkbox"
                  className="checkbox validator"
                  required
                  title="Required"
                />
                <p className="font-bangla text-sm">
                  হ্যাঁ আমি অর্ডার কনফার্ম করতে চাই
                </p>
              </div>
            </div>
          ) : null}
        </form>

        <Step step={step} />
        <div className=" flex items-center justify-between">
          <Button onClick={handleStepDecrement}>prev</Button>

          {step === 3 ? (
            <Button
              disabled={!checkBox || false}
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Submit{" "}
              {isPending ? (
                <span className="text-2xl loading loading-spinner text-white"></span>
              ) : null}
            </Button>
          ) : (
            <Button disabled={buttonDisable} onClick={handleStepIncrement}>
              Next
            </Button>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default Order;

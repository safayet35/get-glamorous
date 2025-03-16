const Step = ({step}) => {
  return (
    <ul className="gap-3 my-2 steps flex items-center justify-center">
      <li className={`step ${step > 0 ? "step-primary" : null}`}>
        নাম, নাম্বার
      </li>
      <li className={`step ${step > 1 ? "step-primary" : null}`}>
        ঠিকানা ও দাম
      </li>
      <li className={`step ${step > 2 ? "step-primary" : null}`}>কনফার্ম</li>
    </ul>
  );
};

export default Step;

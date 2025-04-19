import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button
      className="fixed bottom-8 left-8 py-3 px-7 bg-gray-700 rounded-lg hover:bg-gray-600"
      onClick={() => {
        navigate(-1);
      }}
    >
      Back
    </button>
  );
}

export default ButtonBack;

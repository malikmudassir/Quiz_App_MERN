import axios from "axios";

export const getQuestions = async (setQuestions) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/questions");
    setQuestions(data.randomQuestions);
  } catch (error) {
    console.error("Fetch error:", error);
    setQuestions([{ options: [] }]);
  }
};

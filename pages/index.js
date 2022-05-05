import Form from "components/Form";
import Result from "components/Result";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl md:w-1/2 mx-4">
      <Form />
      <Result />
    </div>
  );
};

export default Home;

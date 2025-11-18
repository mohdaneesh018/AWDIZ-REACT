import { useParams } from "react-router-dom";

const Productpage = () => {
  const { id } = useParams();
  return (
    <>
      <h2>ProductId : {id}</h2>
    </>
  );
};

export default Productpage;

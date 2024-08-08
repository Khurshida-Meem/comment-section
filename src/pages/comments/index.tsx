import { useContext } from "react";
import CreateComment from "../../components/create-comment";
import AllComments from "./all-comments";
import { DataContext } from "../../contexts";

const Comments = () => {
  // const [data, setData] = useState(dummyData);

  const data = useContext(DataContext);
  return (
    <>
      <AllComments />
      <center>
        <div style={{ maxWidth: "700px" }}>
          <CreateComment userImg={data?.currentUser?.image?.png} title="Send" />
        </div>
      </center>
    </>
  );
};

export default Comments;

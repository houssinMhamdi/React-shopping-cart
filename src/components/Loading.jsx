import "../styles/Loding.css";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

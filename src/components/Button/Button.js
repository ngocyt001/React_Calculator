function Button({ data, key, setData }) {
  const btnClick = () => {
    setData({
      display: data.display,
      action: data.action,
      class: data.class,
    });
  };

  return (
    <>
      <button key={key} className={data.class} onClick={btnClick}>
        {data.display}
      </button>
    </>
  );
}

export default Button;

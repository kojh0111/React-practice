const PMap = ({ data }) => {
  const pthree = [];
  data.map((d) => pthree.push(<p>{d}</p>));

  return <div>{pthree}</div>;
};

export default PMap;

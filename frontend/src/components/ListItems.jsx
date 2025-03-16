
const ListItems = ({ list }) => {
  return (
    <ol className="list-[disc] mx-6">
      {list.map(items => {
        return <li key={items} className="my-1 font-bangla ">{items}</li>;
      })}
    </ol>
  );
};

export default ListItems;

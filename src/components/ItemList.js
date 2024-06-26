import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="text-left p-2 m-2 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{items.card.info.name}</span>
              <ul>
                ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </ul>
            </div>
            <p>
              <span className="text-xs">{items.card.info.description}</span>
            </p>
          </div>
          <div className="w-3/12">
            <div>
              <button className="p-2 px-12 text-green-600 rounded-lg font-extrabold bg-white shadow-lg absolute m-auto">
                ADD
              </button>
            </div>
            <img
              className="w-full rounded-lg"
              src={CDN_URL + items.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

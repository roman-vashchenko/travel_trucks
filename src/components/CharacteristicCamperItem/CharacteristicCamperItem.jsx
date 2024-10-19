/* eslint-disable react/prop-types */
const CharacteristicCamperItem = ({ element }) => {
  return (
    <>
      <svg width={16} height={16}>
        <use href={element.icon}></use>
      </svg>
      <span>{element.name}</span>
    </>
  );
};

export default CharacteristicCamperItem;

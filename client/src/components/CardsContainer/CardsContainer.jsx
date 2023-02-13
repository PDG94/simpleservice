/* import "../CardsContainer/cardsContainer.css"; */
import { Card } from "../index";

const CardsContainer = () => {
  const info = [
    {
      id: 1,
      name: "Edwards",
      image: "image",
      price: "2000",
      active: "Developer",
    },
    {
      id: 2,
      name: "Magali",
      image: "image",
      price: "4000",
      active: "Developer",
    },
    {
      id: 3,
      name: "Ash",
      image: "image",
      price: "8000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
    {
      id: 4,
      name: "Lu",
      image: "image",
      price: "5000",
      active: "Developer",
    },
  ];

  return (
    <div>
      <div>
        {!info.length ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          info.map((user) => {
            return (
              <div key={user?.id}>
                <Card
                  id={user?.id}
                  name={user?.name}
                  image={user?.image}
                  price={user?.price}
                  active={user?.active}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardsContainer;

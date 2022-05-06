import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function FetchMenu() {
  useEffect(() => {
    getMenu()
  }, []);

  const dispatch = useDispatch();

  const pizzaList = useSelector((store) => store.pizzaList);


  function getMenu() {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((res) => {
        console.log('GET /pizza', res.data);

        dispatch({
          type: 'SET_PIZZA',
          payload: res.data
        });
      })
      .catch((err) => {
        console.error('GET /pizza failed', err)
      });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>

          {pizzaList.map((pizza) => {
            return (
              <tr>
                <td>{pizza.name}</td>
                <td>{pizza.description}</td>
                <td>{pizza.price}</td>
                <td><img src={pizza.image_path}></img></td>

              </tr>

            );
          })}
        </tbody>
      </table>
    </div>)
}

export default FetchMenu;
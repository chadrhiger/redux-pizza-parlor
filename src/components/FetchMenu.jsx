import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function FetchMenu() {
  useEffect(() => {
    getMenu()
  }, []);

  const dispatch = useDispatch();

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
  return (<p>to sender</p>);
}

export default FetchMenu;
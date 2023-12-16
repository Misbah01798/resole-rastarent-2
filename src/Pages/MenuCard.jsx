

const MenuCard = ({menu}) => {
    const { food_img, food_name, food_origin, price} =menu;
  return (
    
       <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={food_img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{food_name}</div>
             
            </div>
          </div>
        </td>
        <td>
          
          {food_origin}
          <br/>
          </td>
        <td>Price: {price}</td>
        
      </tr>
    
  )
}

export default MenuCard

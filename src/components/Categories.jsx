import React from 'react'

function Categories({items, onClickItem}) {
  const [activeItem,setActiveItem] = React.useState(null)
console.log(activeItem);
const onSelectItem = (index) => {
  setActiveItem(index)
} 

  return (
    <>
           <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active' : ''}
              onClick={()=> setActiveItem(null)}
              >Все</li>
            {items && items.map((name, index) =>
                 <li
                 className={activeItem === index ? 'active' : ''}
                 onClick={()=>onSelectItem(index)} key={`${name}_${index}`}>{name}</li>)
            }
            </ul>
          </div>
    </>
  )
}

export default Categories
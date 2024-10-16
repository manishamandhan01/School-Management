import React from 'react'

interface Iprops{
    menuItems :{
        title: string,
        path: string,
        icon: JSX.Element,
    }[];
};

const SideMenu:React.FC<Iprops>= ({menuItems}) => {


    
  return (
    <div>
        {menuItems.map((item,index)=>{
            return(
                <>
                <li>
                   <a href={item.path}>{item.title}</a>{item.icon}
                </li>
                </>
            )
        })}
      
        
    </div>
  )
}

export default SideMenu;
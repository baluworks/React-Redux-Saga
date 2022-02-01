import React, {createContext, useContext} from 'react';

export const themes = {
    light:{buttonColor:'red',editCloseBtnColor:'green'},
    dark:{buttonColor:'yellow',editCloseBtnColor:'orange'}
}
const newContext = createContext(themes.dark);

export default newContext;
export const  NewTheme = ()=>React.useContext(newContext);
export  function  NewProvider (props){
    let theme = NewTheme();
 return    <newContext.Provider value={props.theme}>{props.children}</newContext.Provider>
}




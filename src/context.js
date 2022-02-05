import React, {createContext, useContext} from 'react';

export const themes = {
    light:{buttonColor:'red',editCloseBtnColor:'green',expTextColor:'red',savingsTextColor:'green'},
    dark:{buttonColor:'yellow',editCloseBtnColor:'orange',expTextColor:'yellow',savingsTextColor:'blue'}
}
const newContext = createContext(themes.light);

export default newContext;
export const  NewTheme = ()=>React.useContext(newContext);
export  function  NewProvider (props){
    let theme = NewTheme();
 return    <newContext.Provider value={props.theme}>{props.children}</newContext.Provider>
}

export function NewConsumer (props){
    return <newContext.Consumer>{props.children}</newContext.Consumer>
}

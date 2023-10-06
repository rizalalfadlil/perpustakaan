import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function InputText(props){
 return(
    <div className={`input w-${props.w}`}>
        <b className="underlined">{props.name}</b>
        <input type="text" name={props.name} id={props.id}/>
    </div>
 )
}
function InputTextArea(props){
    const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

    return(
       <div className={`input w-${props.w}`}>
           <b className="underlined">{props.name}</b>
           <textarea
           name={props.name} 
           id={props.id} 
           rows={props.rows}
           value={text}
            onChange={handleChange}
           />
       </div>
    )
   }
function InputNumber(props){
    return(
       <div className={`input w-${props.w}`}>
           <b className="underlined">{props.name}</b>
           <input type="number" name={props.name} id={props.id}/>
       </div>
 )
}
function InputDate(props){
    return(
       <div className={`input w-${props.w}`}>
           <b className="underlined">{props.name}</b>
           <input type="date" name={props.name} id={props.id}/>
       </div>
 )
}
export {InputText, InputNumber, InputTextArea, InputDate};
const Input = (props) => {
   return (
      <div>
         <input
            onChange={props.onChange}
            value={props.value}
            className={props.className}
            placeholder={props.placeholder}
            type={props.type}
         />
      </div>
   );
};
export default Input;

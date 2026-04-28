import { Link } from "react-router-dom";
function Button({children,to,disabled,type,onClick}) {
const base=" bg-yellow-400 text-sm  font-semibold uppercase  inline-block rounded-full text-stone-800 tracking-wide hover:bg-yellow-300  transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed ";
const styles={
   primary: base + " px-4 py-3 md:px-6 md:py-4 ",
   small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs ",
   secondary: " bg-transparent text-sm border-2 border-stone-300  font-semibold uppercase  inline-block rounded-full text-stone-400 hover:text-stone-800 focus:text-stone-800  tracking-wide hover:bg-stone-300  transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:bg-stone-200 disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5 "
}
  if(to)
     return (
       <Link to={to} className={styles[type]}>
        {children}
       </Link>
     );
 if(onClick) return (
            <button
            onClick={onClick}
               disabled={disabled} 
               className={styles[type]}>
               {children}
            </button>
        
    )
    return (
            <button
               disabled={disabled} 
               className={styles[type]}>
               {children}
            </button>
        
    )
}

export default Button

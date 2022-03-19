import { Link,  useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, isWhite = true, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link className={match ? "text-secondary-main no-underline text-bold" : `${isWhite === true ? "text-white " : "text-black"} no-underline`} to={to} {...props}>
          {children}
        </Link>        
      </div>
    );
  }

  export default CustomLink
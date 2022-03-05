import { Link,  useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link className={match ? "text-secondary-main no-underline text-bold" : "text-white no-underline "} to={to} {...props}>
          {children}
        </Link>        
      </div>
    );
  }

  export default CustomLink
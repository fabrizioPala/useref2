import { useEffect, useRef } from "react";
function Message() {
  const isMounted = useRef(null);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Mounting for the first time");
      isMounted.current = true;
    } else {
      console.log("Mounting again for debug purposes");
    };
  }, []);
  
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default Message;

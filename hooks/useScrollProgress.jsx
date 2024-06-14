import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
   const [completion, setCompletion] = useState(0);

   useEffect(() => {
      const updateScrollCompletion = () => {
         const currentProgress = window.scrollY;
         const scrollHeight = document.body.scrollHeight - window.innerHeight;

         if (scrollHeight) {
            setCompletion(
               Number(currentProgress / scrollHeight).toFixed(2) * 100
            );
         }
      };

      // evento
      window.addEventListener("scroll", updateScrollCompletion);
      // clean up
      return () => window.removeEventListener("scroll", updateScrollCompletion);
   }, []);

   return completion;
};

export default useScrollProgress;

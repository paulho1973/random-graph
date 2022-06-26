import { useEffect } from "react"
import { useCallbackPrompt } from './usePrompts'

const BeforeRouterChange = () => {

  const [showPrompt, confirmNavigation, cancelNavigation] =
  useCallbackPrompt(true) // trigger here

  useEffect(() => {
   
    if (showPrompt) {
      let result = window.confirm('Are you sure you want to navigate?');
      if (result) {
        confirmNavigation();
      } else {
        cancelNavigation();
      }
    }
  }, [showPrompt, confirmNavigation, cancelNavigation]);


  return (
    <div>
        <h1>Before router change</h1>
    </div>
  );
};

export default BeforeRouterChange;
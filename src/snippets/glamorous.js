import { render } from "react";
import { Div }    from "glamorous";

const App = ({ align }) => (
  <Div fontSize={20} textAlign={align}>
    Шалом, гламурные!
  </Div>
);

render(<App />);
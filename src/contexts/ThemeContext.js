import React, { Component } from "react";
import App from '../App';
//const { Provider, Consumer } = React.createContext();
const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      theme: "Day"
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    const dataContext = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    }

    return <ThemeContext.Provider value={dataContext}>
      <App />
    </ThemeContext.Provider>;
  }
}

export { ThemeContextProvider };
export default ThemeContext
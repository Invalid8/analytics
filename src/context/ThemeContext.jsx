/* eslint-disable react/prop-types */
import { Component } from "react";
import { createContext } from "react";
import { editSettings } from "../data/LocalStorage";

export const ThemeContext = createContext();

const db_theme_key = "theme";

export default class ThemeContextProvider extends Component {
  state = {
    theme: document.documentElement.className,
  };

  toggleTheme = (newThemeCode) => {
    document.documentElement.className = newThemeCode;
    editSettings(db_theme_key, newThemeCode);
    this.setState({ theme: newThemeCode });
  };

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

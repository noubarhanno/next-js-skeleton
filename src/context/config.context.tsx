import React, { createContext, useContext, useReducer } from "react";
import { EDirection, ELocales, EThemeMode } from "../interfaces";

/**
 * config reducer actions
 */
export enum EConfigContextAction {
  SET_THEME_MODE = "SET_THEME_MODE",
  SET_DIRECTION = "SET_DIRECTION",
  SET_LOCALE = "SET_LOCALE",
}

/**
 * type of the config context
 */
type TConfigContext = {
  themeMode: EThemeMode;
  direction: EDirection;
  locale: ELocales;
};

/**
 * config context consumer
 */
type TConfigContextConsumer = {
  state: TConfigContext;
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
};

const ConfigContext = createContext({} as TConfigContextConsumer);

const ConfigContextWrapper: React.FC<{
  children: React.ReactNode;
  defaultTheme: EThemeMode;
  defaultDirection: EDirection;
  defaultLocale: ELocales;
}> = ({ children, defaultDirection, defaultLocale, defaultTheme }) => {
  /**
   *
   * @param state - The current state of the ConfigContext.
   * @param action - The action to dispatch to the ConfigContext.
   * @returns - The new state of the ConfigContext.
   */
  const reducer = (
    state: TConfigContext,
    action: { type: keyof EConfigContextAction; payload: any }
  ) => {
    switch (action.type) {
      case EConfigContextAction.SET_THEME_MODE:
        return {
          ...state,
          themeMode: action.payload,
        };
      case EConfigContextAction.SET_DIRECTION:
        return {
          ...state,
          direction: action.payload,
        };
      case EConfigContextAction.SET_LOCALE:
        return {
          ...state,
          locale: action.payload,
        };
      default:
        return state;
    }
  };

  /**
   * The reducer for the ConfigContext.
   */
  const [state, dispatch] = useReducer(reducer, {
    themeMode: defaultTheme,
    direction: defaultDirection,
    locale: defaultLocale,
  });

  return (
    <ConfigContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextWrapper;

export function useConfigContext(): TConfigContextConsumer {
  return useContext(ConfigContext);
}

import React, { createContext, useContext, useMemo } from 'react';

interface IFlux {
  gutter: number | [number, number];
}

interface FluxProviderProps {
  children: React.ReactNode;
  gutter?: number | [number, number];
}

const FluxContext = createContext({} as IFlux);

export const useFlux = () => useContext(FluxContext);

const FluxProvider = ({ children, gutter = 0 }: FluxProviderProps) => {
  const ret = useMemo(() => ({ gutter }), [gutter]);
  return <FluxContext.Provider value={ret}>{children}</FluxContext.Provider>;
};

export default FluxProvider;

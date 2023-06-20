import React from 'react';

const RouletteContext = React.createContext<any>(null);

export const RouletteProvider = RouletteContext.Provider;
export const RouletteConsumer = RouletteContext.Consumer;

export default RouletteContext;

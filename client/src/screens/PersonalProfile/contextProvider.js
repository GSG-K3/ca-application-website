import React, { Component } from 'react';

const MyContext = React.createContext();

const ValueProvider = MyContext.Provider;
const ValueConsmer = MyContext.Consumer;

export { ValueProvider, ValueConsmer };

import { createContext } from 'react';
export const NameContext = createContext();
export const ColorContext = createContext('violet');
export const BooksContext = createContext([null, () => { }])
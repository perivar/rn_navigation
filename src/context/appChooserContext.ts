import React, { SetStateAction } from 'react';

type AppChooserContextType = {
  theme: 'original' | 'crypto' | 'bookstore';
  setTheme: (
    theme: SetStateAction<'original' | 'crypto' | 'bookstore'>
  ) => void;
};

export const AppChooserContext = React.createContext<AppChooserContextType>({
  theme: 'original',
  setTheme: () => {},
});

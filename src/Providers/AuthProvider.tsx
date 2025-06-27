import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged, getAuth} from '@react-native-firebase/auth';
import {LoadingIndicator} from '../Components/LoadingIndicator';

interface AuthContextType {
  user: any;
  guest: boolean;
  setGuest: (isGuest: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  guest: false,
  setGuest: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState(null);
  const [guest, setGuest] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (firebaseUser: any) => {
      setUser(firebaseUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return <LoadingIndicator />;
  }

  return (
    <AuthContext.Provider value={{user, guest, setGuest}}>
      {children}
    </AuthContext.Provider>
  );
};

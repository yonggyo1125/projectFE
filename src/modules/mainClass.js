import { createContext, useState } from 'react';

const MainClassContext = createContext({
  mainClass: '',
  setMainClass: null,
});

const MainClassProvider = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.split('/');
  path.shift();
  let _mainClass = path.join('_');
  _mainClass = _mainClass ? `${_mainClass}_page` : 'main_page';

  const [mainClass, setMainClass] = useState(_mainClass);
  const value = { mainClass, setMainClass };

  return (
    <MainClassContext.Provider value={value}>
      {children}
    </MainClassContext.Provider>
  );
};

const { Consumer: MainClassConsumer } = MainClassContext;

export { MainClassProvider, MainClassConsumer };

export default MainClassContext;

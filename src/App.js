// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
// import TodoBanner from './components/Todo/TodoBanner';
// import Welcome from './components/Welcome'
// import CounterCompoment from './components/ClassCounter'
// import Counter from './components/Counter'
// import InputComponent from './components/propsdemo/inputComponent';
// import TodoContainer from './components/Todo/TodoContainer';
// import Dashboard from './components/Todo/ConditionalRendering';
// import EmojiDisplay from './components/EmojiDisplay';
// import DisplayList from './components/RenderingList';
// import ProFeatureContainer from './components/hoc/EnhancedList';
// import RenderList from './components/hoc/DisplayList';
// import SimpleUseEffect from './hooksDemo/useEffectDemo/SimpleUseEffect';
// import FetchProducts from './hooksDemo/useEffectDemo/FetchApi';
// import RenderPropsDemo from './ProductsApi/Button';
// import ProductLoaderContainer from './RenderProps/ProductWithRenderProps';
import ContextAPIDemo from './components/hooksDemo/useContextDemo/ComponentA';
import { NameContext, ColorContext } from './store/contextStore';
import ComponentA from './components/hooksDemo/useContextDemo/ComponentA';
import BooksProvider from './components/hooksDemo/useContextDemo/booksProject/BooksProvider';
import BooksList from './components/hooksDemo/useContextDemo/booksProject/BooksList';

function App() {
  return (
    <>
      {/* <Welcome/> */}
      {/* <CounterCompoment /> */}
      {/* <Counter/> */}
      {/* <InputComponent/> */}
      {/* <AnimalContainer /> */}
      {/* <TodoContainer />  */}
      {/* <Dashboard /> */}
      {/* <EmojiDisplay/> */}
      {/* <DisplayList/> */}
      {/* <ProFeatureContainer /> */}
      {/* <RenderList /> */}
      {/* <SimpleUseEffect/> */}
      {/* <FetchProducts/> */}
      {/* <RenderPropsDemo /> */}
      {/* <ProductLoaderContainer /> */}
      {/* <ContextAPIDemo /> */}
      {/* <NameContext.Provider value={'Sportz Interactive'}>
        <ColorContext.Provider value='orange'>
          <ComponentA />
        </ColorContext.Provider>
      </NameContext.Provider> */}

      {/* <BooksProvider>
        <BooksList />
      </BooksProvider> */}
      <BooksProvider children={<BooksList />} />
    </>
  );
}

export default App;

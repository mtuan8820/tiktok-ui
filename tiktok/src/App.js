import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';

import DefaultLayout from '~/components/Layout/DefaultLayout';
import {publicRoutes} from '~/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index) =>{
            const Layout = route.layout === null? Fragment : DefaultLayout
            const Page = route.compnent;
            return (
              <Route key={index} path={route.path} 
                element = {
                  <Layout>
                    <Page />
                  </Layout>
                } 
              />
            );
          }
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

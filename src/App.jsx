import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleShow from './pages/SingleShow';
import SinglePerson from './pages/SinglePerson';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Profile from './pages/Profile';
import Register from './pages/Register';

// const Home = lazy(() => import('./pages/Home'));
// const Movies = lazy(() => import('./pages/Movies'));
// const SingleShow = lazy(() => import('./pages/SingleShow'));
// const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        {/* <Suspense fallback={<Loading />}> */}
        <Route exact path="/" component={Home} />
        <Route path="/shows/:media/:id" component={SingleShow} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={Movies} />
        <Route path="/person/:id" component={SinglePerson} />
        <Route path="/register" component={Register} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
        {/* </Suspense> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

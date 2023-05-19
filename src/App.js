
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WelcomePage from './Signup/WelcomePage';
import CreateAccount from './Signup/CreateAccount';
import ProfilePhoto from './Signup/ProfilePhoto';
import MainPage from './Main/MainPage';
import MainPageNav from './Main/MainPageNav';
import Post from './Main/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPageNav/>}>
            <Route index element={<MainPage/>}/>
         
          </Route>
          <Route path='welcomepage' element={<WelcomePage/>}/>
          <Route path='createaccount' element={<CreateAccount/>}/>
          <Route path='profilephoto' element={<ProfilePhoto/>}/>
          <Route path='post' element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

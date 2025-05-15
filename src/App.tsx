import logo from "./assets/interviewpoint-logo.svg";
import themeSwitcher from './assets/theme-switcher-colorful.svg'
import './App.css';
import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div className='wrapper'>
      <div className="app">
        <header className='app__header'>
          <div className='app__logo'>
              <img className="app__logo-image" src={logo} alt="logo" />
              <p className="app__logo-element">База знаний</p>
              <p className="app__logo-element">База задач</p>
              <p className="app__logo-element">Услуги</p>
          </div>
          <div className="app__header-elements">
            <input className="app__header-searchform" type="text" />
            <img className="app__header-theme" src={themeSwitcher} alt="themeswitcher" />
            <button className="app__header-btn">Войти</button>
          </div>
        </header>
        <main className="app__main">
          <div className="app__main-head">
            <h1> ITERVIEWPOINT</h1>
          </div>
          <div className="app__main-description">
            <p className="app__main-description-text">платформа, где вы сможете отточить навыки фронтенд-разработки 
            и подготовиться к успешному собеседованию на должность фронтенд-разработчика.</p>
          </div>
          <div className="app__main-btns">
            <button className="app__main-btns-item">Начать</button>
            <button className="app__main-btns-item"> Наши услуги</button>
          </div>
        </main>
        <footer className="app__footer">
            <p>© 2025 ITERVIEWPOINT</p>
        </footer>
        </div>
    </div>
  )
}

export default App

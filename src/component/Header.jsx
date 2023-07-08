import React from 'react'
import { useThemeContext } from './Context'

function Header() {
    const theme = useThemeContext()
    const darkMode = theme.darkMode

    const changeTheme = () =>{
        theme.setDarkMode(!darkMode)
    }
    return (
        <>
            <header className={`navbar navbar-expand ${darkMode? 'navbar-dark bg-dark' : 'bg-secondary bg-light'} shadow-sm`}>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="navbar-item d-flex">
                            <a href="" className="nav-link">
                                صفحه اصلی
                            </a>
                            <a href="" className="nav-link">
                                محصولات ما
                            </a>
                            <a href="" className="nav-link">
                                درباره ما
                            </a>
                            <a href="" className="nav-link">
                                ارتباط با ما
                            </a>
                        </li>
                    </ul>
                    <button onClick={changeTheme} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}>
                        {darkMode? 'روشن' : "تاریک"}

                    </button>
                </div>

            </header>
        </>
    )
}

export default Header

import { Route, Link, Routes } from 'react-router-dom';   //this is for the menu
import Shop from "./Shop"
import Blog from "./Blog"
import S from './Menu.module.css'

export default function Menu() {



    return (
        <>
            <header className={S.header}>
                <div>
                    <Link to='/'><img src="/nlogo2.png" alt="" style={{ width: '200px', height: '70px' }} /></Link>
                </div>
                <div className='flex flex-row items-center space-x-4 ' id='menuDisplay'> {/*'space-x-4' para espaciar los enlaces */}
                    {/* li > a */}
                    <Link to='/shop'>
                        SHOPs
                    </Link>
                    <Link to='/blog'>
                        BLOG
                    </Link>
                    <Link to='/'>
                        HOME
                    </Link>
                </div>
            </header>

            <Routes>  {/* same as switch */}
                <Route path="/"></Route>
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </>
    )

}
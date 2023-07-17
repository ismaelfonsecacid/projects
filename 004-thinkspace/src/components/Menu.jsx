import { Route, Link, Routes } from 'react-router-dom';
import Shop from "./Shop"
import Blog from "./Blog"

export default function Menu() {



    return (
        <>

            <header className="flex flex-row justify-between">
                <div>izq</div>
                <div>
                    <Link to='/'>
                        HOME
                    </Link>
                    <Link to='/shop'>
                        SHOP
                    </Link>
                    <Link to='/blog'>
                        BLOG
                    </Link>
                </div>
            </header>

            <Routes>
                <Route path="/"></Route>
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>

        </>
    )
}
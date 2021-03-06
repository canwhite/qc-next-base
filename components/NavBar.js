import Link from 'next/link'

/*
//这个样式表仅仅对组件起作用，不影响其它地方的ul 
const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>主页</a></Link></li>
            <li><Link href="/about"><a>关于</a></Link></li>
        </ul>

        <style jsx>{
            `
            ul {
                background: #333;
                color: #fff;
                list-style: none;
                display: flex;
            }

            ul li {
                font-size: 18px;
                margin: 20px 20px 20px;
            }

            ul li a{
                color: #fff;
                text-decoration: none;
            }
              
            `
        }
        </style>
    </div>
);
*/
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">BitzPrices</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">主页</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">关于</a>
                </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>`
            </form> */}
        </div>
    </nav>
);

export default Navbar;

import Navbar from "./NavBar";
import Head from 'next/head';
const Layout = (props)=>(
    <div>
        {/* 页面标题和样式表引用 */}
        <Head>
            <title>BitzPrices</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <Navbar />  
        {/* 将页面内容放入容器中 */}
        <div className="container">
            {props.children}
        </div>
    </div>
)
export default Layout;

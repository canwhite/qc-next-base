import Layout from '../components/Layout';
import Prices from  '../components/Prices'
import axios from "axios";
const Index = (props)=>{
    return(
        <Layout>
            <div>
                <h1>欢迎访问 BitzPrices</h1>
                <p>当前的比特币汇率：</p>
                <Prices bpi={props.bpi} />
            </div>
        </Layout>
    )
}

//初始化获取数据
Index.getInitialProps = async function() {
    const res = await axios(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    console.log('---------res',res.data);

    return {
        bpi: res.data
    }
} 



export default Index;
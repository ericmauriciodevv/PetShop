import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
 
}

export default MyApp

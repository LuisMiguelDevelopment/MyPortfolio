import Navbar from '../organisms/Navbar/Navbar';
import Banner from '../organisms/Banner/Banner';
import Text from '../atoms/Text/Text';
const DefaultLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <Banner />
      {children}
      
    </>
  )
}

export default DefaultLayout
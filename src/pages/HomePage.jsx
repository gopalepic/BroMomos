import Header from '../components/Header'
import Body from '../components/Body'
import IntroductionPage from '../components/IntroductionPage'
import USP from '../components/USP'
const HomePage = () => {
  return (
    <div className=' bg-black text-white'>
      <Header></Header>
      <Body></Body>
      <IntroductionPage/>
      <USP/>
      
    </div>
  )
}

export default HomePage

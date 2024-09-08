import Feed from './Feed'
import UpcomingEvents from './UpcomingEvents'
import ConnectCard from './ConnectCard'
import HomePage from './HomePage'
const Home = () => {
  return (
    <>
      <HomePage />
      <UpcomingEvents />
      <Feed />
      <ConnectCard />
    </>
  )
}

export default Home
import FeatureSection from "./FeatureSection";
import Herosection from "./Herosection";
import ReviewList from "./ReviewList";
import TiketList from "./TicketListSearchFilter";


export default function Homepage() {
  return (
    <div>
        <Herosection/>
        <FeatureSection/>
        <ReviewList/>
        <TiketList/>
    </div>
  )
}
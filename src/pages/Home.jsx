import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import ActivityOverview from '../components/ActivityOverview'
import ScheduleLocation from '../components/ScheduleLocation'
import InstagramFeed from '../components/InstagramFeed'
import ContactForm from '../components/ContactForm'

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Philosophy />
            <ActivityOverview />
            <ScheduleLocation />
            <InstagramFeed />
            <ContactForm />
        </div>
    )
}

export default Home

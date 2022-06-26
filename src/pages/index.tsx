import type { NextPage } from 'next'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { SliderList } from '../components/Elements/SliderList'
import { testimonials } from '../data/data'

const Home: NextPage = () => {

  return (
    <SliderList
      slidesToScroll={1}
      slidesToShow={1}
    >
      {testimonials.map(testimonial => (
        <TestimonialCard
          key={testimonial.name}
          personName={testimonial.name}
          personPhotoUrl={testimonial.url}
          testimonial={testimonial.testimonial}
        />
      ))}
    </SliderList>
  )
}

export default Home

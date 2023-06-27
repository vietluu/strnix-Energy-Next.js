import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/ui/home/Home'))

export default function Homepage() {
  return (
  <Home/>
  )
}

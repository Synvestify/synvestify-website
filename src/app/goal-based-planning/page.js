import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import CTA from '@/components/CTA'
import GoalBasedPlanningHero from '@/components/services/GoalBasedPlanningHero'
import GoalBasedPlanningServices from '@/components/services/GoalBasedPlanningServices'
import GoalBasedPlanningProcess from '@/components/services/GoalBasedPlanningProcess'

export const metadata = {
  title: 'Goal-Based Planning — Synvestify',
  description: 'Achieve your financial goals with personalized planning. Retirement, education, property purchase, and wealth creation strategies tailored to your timeline.',
  keywords: 'goal-based planning, financial goals, retirement planning, education planning, wealth creation, financial milestones',
  openGraph: {
    title: 'Goal-Based Planning — Synvestify',
    description: 'Achieve your financial goals with personalized planning and strategic investment guidance.',
    type: 'website',
  },
}

export default function GoalBasedPlanningPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <GoalBasedPlanningHero />
        <GoalBasedPlanningServices />
        <GoalBasedPlanningProcess />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

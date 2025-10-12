import { HeaderBox } from '@/components/HeaderBox'
import { TotalBalancebox } from '@/components/TotalBalancebox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Mohamed'}

  return (
    <section className='home'>
      <div className='home-content'>
      <header className='home-header'>
      <HeaderBox 
      type="greeting"
      title="Welcome"
      user={loggedIn?.firstName || 'Guest'}
      subtext=" Access and manage Your account And transaction efficiently"
      />

      < TotalBalancebox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={66000}
      />
      </header>
      </div>
    </section>

  )
}

export default Home
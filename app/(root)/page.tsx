import { HeaderBox } from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import { TotalBalancebox } from '@/components/TotalBalancebox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Mohamed' , lastName: 'Amini' , email:'mohamedamini740@gmail.com'}

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

      RECENT TRANSACTIONS 
      </div>
      <RightSidebar 
      
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 12305.30},{currentBalance: 60005.30}]}
      />
 


    </section>

  )
}

export default Home
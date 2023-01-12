import React from 'react'
import Tabmenu from '../../components/Tabmenu/Tabmenu'

export default function Videos() {
    const tablist = [
        {
          id: 1,
          text: "Home",
          link: "/home",
        },
        {
          id: 2,
          text: "Videos",
          link: "/videos",
        },
        {
          id: 3,
          text: "Leaderboard",
          link: "/leaderboard",
        },
        {
          id: 4,
          text: "Challenges",
          link: "/challenges",
        },
      ];
  return (
    <div>
        <Tabmenu
        tablist={tablist}
        />
    </div>
  )
}

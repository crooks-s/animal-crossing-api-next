import React from 'react'

const Name = ({ villager, style }) => {
  return (
        <div style={style} className={`h-auto -mt-12 py-2 px-3 relative -left-28 top-16 -rotate-12 rounded-full `}>
          <span className={`relative`}>
            {villager && villager.name ? villager.name : "Unknown"}
          </span>
        </div>
  )
}

export default Name
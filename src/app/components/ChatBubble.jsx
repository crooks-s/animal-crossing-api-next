import React from 'react'

const ChatBubble = () => {
  return (
    <div className="min-h-[10rem] w-full bg-chat-pattern bg-center bg-no-repeat bg-contain flex items-center justify-center mt-10 p-0">
    {/* //TODO: add ternary in case of null value */}
    <span className="flex items-center justify-center w-1/2">
      {villager && villager.quote
        ? villager.quote
        : "This villager does not have a particular saying!"}
    </span>
  </div>
  )
}

export default ChatBubble
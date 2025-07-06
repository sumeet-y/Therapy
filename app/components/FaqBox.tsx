import React from 'react'

const FaqBox = ({question,answer}:{question:string,answer:string}) => {
  return (
    <div className="collapse collapse-arrow bg-base-100 border-b border-base-300 rounded-none">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold text-xl">{question}</div>
      <div className="collapse-content text-sm">{answer}</div>
    </div>
  );
}

export default FaqBox
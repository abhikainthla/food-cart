import React from 'react'

function FaqCards(props) {
  return (
    <div className="faq-container">
  <details>
    <summary className="faq-question">{props.question}</summary>
    <p className="faq-answer">{props.answer}</p>
  </details>
</div>

  )
}

export default FaqCards
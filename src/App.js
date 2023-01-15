import './App.css'
import { Questions } from './components/questions'
import { imgs } from './images/images'
import { useState } from 'react'
import woman from './images/illustration-woman-online-desktop.svg'


const lista = [
  {
    question: 'How many team members can i invite?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.', 
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.', 
  },
  {
    question: 'How do I reset my password?',
    answer: '  Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.', 
  },
  {
    question:  'Can I cancel my subscription?',
    answer: ' Yes! Send us a message and we’ll process your request no questions asked.', 
  },
  {
    question: 'Do you provide additional support?',
    answer: ' Chat and email support is available 24/7. Phone lines are open during normal business hours.', 
  }
]

export const App = () => {

  const [click, setClick] = useState(null)
  
  const Teste = (i) => {

    if(click === i){
      return setClick(null)
   } 

    setClick(i)
  }  

  return(
    <main>
      <div className='left'>
        <div className='wrapper'>
          
          <picture>
            <source media='(max-width:425px)' srcSet={imgs[5]} />
            <img src={woman} alt='' id='woman'/>
          </picture>

          {/* Refazer as img pra adicionar as pictures */}

          <img src={imgs[1]} id='bg' alt='background of the image'/>
        </div>
        <img src={imgs[0]} id='box' alt='image of a orange cube'/>
      </div>

      <div className='rigth'>
        <h1>FAQ</h1>

        {lista.map((item, i) => (
          <div className={click != i ? 'content' : 'content show'} onClick={() => Teste(i)} key={i}>
            <div className='questions'>
              {item.question}
              <img src={imgs[3]} alt='arrow' className={click == i ? 'deg on': 'deg off'} />
            </div>
            <div className='answers'>
              {item.answer}
            </div>
          </div>
        ))}
      
      </div>
    </main>
  )
} 

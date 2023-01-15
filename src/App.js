import './App.css'
import { Questions } from './components/questions'
import { Images } from './images/images'



export const App = () => {
  return(
    <main>
      <div className='left'>
        <div className='wrapper'>
          <img src={Images[4]} id='woman' alt='woman using a monitor'/>
          <img src={Images[1]} id='bg' alt='background of the image'/>
        </div>
        <img src={Images[0]} id='box' alt='image of a orange cube'/>
      </div>

      <div className='rigth'>
        <h1>FAQ</h1>
        <Questions q={'How many team members can i invite?'}/>
        <Questions q={'What is the maximum file upload size?'}/>
        <Questions q={'How do i reset my password?'}/>
        <Questions q={'Can I cancel my subscription?'}/>
        <Questions q={'Do you provide addition support?'}/>
      </div>
    </main>
  )
} 

import { Images } from "../images/images"

export const Questions = (props) => {
  return(
    <div className="questions">
      <p>
       {props.q}
      </p>
      <div className="arrow">
        <img src={Images[3]} alt=''/>
      </div>
    </div>
  )
}
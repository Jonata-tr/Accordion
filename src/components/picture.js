export const Pictures = (props) => {
  return(
    <picture>
      <source media='(min-width:700px)' srcSet={props.desktop} />
      <source media='(max-width:425px)' srcSet={props.mobile}  />
      <img src={props.img} alt={props.alt}  id={props.id}/>
    </picture>
  )
} 
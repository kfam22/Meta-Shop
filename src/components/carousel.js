import productsModeled from '../assets/productsModeled';

export default function Carousel() {
  return (
    <div className="wrapper">
      <span class="material-symbols-outlined arrow">
      arrow_forward_ios
      </span>

        {productsModeled.map(image => {
            if(typeof image === 'object'){
                return(
                <div className='item imageInfo'>
                    <div>
                    <h1>{image.collection1.title}</h1>
                    <p>{image.collection1.date}</p>
                    <p>{image.collection1.location}</p>
                    <p>{image.collection1.info}</p>
                    <p>------></p>
                    </div>
                </div>
                )
            }
            else {
                console.log('image div created')
                return(
              <div className='item' key={image}>
                <img src={image} alt=''/>
              </div>
            );}
          })}
    </div>
  )
}
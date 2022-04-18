import productsModeled from '../assets/productsModeled';

export default function carousel() {
  return (
    <div className="wrapper">
        {productsModeled.map(image => {
            //   console.log("current image", image)
            if(typeof image === 'object'){
                // console.log("we're inside the if statement", image, "image.title", image.collection1.title)
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
import cart from '../assets/cart.png';

export default function nav() {
  return (
    <div className='verticalNav'>
        <div className='cart'>
            <img src={cart}/>
        </div>

        <div className='nav'>
        <p>shop</p>
        <p>about</p>
        <p>press</p>
        </div>
    </div>
  )
}

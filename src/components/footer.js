
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-section">
          <p>about</p>
          <a href='/'>contact</a>
          <a href='/'>press</a>
          <a href='/'>sustainability</a>
        </div>

        <div className="footer-section">
          <p>customer care</p>
          <a href='/'>terms & conditions</a>
          <a href='/'>shipping</a>
          <a href='/'>returns</a>
          <a href='/'>sizing</a>
        </div>

        <div className="footer-section">
          <p>connect</p>
          <a href='/'>@almost.on.time</a>
          <a href='/'>tiktok</a>
          <a href='/'>youtube</a>
        </div>

        <div className="footer-section">
          <p>newsletter</p>
          <form>
              <input
              type='email'
              name='email'
              // value={}
              // onChange={}
              />
              <button>subscribe</button>
          </form>
        </div>

        <div className="bottom">
          <p>almost on time ©</p>
        </div>
    </footer>
  )
}

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 intro-text'>
                <p style={{fontSize: '60px', fontWeight: 'bold'}} color="white">
                  {props.data ? props.data.title : 'Loading'}
                </p>
                <p style={{fontSize: '23px', fontFamily: 'revert-layer'}}>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#vision'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

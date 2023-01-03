export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 intro-text'>
                <h1 color="white">
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <b><p>{props.data ? props.data.paragraph : 'Loading'}</p></b>
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

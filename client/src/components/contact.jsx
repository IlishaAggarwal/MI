export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container' style={{padding: '5px'}}>
          <div className='contact-item'>
            <h3>Contact Us</h3>
            <p>
              <span>
                <i className='fa fa-envelope-o'></i> Email
              </span>{' '}
              {props.data ? props.data.email : 'loading'}
            </p>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 MI
          </p>
        </div>
      </div>
    </div>
  )
}

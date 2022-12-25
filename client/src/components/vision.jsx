export const Vision = (props) => {
  return (
    <div id='vision' className='text-center'>
      <div className='container'>
       
        <div id='visiontitle' className='col-md-10 col-md-offset-1 section-title' >
          <h2>Vision</h2>
        </div>
        <div className='row' >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

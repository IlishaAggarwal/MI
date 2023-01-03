export const Team = (props) => {
  return (
    <div id='team' className='text-center' style={{
      padding: '0 0 60 0'
    }}>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>Our team is passionate about helping you achieve your financial goals
          </p>
        </div>
        <div style={{
          padding: '0 200 0 200'
        }}>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                <div className='thumbnail' >
                  {' '}
                  <img src={d.img} alt={d.name} className='team-img' />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

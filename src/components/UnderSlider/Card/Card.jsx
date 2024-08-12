import './Card.css'


const Card = ({el , i}) => {
  return (
    <div className="card">
      <div className='card-container'>
        <div className='card-up'>
        <div className="card-up-container">       
             <div className='card-up-left'>
                  <p className='card-up-text-1'>{el.name}<br />
                  <span>{el.name1}</span><br />
                  <span className='card-up-text-3'>{el.locations}</span>
                  </p>
             </div> 
             <div className='card-up-right'>
                 <img src={el.img} width={60} height={60} />
              </div> 
          </div>
        </div>
         <div className="card-down">
             <div className='card-down-button'>
                 <button >ارسال رزومه</button>
            </div>
            <div className='card-down-text'>
                  <p>امروز</p>
            </div>
           </div> 
        </div>
    </div>
  )
}

export default Card

import './Onwork.css'


const Onwork = () => {
    const onwerhelp = [
      {
        name:'ثبت آگهی جدید',
        link:'sabtagahi'
      },
      {
        name:'جستجوی بانک رزومه',
        link:'sabtagahi'
      },
      {
        name:'ارزیابی کارجویان',
        link:'sabtagahi'
      },
      {
        name:'پوشه‌‌ رزومه‌ها',
        link:'sabtagahi'
      },
      {
        name:'تعرفه‌ها',
        link:'sabtagahi'
      },
      {
        name:'نمایشگاه‌کار',
        link:'sabtagahi'
      },
      {
        name:'بخش کارفرمایان',
        link:'sabtagahi'
      },
      {
        name:'HR Vision',
        link:'sabtagahi'
      },
    ]
  return (
    <div>
      {onwerhelp.map((el , i) =>(
         <div key={i + 1} className='onwerhelp'>
            <div href={{ pathname : `${el.link}`}}>
                {el.name}
            </div>
         </div>
       ))}
    </div>
  )
}

export default Onwork
import './Worker.css'




const Worker = () => {
  const workerhelp = [
    {
        name:'رزومه ساز دو زبانه',
        link:'resume'
    },
    {
        name:'جستجوی فرصت‌های شغلی',
        link:'resume'
    },
    {
        name:'سوالات متداول',
        link:'resume'
    },
    {
        name:'رده بندی شرکت ها',
        link:'resume'
    },
    {
        name:'آشنایی با شرکت ها',
        link:'resume'
    },
    {
        name:'رزومه ساز دو زبانه',
        link:'resume'
    },
    {
        name:'رزومه ساز دو زبانه',
        link:'resume'
    },
    {
        name:'داده‌های بازار کار',
        link:'resume'
    },
  ]


  return (
    <div>
       {workerhelp.map((el , i) =>(
         <div key={i + 1} className='workerhelp'>
            <div href={{ pathname : `${el.link}`}}>
                {el.name}
            </div>
         </div>
       ))}
    </div>
  )
}

export default Worker
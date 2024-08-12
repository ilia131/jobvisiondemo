import './Aboutjob.css'



const Aboutjob = () => {
  const abjArray = [
    {
        name: 'درباره ما',
        link:'/about-us'
    },
    {
        name: 'سوالات متداول',
        link:'/question'
    },
    {
        name: 'تماس با ما',
        link:'/contact-us'
    },
    {
        name: 'قوانین و مقررات',
        link:'/privacy-policy'
    },

  ]
  return (
    <div>
         {abjArray.map((el , i) =>(
         <div key={i + 1} className='abj'>
            <div href={{ pathname : `${el.link}`}}>
                {el.name}
            </div>
         </div>
       ))}
    </div>
  )
}

export default Aboutjob
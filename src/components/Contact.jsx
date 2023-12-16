import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion';
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../Utils/motion";
import toast from "react-hot-toast";
//template_e5rw3mj
//service_lajllhr
//JNKdBh4-SqH_asdv7
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_lajllhr', 'template_e5rw3mj', {
      from_name: form.name,
      to_name: `Moamen`,
      from_email: form.email,
      to_email: 'moamenabdeltawab@gmail.com',
      message: form.message
    },'JNKdBh4-SqH_asdv7'
    ).then(()=>{
      setLoading(false);
      toast('Thanks, I will get back to you as soon as possible!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
      );
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      toast('Sorry, something went wrong.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
      );
    })
  }
  const formRef = useRef();

  return <>
  
  <div 
  className="xl:mt-12 xl:flex-row flex-col-reverse 
  flex gap-10 overflow-hidden">
    <motion.div
    variants={slideIn('left','tween', 0.2, 1)}
    className="flex-[0.75] bg-black-100 rounded-2xl p-8">
      <p className= {styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form action="" 
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
      >
        <label
        className="flex flex-col"
        htmlFor="">
          <span 
          className="text-white font-medium mb-4"
          >
            Your name
            </span>
            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
             />
        </label>

        <label
        className="flex flex-col"
        htmlFor="">
          <span 
          className="text-white font-medium mb-4"
          >
            Your email
            </span>
            <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
             />
        </label>

        <label
        className="flex flex-col"
        htmlFor="">
          <span 
          className="text-white font-medium mb-4"
          >
            Your message
            </span>
            <textarea
            rows='7' 
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What's your message"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
             />
        </label>
        <button 
        type="submit"
        className="btn py-2 px-7 text-[20px] outlined-none w-fit text-white text-bold shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>

    <motion.div
    variants={slideIn('right','tween', 0.2, 1)}
    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    >
      <EarthCanvas />
    </motion.div>
  </div>
  
  </>
}

export default SectionWrapper(Contact, 'contact')
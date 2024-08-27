import SectionTitle from '../../../minorComponents/SectionTitle/SectionTitle'
import './Contact.css'
import ContactCard from './ContactCard/ContactCard'
import contact_man from '../../../assets/contact-man.png'
import sticker_burger from '../../../assets/sticker-burger.svg'
import sticker_soda from '../../../assets/sticker-soda.svg'
import ContactSocial from '../../../minorComponents/ContactSocial/ContactSocial'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
        <div className="contact_container container grid">
        <SectionTitle title='Contact Now' />

        <div className="contact_content grid">
            <div className="contact_data grid">
                {/* <!-- Contact us start --> */}
                <div>
                    <h3 className="contact_title">Write Us</h3>

                    <div className="contact_social">
                        <ContactSocial linkIcon='https://www.whatsapp.com/' iconImg={<><svg><path fill="currentColor" d="M12.001 2c-5.523 0-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.344 21.129 22 16.992 22 12c0-5.523-4.477-10-10-10"></path></svg></>}/>
                        <ContactSocial linkIcon='https://www.whatsapp.com/' iconImg={<><svg><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"></path></svg></>}/>
                        <ContactSocial linkIcon='https://www.whatsapp.com/' iconImg={<><svg><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.642-2.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"></path></svg></>}/>
                    </div>
                </div>
                {/* <!-- Contact us end --> */}

                {/* <!-- Contact adress #1 start --> */}
                <ContactCard contactTitle='Call Us And order' info={<><span>+00-987-7654-321<br/>+11-012345</span></>}/>
                {/* <!-- Contact adress #1 end --> */}

                {/* <!-- Contact adress #2 start --> */}
                <ContactCard contactTitle='Find us here' info={<><span>Lima - Sun City - Peru<br/>Av. Moon #4321</span></>}/>
                {/* <!-- Contact adress #2 end --> */}
            </div>
            
            <div className="contact_image">
                <img src={contact_man} alt="image" className="contact_img" />
            </div>
        </div>

        <img src={sticker_burger} alt="image" className="contact_sticker-1" />
        <img src={sticker_soda} alt="image" className="contact_sticker-2" />
        </div>
    </section>
  )
}

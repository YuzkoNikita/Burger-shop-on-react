// eslint-disable-next-line react/prop-types
export default function ContactCard({contactTitle, info}) {
  return (
    <div>
        <h3 className="contact_title">{contactTitle}</h3>

        <address className="contact_info">{info}</address>
    </div>
  )
}
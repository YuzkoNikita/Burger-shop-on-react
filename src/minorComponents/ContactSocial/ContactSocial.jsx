// eslint-disable-next-line react/prop-types
export default function ContactSocial({linkIcon, iconImg}) {
  return (
    <>
       <a href={linkIcon} target="_blank">
        {iconImg}
       </a>
    </>
  )
}

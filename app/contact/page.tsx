import ContactImage from "@/components/ContactImage";
import CollaborateForm from "@/components/contacts/CollaborateForm";


export default function Contact() {
  return (
    <>
      <section 
      className="relative overflow-hidden w-full h-[120px]  px-4 md:px-8 lg:px-16" // Added padding for better spacing
      style={{
        backgroundColor: '#183762',
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px'
      }}
    >
     
    </section>
    <CollaborateForm/>
    <ContactImage/>
    
    </>
  )
}
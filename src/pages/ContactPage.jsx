import Contact from "../components/contact/Contact";
import useTheme from "../context/them";

function ContactPage() {
  const { reset } = useTheme();

  reset();
  return (
    <div className="bg-gradient flex justify-center items-center h-auto bg-no-repeat bg-cover bg-center min-h-screen p-8">
      <Contact />
    </div>
  );
}

export default ContactPage;

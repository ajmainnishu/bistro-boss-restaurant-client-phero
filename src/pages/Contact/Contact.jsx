import { Helmet } from "react-helmet-async";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactLocation from "./ContactLocation/ContactLocation";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <ContactBanner></ContactBanner>
            <ContactLocation></ContactLocation>
        </div>
    );
};

export default Contact;